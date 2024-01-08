/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Nav(props) {
  const { overrides, ...rest } = props;
  const homeOnClick = useNavigateAction({ type: "url", url: "/home" });
  const surveyOnClick = useNavigateAction({ type: "url", url: "/survey" });
  const videoOnClick = useNavigateAction({ type: "url", url: "/video" });
  const modelSurveyOnClick = useNavigateAction({ type: "url", url: "\\model" });
  const modelVideoOnClick = useNavigateAction({ type: "url", url: "/modv" });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="390px"
      height="unset"
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
        width="59px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children=" Survey"
        onClick={() => {
          surveyOnClick();
        }}
        {...getOverrideProps(overrides, "Survey")}
      ></Text>
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
        width="46px"
        height="21px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Video"
        onClick={() => {
          videoOnClick();
        }}
        {...getOverrideProps(overrides, "Video")}
      ></Text>
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
        width="54px"
        height="38px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Model&#xA;Survey"
        onClick={() => {
          modelSurveyOnClick();
        }}
        {...getOverrideProps(overrides, "Model Survey")}
      ></Text>
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
        width="49px"
        height="36px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Model&#xA;Video"
        onClick={() => {
          modelVideoOnClick();
        }}
        {...getOverrideProps(overrides, "Model Video")}
      ></Text>
    </Flex>
  );
}
