/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Heading } from "@aws-amplify/ui-react";
export default function Hcontact(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="15px"
      direction="column"
      width="390px"
      height="121px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="31px 32px 59px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Hcontact")}
      {...rest}
    >
      <Heading
        width="unset"
        height="unset"
        shrink="0"
        level="1"
        children="Messages"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
    </Flex>
  );
}
