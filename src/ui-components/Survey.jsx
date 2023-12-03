/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Radio, SelectField, View } from "@aws-amplify/ui-react";
export default function Survey(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="844px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(4,125,149,1)"
      {...getOverrideProps(overrides, "Survey")}
      {...rest}
    >
      <Radio
        width="unset"
        height="unset"
        position="absolute"
        top="170px"
        left="47px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        children="Strongly Agree"
        {...getOverrideProps(overrides, "Radio4051413")}
      ></Radio>
      <SelectField
        width="300px"
        height="unset"
        label="Are you a resident?"
        placeholder="Select Status"
        position="absolute"
        top="45px"
        left="47px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
      <Radio
        width="unset"
        height="unset"
        position="absolute"
        top="207px"
        left="47px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        children="Somewhat Agree"
        {...getOverrideProps(overrides, "Radio4051419")}
      ></Radio>
      <Radio
        width="unset"
        height="unset"
        position="absolute"
        top="244px"
        left="47px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        children="Neutral"
        {...getOverrideProps(overrides, "Radio4051425")}
      ></Radio>
      <Radio
        width="unset"
        height="unset"
        position="absolute"
        top="281px"
        left="47px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        children="Somewhat Disagree"
        {...getOverrideProps(overrides, "Radio4051431")}
      ></Radio>
      <Radio
        width="unset"
        height="unset"
        position="absolute"
        top="318px"
        left="47px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        children="Strongly Disagree"
        {...getOverrideProps(overrides, "Radio4051438")}
      ></Radio>
    </View>
  );
}
