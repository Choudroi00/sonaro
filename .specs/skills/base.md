# React Native/Expo Project

Current Project is, a production grade, mobile React Native Project, You will find here project context and rules that you should adhere to during tasks execution

Every time you choose to apply a rule(s), explicitly state the rule(s) in the output. You can abbreviate the rule description to a single word or phrase.

## Project Context

## Code Style and Structure

- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Ensure components are modular, reusable, and maintainable.
- Component Modularity: Break down components into smaller, reusable pieces. Keep components focused on a single responsibility and shouldn't be more than 80 lines of code.
- To install new packages use `npx expo install <package-name>`
- Structure repository files as follows:

```
src
  ├── api   ## API related code, mainly using axios and react query
  ├── app   ## the main entry point for expo router(file-based routing), when you can find screens and navigation setup
  ├── components  ## shared components
  │   ├── card.tsx
  │   └── ui  ## core ui components. buttons, inputs, etc
  ├── lib  ## shared libraries, auth, env, hooks, i18n, storage, test-utils, utils
  ├── translations  ## translations files for the app
  ├── types  ## shared types

```

## Tech Stack

- Expo
- React Native
- TypeScript
- Nativewind ( Tailwind CSS for React Native )
- Expo Router
- React Query with React Query Kit
- Zustand
- React Native Keyboard Controller
- React Native SVG
- React Native MMKV
- Axios
- React Hook Form
- Zod
- I18next
- @gorhom/bottom-sheet
- @shopify/flash-list
- Moti
- React Native Reanimated
- React Native Gesture Handler
- React Native Fast TFLite

## Naming Conventions

- Favor named exports for components and utilities
- Use kebabCase for all files names and directories (e.g., visa-form.tsx)

## TypeScript Usage

- Use TypeScript for all code; prefer types over interfaces
- Avoid enums; use const objects with 'as const' assertion
- Use functional components with TypeScript interfaces
- Define strict types for message passing between different parts of the extension
- Use absolute imports for all files @/...
- Avoid try/catch blocks unless there's good reason to translate or handle error in that abstraction
- Use explicit return types for all functions

## State Management

- Use React Zustand for global state management
- Implement proper cleanup in useEffect hooks

## Syntax and Formatting

- Use "function" keyword for pure functions
- Avoid unnecessary curly braces in conditionals
- Use declarative JSX
- Implement proper TypeScript discriminated unions for message types

## UI and Styling

- Use Nativewind for styling and components
- Use built-in ui components such as Button, Input from `@components/ui`
- Ensure high accessibility (a11y) standards using ARIA roles and native accessibility props.
- Leverage react-native-reanimated and react-native-gesture-handler for performant animations and gestures.
- Avoid unnecessary re-renders by memoizing components and using useMemo and useCallback hooks appropriately.
- Make sure to use defined colors and fonts in the tailwind config file.

## Error Handling

- Log errors appropriately for debugging
- Provide user-friendly error messages
