import { Box, Button, Link, Text, VStack } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useWallet } from "@solana/wallet-adapter-react"

const GorbaganaInfo = () => {
  const { publicKey } = useWallet()

  return (
    <Box
      p={4}
      bg="blue.50"
      borderRadius="md"
      border="1px"
      borderColor="blue.200"
      maxW="600px"
      mx="auto"
      my={4}
    >
      <VStack spacing={3} align="stretch">
        <Text fontSize="lg" fontWeight="bold">
          🚀 Playing on Gorbagana Testnet
        </Text>

        <Text>
          Seven Seas runs on Gorbagana testnet, showcasing lightning-fast
          transactions and fair gameplay for Web3 gaming.
        </Text>

        {publicKey ? (
          <Box>
            <Text fontWeight="bold">Need test tokens?</Text>
            <Text>
              1. Join the{" "}
              <Link
                href="https://t.me/gorbagana"
                isExternal
                color="blue.500"
              >
                Gorbagana Telegram <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
            <Text>
              2. Send this command in chat:
              <Box
                bg="gray.100"
                p={2}
                mt={1}
                borderRadius="md"
                fontFamily="mono"
              >
                !request {publicKey.toString()}
              </Box>
            </Text>
            <Text>3. Wait a few seconds to receive your test tokens</Text>
          </Box>
        ) : (
          <Text color="orange.500">
            Connect your wallet to see token request instructions
          </Text>
        )}

        <Box>
          <Text fontWeight="bold">Game Tokens:</Text>
          <Text>• Gold - For rewards and trading</Text>
          <Text>• Cannon - Increases ship damage</Text>
          <Text>• Rum - Increases ship health</Text>
        </Box>

        <Link
          href="https://github.com/YOUR_USERNAME/seven-seas-gorbagana"
          isExternal
          color="blue.500"
        >
          View source code <ExternalLinkIcon mx="2px" />
        </Link>
      </VStack>
    </Box>
  )
}

export default GorbaganaInfo 