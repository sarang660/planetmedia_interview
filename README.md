# Planetmedia Interview

A React Native mobile application built with Expo.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- EAS CLI (for builds)

## Setup

1. Install dependencies

   ```bash
   npm install
   ```

2. Set up environment variables

   Create a `.env` file in the root directory:

   ```
   EXPO_PUBLIC_API_URL=https://your-api-url.com
   ```

## Running the App

### Development

```bash
npx expo start
```

You can open the app in:
- **Android emulator**: Press `a`
- **iOS simulator**: Press `i`
- **Expo Go app**: Scan the QR code with your device

### Run on specific platform

```bash
# iOS
npx expo run:ios

# Android
npx expo run:android
```

## Building with EAS

### Install EAS CLI

```bash
npm install -g eas-cli
eas login
```

### Build Commands

```bash
# Development build (internal distribution)
eas build --profile development

# Preview build (APK for Android)
eas build --profile preview

# Production build
eas build --profile production

# Platform specific
eas build --profile preview --platform android
eas build --profile preview --platform ios
```

## Project Structure

```
├── app/                  # App screens (Expo Router)
├── components/           # Reusable components
│   ├── Common/          # Shared components (Header, BottomNavigation)
│   ├── Home/            # Home screen components
│   └── ui/              # UI primitives
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and configurations
├── api/                 # API service functions
├── styles/              # Global styles and colors
└── types/               # TypeScript type definitions
```
