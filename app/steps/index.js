import { step } from 'reform';
import introduction from './introduction';
import projectInfo from './projectInfo';
import review from './review';
//import acknowledgement from './acknowledgement';
import CustomAcknowledgement from './CustomAcknowledgement';

// export default [
//   introduction,
//   projectInfo,
//   review,
//   acknowledgement,
// ];

const inputSteps = [
  introduction,
  projectInfo,
  review,
];

const acknowledgement1 = step.acknowledgement({
  steps: inputSteps,
  options: {
    content: CustomAcknowledgement,
  },
});

export default inputSteps.concat([
  acknowledgement1,
]);