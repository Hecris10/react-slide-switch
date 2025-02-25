# React Component Slider

A React component for creating smooth sliding transitions between components. Perfect for tabs, carousels, and any UI that requires horizontal sliding animations.

## Installation

```bash
npm install react-slide-switch
# or
yarn add react-slide-switch
# or
pnpm add react-slide-switch
#or
bun add react-slide-switch
```

## Preview

![React Slide Switcher](react-slide-switcher.gif)

## Usage

```jsx
import { ComponentSlider } from 'react-slide-switch';

function App() {
  const [position, setPosition] = useState(0);
  
  return (
    <ComponentSlider
      position={position}
      duration={500}
      transition="ease-in-out"
      autoHeight
    >
      <div>First slide</div>
      <div>Second slide</div>
      <div>Third slide</div>
    </ComponentSlider>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| position | number | required | Current slide position (0-based index) |
| children | ReactNode[] | required | Array of components to slide between |
| duration | number | 500 | Animation duration in milliseconds |
| transition | string | "ease-linear" | CSS transition timing function |
| unMountOnExit | boolean | false | Whether to unmount hidden slides |
| autoHeight | boolean | false | Whether to automatically adjust height |
| minHeight | number \| string | undefined | Minimum height of the slider |
| className | string | "" | Additional CSS classes |

## Features

- Smooth sliding transitions
- Auto height adjustment
- Customizable animation duration and timing
- Optional unmounting of hidden slides
- TypeScript support
- Zero dependencies (except React)

## Running Tests

To run the tests for this project, you can use the following command:

```bash
npm test
```

This will execute the tests using Jest. Make sure to install the dependencies first by running `npm install`. If you want to add more tests, create a `__tests__` directory and add your test files there.

## License

MIT
