import React from 'react';
import PropTypes from 'prop-types';
import { GovHKFormApp, injectI18n } from 'govhk-form-core';
import steps from './steps';
import formServerService from './server';

let serverService;
if (process.env.NODE_ENV === 'development') {
  serverService = formServerService;
}

const FormApp = ({ i }) => (
  <GovHKFormApp
    formMasterId={_FORM_MASTER_CODE_}
    formVersion={_FORM_VERSION_}
    title={_FORM_TITLE_[i`reform.locale`]}
    lastUpdate={_LAST_UPDATE_}
    steps={steps}
    serverService={serverService}
    // totalFileSizeLimit="5 MB"
    // infoMenu={pointsToNote}
    // features={{ save: false }}
  />
);

FormApp.propTypes = {
  i: PropTypes.func,
};

export default injectI18n(FormApp);
