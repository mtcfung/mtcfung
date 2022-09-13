/**
 * This is the entry file for backend server service (for server-side validation and data conversion)
 */
import { pdf, xml, flattenToStringMap, validateForm, i18nByLocale, isEmpty } from 'govhk-form-core';
import moment from 'moment';
import get from 'lodash/get';
import '../l10n';
import steps from '../steps';

const getLabelByValue = (locale, name, value) => {
  if (isEmpty(value))
    return '';
  const i18n = i18nByLocale(locale);
  let key = name + "." + value;
  return i18n.translate(key);
}

const concatMultiple = (data, fieldName, labelPrefix, locale)  => {
  let resultValue = '';
  let resultLabel = '';
  let list = get(data, fieldName, []);
  let i18n = i18nByLocale(locale);
  for (let value of list) {
    resultValue = resultValue + `${(resultValue == ''?'':', ')}${value}`;
    resultLabel = resultLabel + `${(resultLabel == ''?'':', ')}` + getLabelByValue(locale, labelPrefix, value);
  }
  let result = {};
  result[`${fieldName}Labels`]  = resultLabel;
  result[`${fieldName}Values`]  = resultValue;
  return result;
}

export default {
  convert: ({ form, submit, data }, dataTypes) => {
    const i = i18nByLocale(form.locale);
// console.log(JSON.stringify(data));
    const mapping = {
    };
    data = {
      ...data,
      ...concatMultiple(data, 'targetDistricts', 'selectTargetDistricts', form.locale),
      ...concatMultiple(data, 'targetGroups', 'selectTargetGroups', form.locale),
      ...concatMultiple(data, 'projectNature', 'selectProjectNature', form.locale),
    };
   // console.log(data);
    return [
      // pdf.concat(
      //   [
      //     pdf.defaultAck(form, submit),
          // pdf.merge({
          //   file: `${form.formId}.pdf`,
          //   mapping,
          // }),
      //   ],
      //   `${submit.trnId}_${submit.submitTime.replace(/[ :]/g, '-')}.pdf`
      // ),
      xml.convert({ form, submit, data }, dataTypes, `${form.formId}.xml`),
    ];
  },
  validate: (submission, setResult) => {
    // console.log(JSON.stringify(submission.data));
    validateForm(submission, steps).then((result) => {
      setResult(result);
    });
  },
};
