---
title: UI & Theming (Execution Guide)
description: How to style components and handle theming using Tailwind + Nativewind.
---

## UI Styling Rules

### 1. Styling System (Mandatory)

- **Use Tailwind CSS via Nativewind v4**
- **Do NOT use**:
  - `StyleSheet.create`
  - styled-components
  - restyle
- **Always style using `className` in JSX**

Nativewind v4 applies Tailwind classes directly to React Native components.  
No `styled()` wrappers are used.

Example reference:

- `src/components/card.tsx`

---

## Tailwind / Nativewind Configuration

### 2. Theme Customization

- Tailwind config is the single source of truth
- Extend styles in:
  - `tailwind.config.js`
  - `ui/theme/*`

You may customize:

- colors
- spacing
- typography
- border radius
- shadows

Custom colors live in:

- `ui/theme/colors.js`

Use them via Tailwind class names.

---

## Dark Mode

### 3. Dark Mode Strategy

- Dark mode is **enabled by default**
- Theme handling is delegated to:
  - **Nativewind**
  - **expo-router**

You are responsible only for:

- defining colors
- applying Tailwind dark variants

---

### 4. Theme Setup Flow

1. Define color palettes in:
   - `ui/theme/colors.js`
2. Build the theme object in:
   - `src/lib/use-theme-config.tsx`
3. Pass the theme to `ThemeProvider` in:
   - `src/app/_layout.tsx`

References:

- `src/lib/use-theme-config.tsx`
- `src/app/_layout.tsx`

---

### 5. Persisted Theme Selection

- Theme preference is stored in persistent storage
- On app load:
  - `loadSelectedTheme` restores saved theme
  - If none exists → system theme is used

Hooks involved:

- `useSelectedTheme`
- `loadSelectedTheme`

Reference:

- `src/lib/hooks/use-selected-theme.tsx`

---

## Component-Level Dark Mode

### 6. Preferred Method (Always Use This)

Use Tailwind `dark:` variants directly in `className`.

```tsx
<View className="border-neutral-200 dark:border-yellow-700" />
```

This covers most cases.

### 7. Fallback Method (Rare Cases Only)

Only use useColorScheme when className is insufficient.

```tsx
import { useColorScheme } from 'nativewind';

const scheme = useColorScheme();

const style =
  scheme === 'dark'
    ? { backgroundColor: 'black' }
    : { backgroundColor: 'white' };
```

⚠️ Avoid this unless strictly necessary.
