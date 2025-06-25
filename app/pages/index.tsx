import { Box, Container, Heading, VStack } from "@chakra-ui/react"
import { useWallet } from "@solana/wallet-adapter-react"
import dynamic from "next/dynamic"
import Head from "next/head"
import { FC } from "react"
import GameBoard from "../components/GameBoard"
import GorbaganaInfo from "../components/GorbaganaInfo"

require("@solana/wallet-adapter-react-ui/styles.css")

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
)

const Home: FC = () => {
  const { publicKey } = useWallet()

  return (
    <div>
      <Head>
        <title>Seven Seas: Gorbagana Edition</title>
        <meta
          name="description"
          content="Battle pirates and collect treasure in this epic Web3 game powered by Gorbagana testnet"
        />
      </Head>

      <Container maxW="container.lg" py={8}>
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" textAlign="center">
            ⚔️ Seven Seas: Gorbagana Edition 🏴‍☠️
          </Heading>

          <Box>
            <WalletMultiButtonDynamic />
          </Box>

          <GorbaganaInfo />

          {publicKey ? (
            <GameBoard />
          ) : (
            <Box p={8} textAlign="center">
              Connect your wallet to start playing!
            </Box>
          )}
        </VStack>
      </Container>
    </div>
  )
}

export default Home
