/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Nav(props) {
  const { survey, overrides, ...rest } = props;
  const homeOnClick = useNavigateAction({ type: "url", url: "/home" });
  const OnClick = useNavigateAction({ type: "url", url: "/consent" });
  const OnClick = useNavigateAction({ type: "url", url: "/contact" });
  const imageOnClick = useNavigateAction({ type: "url", url: "/video" });
  const surveyAmpersandImageModelOnClick = useNavigateAction({
    type: "url",
    url: "/model",
  });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="390px"
      height="90px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Nav")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="47px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Home"
        onClick={() => {
          homeOnClick();
        }}
        {...getOverrideProps(overrides, "Home")}
      ></Text>
      <View
        width="16px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 33")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="16px"
          height="23px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="✎"
          onClick={() => {
            OnClick();
          }}
          {...getOverrideProps(overrides, "\u270E")}
        ></Text>
      </View>
      <View
        width="16px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 35")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="16px"
          height="23px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="📞"
          onClick={() => {
            OnClick();
          }}
          {...getOverrideProps(overrides, "\uD83D\uDCDE")}
        ></Text>
      </View>
      <View
        width="16px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 34")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="47px"
          height="23px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0.5px"
          left="-0.33px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Image"
          onClick={() => {
            imageOnClick();
          }}
          {...getOverrideProps(overrides, "Image")}
        ></Text>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="83px"
        height="62px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Survey & Image Model"
        onClick={() => {
          surveyAmpersandImageModelOnClick();
        }}
        {...getOverrideProps(overrides, "Survey & Image Model")}
      ></Text>
    </Flex>
  );
}
