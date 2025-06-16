# Natively UI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?logo=expo&logoColor=white)](https://expo.dev/)

A **shadcn/ui-inspired** component library for React Native and Expo, built with **TailwindCSS** (via NativeWind). Create beautiful, accessible, and customizable mobile interfaces with the same developer experience you love from React!

## ✨ Features

- 🚀 **Expo-first** - Zero configuration setup with Expo
- 🎨 **Fully customizable** - Built with TailwindCSS/NativeWind for seamless theming
- 📱 **Cross-platform** - Works on iOS, Android, and web
- 🔧 **TypeScript ready** - Full type safety out of the box
- ♿ **Accessible** - Built with accessibility best practices
- 🎯 **Tree-shakeable** - Import only what you need

## 🏗️ Monorepo Structure

```
natively-ui/
├── apps/
│   ├── web/          # Next.js documentation website
│   └── mobile/       # Expo development app
├── packages/
│   ├── eslint-config/# Shared ESLint configuration
│   └── typescript-config/ # Shared TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayushhgupta39/natively-ui.git
   cd natively-ui
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

### Development

#### Start the component development environment

```bash
# Start the Expo mobile app (for component development)
pnpm dev --filter mobile

# Start the documentation website (for previews and docs)
pnpm dev --filter web
```

#### Preview on device

Use the Expo Go app or development build:
- Scan QR code with Expo Go app
- Press 'i' for iOS simulator
- Press 'a' for Android emulator

## Usage in Your Project

### Installation

```bash
# Install required peer dependencies
npm install react-native-svg nativewind tailwindcss
```

### Setup

1. Configure NativeWind in your project (follow NativeWind setup guide)
2. Import and use components:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from '@repo/ui';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center p-4">
      <Card className="w-full max-w-sm p-6">
        <Text className="text-2xl font-bold mb-4">Welcome!</Text>
        <Button onPress={() => alert('Hello!')}>
          Get Started
        </Button>
      </Card>
    </View>
  );
}
```

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev              # Start all apps
pnpm dev --filter mobile  # Start mobile app only
pnpm dev --filter web    # Start website only

# Build packages
pnpm build            # Build all packages
pnpm build --filter @repo/ui  # Build UI library only

# Code quality
pnpm lint             # Run ESLint
pnpm type-check       # Run TypeScript checks
pnpm test            # Run tests

# Clean builds
pnpm clean           # Clean all build artifacts
```

## Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/amazing-component
   ```
3. Make your changes
   - Update documentation in `apps/web`
   - Add components and examples to `apps/mobile/`
4. Test your changes
   ```bash
   pnpm lint && pnpm type-check && pnpm test
   ```
5. Commit and push
   ```bash
   git commit -m "feat: add amazing component"
   git push origin feature/amazing-component
   ```
6. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write TypeScript with proper type definitions
- Update documentation for new features

## Issues & Support

- [Bug Reports](https://github.com/ayushhgupta39/natively-ui/issues)
- [Feature Requests](https://github.com/ayushhgupta39/natively-ui/pulls)
- [Discussions](https://github.com/ayushhgupta39/natively-ui/issues) - Ask questions and share ideas

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [shadcn/ui](https://ui.shadcn.com/)
- Built with [NativeWind](https://www.nativewind.dev/)
- Powered by [Expo](https://expo.dev/)
