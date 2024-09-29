# Next App Router Transitions 🚀

Elevate your Next.js App Router projects with silky-smooth page transitions!
This package provides an easy-to-use component that adds fluid animations
between route changes, enhancing the overall user experience of your Next.js
applications.

## Features

- 🎭 Multiple transition effects (fade, slide, block, spiral, and more!)
- 🔧 Fully customizable (duration, ease, colors)
- 📱 Responsive and accessible
- 🧩 Seamless integration with Next.js App Router
- 🪶 Lightweight with minimal setup

## Installation

```bash
npm install next-app-router-transitions framer-motion
```

**Important**: This package requires `framer-motion` as a peer dependency. Make
sure to install it alongside the package.

## Usage

To use Next App Router Transitions in your project, follow these steps:

1. Create a new client component in your app directory, e.g.,
   `app/TransitionLayout.tsx`:

```tsx
"use client";

import { TransitionWrapper } from "next-app-router-transitions";

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TransitionWrapper
      transitionType="fade"
      duration={0.5}
      backgroundColor="#000">
      {children}
    </TransitionWrapper>
  );
}
```

2. Use this component in your root layout (`app/layout.tsx`):

```tsx
import TransitionLayout from "./TransitionLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TransitionLayout>{children}</TransitionLayout>
      </body>
    </html>
  );
}
```

This setup ensures that the transition effects are applied consistently across
your entire application.

## API

The `TransitionWrapper` component accepts the following props:

| Prop            | Type               | Default     | Description                                                                                      |
| --------------- | ------------------ | ----------- | ------------------------------------------------------------------------------------------------ |
| transitionType  | string             | 'fade'      | Type of transition effect ('fade', 'slide', 'block', 'multiBlock', 'spiral', 'blinds', 'bounce') |
| duration        | number             | 0.75        | Duration of the transition in seconds                                                            |
| backgroundColor | string             | 'black'     | Background color of the transition element                                                       |
| ease            | string \| number[] | 'easeInOut' | Easing function for the transition                                                               |
| zIndex          | number             | 50          | z-index of the transition element                                                                |

## Examples

### Fade Transition

```tsx
<TransitionWrapper transitionType="fade" duration={0.3} backgroundColor="#fff">
  {children}
</TransitionWrapper>
```

### Slide Transition

```tsx
<TransitionWrapper transitionType="slide" duration={0.5} backgroundColor="#000">
  {children}
</TransitionWrapper>
```

## Troubleshooting

If you encounter any issues, ensure that:

1. You have installed `framer-motion` as a peer dependency.
2. You're using the `TransitionWrapper` in a client component (with the "use
   client" directive).
3. The `TransitionWrapper` is placed as high as possible in your component tree,
   ideally in the root layout.
4. You have the correct peer dependencies installed (react, react-dom, next,
   framer-motion).

## Contributing

We welcome contributions! Please see our
[Contributing Guide](https://github.com/theogenejr/next-app-router-transitions/blob/main/CONTRIBUTING.md)
for more details.

## License

MIT © Theogene Junior | @theogenejr

---

Happy coding! If you enjoy smooth transitions in your Next.js App Router
projects, don't forget to give us a star on GitHub! ⭐
