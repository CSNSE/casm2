/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Heading, Text, View } from "@aws-amplify/ui-react";
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
        {...getOverrideProps(overrides, "Heading4244350")}
      ></Flex>
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="240px"
        left="69px"
        level="1"
        children="Sonia Patel"
        {...getOverrideProps(overrides, "Heading4244351")}
      ></Heading>
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="464px"
        left="116px"
        level="5"
        children="Patent Pending"
        {...getOverrideProps(overrides, "Heading4244352")}
      ></Heading>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="310px"
        left="33px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Corneal Applanation &#xA;Suturing Model&#xA;(C.A.S.M)"
        {...getOverrideProps(
          overrides,
          "Corneal Applanation Suturing Model (C.A.S.M)"
        )}
      ></Text>
    </View>
  );
}
