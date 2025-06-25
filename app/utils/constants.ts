import { PublicKey } from "@solana/web3.js"

// Program ID
export const PROGRAM_ID = new PublicKey("2a4NcnkF5zf14JQXHAv39AsRf7jMFj13wKmTL6ZcDQNd")

// Gorbagana RPC endpoint
export const GORBAGANA_RPC = "https://testnet.gorbagana.network"

// Game token mints (replace with actual Gorbagana test token mints)
export const goldTokenMint = new PublicKey("gorb111111111111111111111111111111111111111")
export const cannonTokenMint = new PublicKey("gorb222222222222222222222222222222222222222")
export const rumTokenMint = new PublicKey("gorb333333333333333333333333333333333333333")

// PDAs
export const [gameDataAccount] = PublicKey.findProgramAddressSync(
  [Buffer.from("level")],
  PROGRAM_ID
)

export const [chestVault] = PublicKey.findProgramAddressSync(
  [Buffer.from("chestVault")],
  PROGRAM_ID
)

export const [gameActions] = PublicKey.findProgramAddressSync(
  [Buffer.from("gameActions")],
  PROGRAM_ID
)

export const [tokenAccountOwnerPda] = PublicKey.findProgramAddressSync(
  [Buffer.from("token_account_owner_pda")],
  PROGRAM_ID
)

export const [tokenVault] = PublicKey.findProgramAddressSync(
  [Buffer.from("token_vault"), goldTokenMint.toBuffer()],
  PROGRAM_ID
)

// Game constants
export const BOARD_SIZE = 10
export const PLAYER_KILL_REWARD = 0.05 // In Gorbagana test tokens
export const CHEST_REWARD = 0.05 // In Gorbagana test tokens
export const PLAY_GAME_FEE = 0 // Free to play during testnet
