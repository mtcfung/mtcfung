import React from 'react';
import PropTypes from 'prop-types';
import { injectI18n, Section, DefaultAcknowledgement } from 'govhk-form-core';
const hyperlink = (url) => {
  return () => (window.open(url));
};
const AckContent = injectI18n(({ i, onPrint, trnId, trnDateTime, supportContact }) => (
  <Section title={i`reform.ack.submissionDetails`}>
    <div style={{ marginBottom: '30px' }}>{i`reform.ack.ackReceived`}</div>
    <button id="printBtn" type="button" className="btn btn-primary" style={{ margin: '-10px 0px 20px 0px' }} onClick={onPrint}>
      {i`customAck.printOrSave`}
    </button><br />    
    <div className="form-group" style={{ width: '100%' }}>
      <div className="control-label">{i`reform.ack.submissionDateTime`} (YYYY-MM-DD HH:MM)</div>
      <div id="trnTime" className="form-readonly" style={{ width: '280px', padding: '0px', minHeight: 'auto', background: 'none' }}>{trnDateTime}</div>
    </div>
    <div className="form-group" style={{ width: '100%' }}>
      <div className="control-label">{i`reform.ack.trnRefNo`}</div>
      <div id="trnId" className="form-readonly" style={{ width: '280px', padding: '0px', minHeight: 'auto', background: 'none' }}>{trnId}</div>
    </div>
    { supportContact && (
      <div className="form-group" style={{ width: '100%' }}>
        {i`reform.ack.contactUs`}
        {supportContact}
      </div>
    )}
  </Section>
));

AckContent.propTypes = {
  i: PropTypes.func,
  onPrint: PropTypes.func,
  trnId: PropTypes.string,
  trnDateTime: PropTypes.string,
  supportContact: PropTypes.node,
};

const CustomAcknowledgement = props => <DefaultAcknowledgement view={AckContent} {...props} />;

export default CustomAcknowledgement;
