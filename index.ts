export type EuclideanRhythm = {
  steps: number;
  triggers: number;
  rotation: number;
};

export function binaryToEuclidean(sequence:number[]):EuclideanRhythm {
  // Number of steps in sequence
  const steps = sequence.length

  // Number of triggers in sequence
  const triggers = sequence.reduce((acc, val) => acc + val, 0)

  // Find the position of the first trigger
  const firstTriggerPos = sequence.indexOf(1)

  // Find the position of the last trigger
  const lastTriggerPos = sequence.lastIndexOf(1)

  // Calculate the rotation
  let rotation = 0
  if (lastTriggerPos < firstTriggerPos) {
    rotation = steps - firstTriggerPos
  } else {
    rotation = lastTriggerPos - firstTriggerPos
  }

  return { steps, triggers, rotation }
}
