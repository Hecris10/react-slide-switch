# React Component Slider

A React component for creating smooth sliding transitions between components. Perfect for tabs, carousels, and any UI that requires horizontal sliding animations.

## Installation

```bash
npm install component-slider
# or
yarn add component-slider
# or
pnpm add component-slider
```

## Usage

```jsx
import { ComponentSlider } from 'component-slider';

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

## License

MIT
