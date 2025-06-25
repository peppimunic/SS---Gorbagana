# Contributing to Seven Seas: Gorbagana Edition

We love your input! We want to make contributing to Seven Seas as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Local Development Setup

1. Install dependencies:
   ```bash
   # Install Rust and Anchor
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   cargo install --git https://github.com/project-serum/anchor anchor-cli --locked

   # Install Node.js dependencies
   cd app
   npm install
   ```

2. Configure Gorbagana:
   ```bash
   solana config set --url https://testnet.gorbagana.network
   ```

3. Build the program:
   ```bash
   cd program
   anchor build
   ```

4. Start the development server:
   ```bash
   cd ../app
   npm run dev
   ```

## Testing

Run the test suite:
```bash
# Run Anchor tests
cd program
anchor test

# Run frontend tests
cd ../app
npm test
```

## Pull Request Process

1. Update the README.md with details of changes to the interface
2. Update the version numbers in any examples files and the README.md to the new version
3. You may merge the Pull Request in once you have the sign-off of two other developers

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [issue tracker](https://github.com/YOUR_USERNAME/seven-seas-gorbagana/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/YOUR_USERNAME/seven-seas-gorbagana/issues/new).

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## License

By contributing, you agree that your contributions will be licensed under its MIT License. 