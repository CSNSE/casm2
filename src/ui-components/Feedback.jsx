/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, TextAreaField } from "@aws-amplify/ui-react";
export default function Feedback(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="9px"
      direction="column"
      width="390px"
      height="467px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="31px 32px 59px 32px"
      backgroundColor="rgba(18,61,102,1)"
      {...getOverrideProps(overrides, "Feedback")}
      {...rest}
    >
      <TextAreaField
        width="300px"
        height="140px"
        label="Question 1"
        placeholder="Do you have any questions?"
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextAreaField44271919")}
      ></TextAreaField>
      <TextAreaField
        width="300px"
        height="191px"
        label="Question2"
        placeholder="Do you have any questions?"
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextAreaField44271926")}
      ></TextAreaField>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Submit"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
