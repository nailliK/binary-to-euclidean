# Binary Array To Euclidean Rhythm Converter

This library provides utility functions to work with Euclidean Rhythms, specifically converting a binary sequence to its corresponding Euclidean Rhythm representation.

## Features

- Extract the number of steps, triggers, and rotation from a binary sequence.

## Installation

```bash
npm install binary-to-euclidean
yarn install binary-to-euclidean
```

## Usage

```js
import { binaryToEuclidean } from 'your-npm-package-name';

const sequence = [1, 0, 1, 0, 1, 0];
const rhythm = binaryToEuclidean(sequence);

console.log(rhythm);  
// { steps: 6, triggers: 3, rotation: 2 }
```

## API
`binaryToEuclidean(sequence: number[]): EuclideanRhythm`

Converts a binary sequence to its corresponding Euclidean Rhythm representation.

### Parameters:
- `sequence`: An array of numbers where 1 represents a trigger, and 0 represents no trigger.

### Returns: 
- An object of type EuclideanRhythm containing:
  - `steps`: Total number of steps in the sequence.
  - `triggers`: Total number of triggers in the sequence.
  - `rotation`: The calculated rotation of the sequence.

## Contributing

If you have suggestions or want to contribute, feel free to open an issue or pull request.

## License

[MIT](https://mit-license.org/)
