/* eslint react/prop-types: 0 */
import { step } from 'govhk-form-core';
//import logo from './logo.svg';
import logo from './CIIF.png';

export default step.introduction({
  departmentName: ({ i }) => i`departmentName`,
  logo,
});
