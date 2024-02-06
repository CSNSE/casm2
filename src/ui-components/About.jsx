/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Heading, Text, View } from "@aws-amplify/ui-react";
export default function About(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="517px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "About")}
      {...rest}
    >
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="55px"
        left="90px"
        level="1"
        children="About Me"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Flex
        gap="10px"
        direction="row"
        width="232px"
        height="207px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="155px"
        left="83px"
        borderRadius="32px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(184,206,249,1)"
        {...getOverrideProps(overrides, "Badge")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(0,34,102,1)"
          lineHeight="14px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="I attend high school in Naples, Florida and am interested in STEM, particularly in biomedical engineering and bioengineering. I enjoy competitively golfing, playing the piano, coding, and researching. I also love exploring patterns and designs in origami and knitting, as well as creating new baking recipes, gardening, and running in my free time."
          {...getOverrideProps(overrides, "label")}
        ></Text>
      </Flex>
    </View>
  );
}
