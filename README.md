# Mi Amor — React Native (Expo) App

A polished, mobile-first React Native application built with **Expo**. Mi Amor is a social platform that combines social features with monetization flows — users can join, complete tasks, and receive payouts. This repository contains the app UI, navigation, payment flow, feature cards, FAQ, and media assets (images + hero video).

---

## Table of contents

1. [Project summary](#project-summary)
2. [Key features](#key-features)
3. [Repository / file overview](#repository--file-overview)
4. [Requirements](#requirements)
5. [Getting started (local development)](#getting-started-local-development)
6. [Building / running on devices & simulators](#building--running-on-devices--simulators)
7. [Important implementation notes & troubleshooting](#important-implementation-notes--troubleshooting)
8. [Styling & assets](#styling--assets)
9. [Tests & quality suggestions](#tests--quality-suggestions)
10. [How to contribute](#how-to-contribute)
11. [License & attribution](#license--attribution)
12. [Contact / support](#contact--support)

---

## Project summary

Mi Amor is implemented as an Expo-managed React Native project. It includes key screens and components such as:

* `HomeScreen` (hero, video, slider, features, How It Works band, CTA band, FAQ)
* `RegisterScreen` (signup form, matchmaking code flow)
* `PaymentScreen` (bank details, copy-to-clipboard, Telegram / WhatsApp deep links)
* `ContactScreen`
* Shared components: `FAQSection`, `CountdownTimer`, `HeroVideo`, `AnimatedFeatureCard`

The app uses modern libraries such as React Navigation, Reanimated v3, and Expo modules (clipboard, linear-gradient). The repo contains local assets under `assets/` including images and a `hero.mp4` video used in the hero section.

Repository root: `/Users/favour/Documents/mi-amor` (local path shown during development). The canonical remote repository is: `https://github.com/Niz46/mi-amor.git`.

---

## Key features

* Clean, modular UI components with responsive layouts
* Hero video component for an engaging landing experience (`assets/videos/hero.mp4`)
* Horizontal image slider (`assets/images/slider*.jpeg`)
* FAQ accordion with smooth LayoutAnimation transitions
* Payment screen with copy-to-clipboard and prefilled messaging (Telegram / WhatsApp)
* Theming support and centralized `src/themes/theme.js`
* Bottom tab navigation and native-stack modals for registration/payment

---

## Repository / file overview

Important folders and files (high-level):

``` /src
  /components
    AnimatedFeatureCard.js
    CountdownTimer.js
    FAQSection.js
    HeroVideo.js
  /navigations
    BottomTabs.js
    RootNavigator.js
  /screens
    HomeScreen.js
    RegisterScreen.js
    PaymentScreen.js
    ContactScreen.js
  /themes
    theme.js
/assets
  /images
    logo.png, slider1.jpeg ... slider6.jpg
  /videos
    hero.mp4
App.js
package.json
babel.config.js
README.md
```

---

## Requirements

Minimum / recommended local environment:

* Node.js (LTS recommended) — e.g. v18+
* npm (bundled) or Yarn
* Expo CLI (globally installed for convenience): `npm i -g expo-cli` or use `npx expo`
* Android SDK / iOS (Xcode) only if you plan to run native simulators. For Expo Go, device + tunnel is enough.

Notable dependencies (from `package.json`):

* `expo` `~53.0.20`
* `react` `19.0.0`
* `react-native` `0.79.5`
* `@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/bottom-tabs`
* `react-native-reanimated` `~3.17.4`
* `react-native-vector-icons` `^10.3.0`
* `expo-clipboard`, `expo-linear-gradient`, `expo-video` (video handling)

> **Note:** If you use `expo` SDK 53, ensure your local tooling (Expo CLI) matches the SDK or use `npx expo` to avoid compatibility issues.

---

## Getting started (local development)

Clone repo and install dependencies:

```bash
# clone
git clone https://github.com/Niz46/mi-amor.git
cd mi-amor

# install dependencies
npm install
# or
yarn install
```

Start the Expo dev server:

```bash
# start Metro / Expo
npm run start
# or
yarn start
```

Open on a device or simulator:

* Expo Go (recommended for quick iteration): scan the QR code with the Expo Go app on your phone.
* Simulators:

  * Android emulator: `npm run android`  (this runs `expo start --android`)
  * iOS simulator (macOS + Xcode): `npm run ios` (this runs `expo start --ios`)

---

## Building / running on devices & simulators

### Expo Go (recommended during development)

1. Run `npm run start`.
2. Scan the QR code with Expo Go, or press `a` / `i` in the terminal to open an emulator.

### Standalone builds (production)

If you want to produce a standalone binary, follow Expo’s build workflow (EAS Build recommended). Example high-level steps:

```bash
# ensure EAS CLI installed
npm install -g eas-cli

# login to expo
eas login

# configure eas.json (platforms & credentials)
# run an android build or ios build
eas build --platform android
eas build --platform ios
```

Refer to Expo documentation for credentials and signing.

---

## Important implementation notes & troubleshooting

This section collects practical gotchas and how to address them.

### 1. Reanimated plugin (required)

`react-native-reanimated` requires the Babel plugin `react-native-reanimated/plugin` and **it must be the last plugin** in `babel.config.js`. This repo already includes it; confirm your file looks like:

```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

If you see warnings about Reanimated at runtime, restart Metro and clear cache:

```bash
expo start -c
# or
npm start -- --reset-cache
```

### 2. Gesture Handler root

The app wraps the navigation root with `GestureHandlerRootView` in `App.js` — this is required for `react-native-gesture-handler` to work reliably.

### 3. Vector icons

Project uses `react-native-vector-icons`. In some files (examples / snippets) `@expo/vector-icons` may be used. Choose one approach and be consistent:

* If using Expo-managed workflow: install `@expo/vector-icons` (already available in Expo projects).
* If using bare/react-native: ensure `react-native-vector-icons` is properly linked (most modern versions autolink).

If you get missing icon errors:

```bash
# with expo:
expo install @expo/vector-icons
```

### 4. Clipboard & video modules

* `expo-clipboard` is included; ensure the version matches your Expo SDK.
* `expo-video` is used for hero video. If you run into issues with video, consider using `expo-av` (`Video` component) depending on your SDK.

### 5. Deep linking to Telegram/WhatsApp

The Payment screen constructs external links for Telegram and WhatsApp. On some simulators these apps are not available; test deep links on a physical device with the target app installed.

### 6. LayoutAnimation on Android

`LayoutAnimation` can require enabling on older RN versions. The code avoids using the experimental UIManager call (the project uses the new architecture). If you face animation issues, test on device and ensure the RN version supports the API.

### 7. Metro cache & stale builds

If you see stale JS or assets not updating:

```bash
expo start -c
# or delete node_modules and reinstall:
rm -rf node_modules package-lock.json yarn.lock
npm install
```

---

## Styling & assets

* Central theme file: `src/themes/theme.js` (colors and shared constants).
* Assets folder: `assets/images/` and `assets/videos/` — logo, sliders, and hero video.
* Many components use consistent border radii and shadows. If you want a single source of truth for radii/shadows, consider centralizing values in `theme.js`.

---

## Tests & quality suggestions

This repository does not include automated tests. Recommended next steps for production readiness:

* Add unit tests: `jest` for component-level tests (snapshots, render assertions).
* Add end-to-end tests: Detox or Appium for basic flows (register, payment deep link).
* Add ESLint + Prettier and enforce via pre-commit hooks (`husky`, `lint-staged`).

---

## How to contribute

1. Fork the repository and create a feature branch: `git checkout -b feat/your-feature`
2. Keep commits focused and atomic.
3. Open a pull request with a clear description and testing steps.
4. If you change dependencies, update `README` and justify the change.

Contribution guidelines (suggested):

* Follow the existing code style.
* Include small screenshots for UI changes in PR descriptions.
* When adding new native dependencies, document necessary installation steps.

---

## Common commands

```bash
# install deps
npm install

# run dev server (Expo)
npm run start

# open in Android emulator
npm run android

# open in iOS simulator (macOS/Xcode required)
npm run ios

# run web (Expo web)
npm run web

# start with cache clear
expo start -c
```

---

## License & attribution

This project is provided under the **MIT License** — copy and paste the full MIT license into `LICENSE` if you want explicit license coverage.

``` MIT License

Copyright (c) 2025 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

*(Replace `[Favour Nzeh]` with the project owner or organization.)*

---

## Contact & support

* Repo: `https://github.com/Niz46/mi-amor.git`
* For issues or support open an issue on the GitHub repository.
* For product-related questions contact: `support@miamorplatform.com` (addresses used in ContactScreen).

---

## Acknowledgements

* Built with Expo and React Native.
* Icons: `react-native-vector-icons`.
* Layout/animation powered by `react-native-reanimated`.
* Thanks to contributors for UI assets and sample components.
