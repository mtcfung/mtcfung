//import { step } from 'govhk-form-core';
import React from 'react';
import CustomAcknowledgement from './CustomAcknowledgement';

//export default step.acknowledgement();

const acknowledgement = (options) => {
  const { content, buttons } = options || {};
  return {
    title: ({ i }) => i`step.acknowledgement`,
    content: content || (props => (
      <CustomAcknowledgement {...props} />
    )),
    buttons: buttons,
    back: false,
    server: false,
  };
};
export default acknowledgement;
