import { useEffect, useState } from "react"
import { Box, Flex, Text, VStack, Grid, HStack } from "@chakra-ui/react"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useProgram } from "@/contexts/ProgramContext"
import { AccountInfo, PublicKey } from "@solana/web3.js"
import { IdlAccounts, Idl } from "@coral-xyz/anchor"
import { gameDataAccount } from "@/utils/constants"
import {
  StarIcon,
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
  ArrowUpIcon,
} from "@chakra-ui/icons"
import { BOARD_SIZE, PLAYER_KILL_REWARD, CHEST_REWARD } from "../utils/constants"
import ShipActionButtons from "./ShipActionButtons"
import ShipSetupButtons from "./ShipSetupButtons"
import ResetButton from "./ResetButton"

// Not sure if this does anything
type GameState = IdlAccounts<Idl>["gameDataAccount"]

// Not sure how to implement render "shooting"
const GameBoard = () => {
  const { publicKey } = useWallet()
  const { connection } = useConnection()
  // Program from context
  const { program } = useProgram()

  const [state, setState] = useState<GameState>()
  const [gameStats, setGameStats] = useState({
    kills: 0,
    chestsCollected: 0,
    tokensEarned: 0,
  })

  // Fetch the game state account on load
  useEffect(() => {
    if (!program) return
    const fetchBoard = async () => {
      const gameState = await program!.account.gameDataAccount.fetch(
        gameDataAccount
      )
      console.log(JSON.stringify(gameState, null, 2))
      // console.log(gameState.board)
      setState(gameState)
    }

    fetchBoard()
  }, [program])

  const handleAccountChange = (accountInfo: AccountInfo<Buffer>) => {
    try {
      // deserialize the game state account data
      const data = program?.coder.accounts.decode(
        "gameDataAccount",
        accountInfo.data
      )
      setState(data)
    } catch (error) {
      console.log("Error decoding account data:", error)
    }
  }

  useEffect(() => {
    if (!program) return

    const subscriptionId = connection.onAccountChange(
      gameDataAccount,
      handleAccountChange
    )

    return () => {
      // Unsubscribe from the account change subscription when the component unmounts
      connection.removeAccountChangeListener(subscriptionId)
    }
  }, [program])

  const renderTile = (row: any, colIndex: number, publicKey: PublicKey) => {
    switch (row[colIndex].state) {
      case 0:
        return null
      case 1:
        let color =
          row[colIndex].player == publicKey?.toBase58() ? "red.500" : "black"
        return (
          <Box>
            {row[colIndex].lookDirection === 0 && <ArrowUpIcon color={color} />}
            {row[colIndex].lookDirection === 1 && (
              <ArrowForwardIcon color={color} />
            )}
            {row[colIndex].lookDirection === 2 && (
              <ArrowDownIcon color={color} />
            )}
            {row[colIndex].lookDirection === 3 && (
              <ArrowBackIcon color={color} />
            )}
            <Text>{Number(row[colIndex].health)}</Text>
          </Box>
        )
      case 2:
        return <StarIcon />
      default:
        return null
    }
  }

  return (
    <VStack spacing={4} w="100%">
      <HStack spacing={8} w="100%" justify="center" p={4} bg="blue.50" borderRadius="md">
        <StatBox label="Ships Destroyed" value={gameStats.kills} />
        <StatBox label="Chests Collected" value={gameStats.chestsCollected} />
        <StatBox
          label="Tokens Earned"
          value={`${gameStats.tokensEarned.toFixed(2)} GORB`}
        />
      </HStack>

      <Box
        borderWidth={2}
        borderColor="blue.200"
        borderRadius="lg"
        p={4}
        bg="white"
        w="100%"
        maxW="600px"
      >
        <Grid templateColumns={`repeat(${BOARD_SIZE}, 1fr)`} gap={1}>
          {state?.board[0].map((_: any, colIndex: number) => (
            <Flex key={colIndex}>
              {state.board.map((row: any[], rowIndex: number) => (
                <Box
                  key={rowIndex}
                  w="40px"
                  h="40px"
                  border="1px"
                  borderColor="black"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {renderTile(row, colIndex, publicKey!)}
                </Box>
              ))}
            </Flex>
          ))}
        </Grid>
      </Box>

      <Box>
        <Text fontSize="sm" color="gray.600" textAlign="center">
          🚀 Powered by Gorbagana Testnet
          <br />
          Destroy ships: {PLAYER_KILL_REWARD} GORB • Collect chests:{" "}
          {CHEST_REWARD} GORB
        </Text>
      </Box>

      <ShipActionButtons />
      <ShipSetupButtons />
      <ResetButton />
    </VStack>
  )
}

const StatBox = ({ label, value }: { label: string; value: string | number }) => (
  <Box
    bg="white"
    p={3}
    borderRadius="md"
    boxShadow="sm"
    textAlign="center"
    minW="150px"
  >
    <Text fontSize="sm" color="gray.600">
      {label}
    </Text>
    <Text fontSize="xl" fontWeight="bold">
      {value}
    </Text>
  </Box>
)

export default GameBoard
