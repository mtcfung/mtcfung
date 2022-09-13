/* eslint react/prop-types: 0 */
import React from 'react';
import { Section, Field, Condition, Layout, Message, Validate } from 'govhk-form-core';

const checkDateRange = (startDate, endDate) => {
  const error = {};
  if (new Date(startDate) >= new Date(endDate)) {
    error.$ = { invalidDateRange: true };
  }
  return error;
};

export default {
  title: ({ i }) => i`step.projectInfo`,
  content: ({ i }) => (
    <div>
      <Section title={i`section.projectInfo`}>
        <Field.Text name="organisationName" label={i`field.organisationName`} required check={{ maxLength: 30, }} />
        <Field.Text name="serviceUnitName" label={i`field.serviceUnitName`} required check={{ maxLength: 30, }} />
        <Field.Text name="projectName" label={i`field.projectName`} required check={{ maxLength: 30, }} />

        <Layout.Inline>
          <Field.Date name="commencementDate" label={i`field.commencementDate`} required check={{ afterToday: true, }} />
          <Field.Date name="completionDate" label={i`field.completionDate`} required check={{ afterToday: true, }} />
        </Layout.Inline>
        <Validate 
          fields="commencementDate,completionDate" 
          test={(startDate, endDate) => checkDateRange(startDate, endDate)}
          messages={{ invalidDateRange: () => i`error.invalidCompletionDate`}}
        />

        <Field.Number name="amountRequested" label={i`field.amountRequested`} required placeholder="$" check={{ min: 20000, }} />

        <div class="control-label required-label">{i`field.targetDistricts`}</div><br />
        <Layout.Sentense>
          <Field.SelectMultiple
            name="targetDistricts" label={i`field.targetDistricts`} required
            options={[
              { value: 'wongTaiSin', label: i`selectTargetDistricts.wongTaiSin` },
              { value: 'kwunTong', label: i`selectTargetDistricts.kwunTong` },
              { value: 'yauTsimMong', label: i`selectTargetDistricts.yauTsimMong` },
              { value: 'eastern', label: i`selectTargetDistricts.eastern` },
              { value: 'kowloonCity', label: i`selectTargetDistricts.kowloonCity` },
              { value: 'kwaiTsing', label: i`selectTargetDistricts.kwaiTsing` },
              { value: 'centralWestern', label: i`selectTargetDistricts.centralWestern` },
              { value: 'islands', label: i`selectTargetDistricts.islands` },
              { value: 'yuenLong', label: i`selectTargetDistricts.yuenLong` },
              { value: 'tinShuiWai', label: i`selectTargetDistricts.tinShuiWai` },
              { value: 'shaTin', label: i`selectTargetDistricts.shaTin` },
              { value: 'maOnShan', label: i`selectTargetDistricts.maOnShan` },
              { value: 'saiKung', label: i`selectTargetDistricts.saiKung` },
              { value: 'tseungKwanO', label: i`selectTargetDistricts.tseungKwanO` },
              { value: 'taiPo', label: i`selectTargetDistricts.taiPo` },
              { value: 'shamShuiPo', label: i`selectTargetDistricts.shamShuiPo` },
              { value: 'southern', label: i`selectTargetDistricts.southern` },
              { value: 'north', label: i`selectTargetDistricts.north` },
              { value: 'wanChai', label: i`selectTargetDistricts.wanChai` },
              { value: 'tsuenWan', label: i`selectTargetDistricts.tsuenWan` },
              { value: 'tuenMun', label: i`selectTargetDistricts.tuenMun` },
              { value: 'alldistrictsInHK', label: i`selectTargetDistricts.allDistrictsInHK` },
            ]}
            style={{ width: '300px' }}
          />
        </Layout.Sentense>
        <br />

        <Field.SelectMultiple
          name="targetGroups" label={i`field.targetGroups`} required
          options={[
            { value: 'children', label: i`selectTargetGroups.children` },
            { value: 'youth', label: i`selectTargetGroups.youth` },
            { value: 'adults', label: i`selectTargetGroups.adults` },
            { value: 'elderly', label: i`selectTargetGroups.elderly` },
            { value: 'women', label: i`selectTargetGroups.women` },
            { value: 'localResidents', label: i`selectTargetGroups.localResidents` },
            { value: 'newArrivals', label: i`selectTargetGroups.newArrivals` },
            { value: 'ethnicMinorities', label: i`selectTargetGroups.ethnicMinorities` },
            { value: 'unemployed', label: i`selectTargetGroups.unemployed` },
            { value: 'schoolDropouts', label: i`selectTargetGroups.schoolDropouts` },
            { value: 'disabilities', label: i`selectTargetGroups.disabilities` },
            { value: 'middleClass', label: i`selectTargetGroups.middleClass` },
            { value: 'others', label: i`selectTargetGroups.others` },
          ]}
        />
        <Condition field="targetGroups" contains="others">
          <Field.Text name="targetGroupsOther" label={i`field.targetGroupsOther`} required check={{ maxLength: 30, }} />
        </Condition>
        
        <Field.Text name="volunteerNo" label={i`field.volunteerNo`} required check={{ maxLength: 30, charset: 'alphanumeric', }} />
        <Field.Text name="directParticipantNo" label={i`field.directParticipantNo`}  required check={{ maxLength: 30, charset: 'alphanumeric', }} />
        <Field.Text name="indirectParticipantNo" label={i`field.indirectParticipantNo` } required check={{ maxLength: 30, charset: 'alphanumeric', }} />
        <Message>
          <b>{i`glossary.note1`}</b><br />
          {i`glossary.definition1a`}<br />
          <i>{i`glossary.definition1b`}</i><br />
          <br />
          <b>{i`glossary.note2`}</b><br />
          {i`glossary.definition2a`}<br />
          <u><b>{i`glossary.definition2b`}</b></u><br />
          <br />
          <b>{i`glossary.note3`}</b><br />
          {i`glossary.definition3a`}
          <u><b>{i`glossary.definition3b`}</b></u>
          {i`glossary.definition3c`}
        </Message>

        <Field.SelectMultiple
          name="projectNature" label={i`field.projectNature`} required inline={false}
          options={[
            { value: 'family', label: i`selectProjectNature.family` },
            { value: 'community', label: i`selectProjectNature.community` },
            { value: 'youth', label: i`selectProjectNature.youth` },
            { value: 'social', label: i`selectProjectNature.social` },
            { value: 'health', label: i`selectProjectNature.health` },
            { value: 'cross', label: i`selectProjectNature.cross` },
            { value: 'elderly', label: i`selectProjectNature.elderly` },
          ]}
        />
        <Field.Select
          name="isThematicProject" label={i`field.isThematicProject`} required
          options={[
            { value: 'Y', label: i`selectYesNo.Yes` },
            { value: 'N', label: i`selectYesNo.No` },
          ]}
        />
      </Section>
    </div>
  ),
};
