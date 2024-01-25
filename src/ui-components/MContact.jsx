/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, TextField } from "@aws-amplify/ui-react";
export default function MContact(props) {
  const { contact, overrides, ...rest } = props;
  return (
    <Flex
      gap="15px"
      direction="column"
      width="390px"
      height="498px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="59px 32px 59px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MContact")}
      {...rest}
    >
      <TextField
        width="325px"
        height="unset"
        label="Name:"
        placeholder={contact?.name}
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField42271598")}
      ></TextField>
      <TextField
        width="325px"
        height="88px"
        label="Email:"
        placeholder={contact?.email}
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField42271599")}
      ></TextField>
      <TextField
        width="325px"
        height="84px"
        label="Message:"
        placeholder={contact?.message}
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField42271600")}
      ></TextField>
    </Flex>
  );
}
