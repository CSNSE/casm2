/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Heading, View } from "@aws-amplify/ui-react";
export default function Title(props) {
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
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Title")}
      {...rest}
    >
      <Flex
        width="157px"
        height="34px"
        {...getOverrideProps(overrides, "Heading4168273")}
      ></Flex>
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="240px"
        left="69px"
        level="1"
        children="Sonia Patel"
        {...getOverrideProps(overrides, "Heading4168311")}
      ></Heading>
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="342px"
        left="35px"
        level="3"
        children="Corneal Applanation &#xA;Suturing Model"
        {...getOverrideProps(overrides, "Heading4168313")}
      ></Heading>
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="464px"
        left="116px"
        level="5"
        children="Patent Pending"
        {...getOverrideProps(overrides, "Heading4168316")}
      ></Heading>
    </View>
  );
}
