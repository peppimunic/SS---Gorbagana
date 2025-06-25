# Seven Seas: Gorbagana Edition 🏴‍☠️

A multiplayer pirate battle game powered by the Gorbagana testnet - showcasing the speed and fairness of next-generation Solana gaming!

## 🎮 Game Overview

Seven Seas is an on-chain multiplayer PvP game where players battle with pirate ships on a dynamic ocean grid. Features include:

- Real-time multiplayer ship battles
- NFT integration for ships and avatars
- Token rewards for victories and treasure collection
- Cthulhu boss battles with audience participation
- Automated wind mechanics using Clockwork

## ⚡ Why Gorbagana?

This game showcases Gorbagana's advantages for Web3 gaming:

- Lightning-fast transaction confirmations
- Fair and predictable transaction ordering
- Low transaction costs
- Reliable testnet infrastructure
- Active community support

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [Rust](https://rustup.rs/)
- [Anchor](https://www.anchor-lang.com/)
- [Backpack Wallet](https://www.backpack.app/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/seven-seas-gorbagana
cd seven-seas-gorbagana
```

2. Install dependencies:
```bash
# Install Anchor dependencies
cd program
anchor build

# Install frontend dependencies
cd ../app
npm install
```

3. Configure Gorbagana:
```bash
solana config set --url https://testnet.gorbagana.network
```

### Running Locally

1. Start the frontend:
```bash
cd app
npm run dev
```

2. Open http://localhost:3000 in your browser

## 🎯 Playing the Game

1. Install the Backpack wallet extension
2. Connect your wallet to Gorbagana testnet
3. Request test tokens from Gorbagana:
   - Join the [Gorbagana Telegram](https://t.me/gorbagana)
   - Use the !request command in chat
   - Receive test tokens to your wallet
4. Start playing:
   - Select an NFT as your ship
   - Use arrow keys or buttons to navigate
   - Collect treasures and battle other players
   - Earn rewards in Gorbagana test tokens

## 🏆 Rewards and Scoring

- Destroying enemy ships: 0.05 test tokens
- Collecting treasure chests: 0.05 test tokens
- Ship upgrades available with cannon and rum tokens
- Leaderboard tracking for most successful pirates

## 🔧 Technical Details

### Smart Contract

- Program ID: [YOUR_PROGRAM_ID]
- Token Mints:
  - Gold: [GOLD_TOKEN_MINT]
  - Cannon: [CANNON_TOKEN_MINT]
  - Rum: [RUM_TOKEN_MINT]

### Architecture

- Anchor framework for Solana programs
- Next.js + Chakra UI frontend
- Unity 3D game client
- Backpack wallet integration
- Real-time WebSocket updates

## 🤝 Contributing

We welcome contributions! Please check our [Contributing Guidelines](CONTRIBUTING.md).

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Original Seven Seas game by Solana Game Examples
- Gorbagana team for testnet infrastructure
- Backpack team for wallet support
- Solana ecosystem developers

## 📣 Social Media

Tweet about your experience:
```
🏴‍☠️ Just played Seven Seas on @Gorbagana_chain testnet! 
⚔️ Battle pirates and collect treasure in this epic Web3 game
⚡ Lightning fast gameplay thanks to Gorbagana

Try it now: [YOUR_DEMO_URL]

@sarv_shaktimaan @lex_node #GorbaganaTestnet