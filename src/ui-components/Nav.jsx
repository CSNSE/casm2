/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function Nav(props) {
  const { survey, overrides, ...rest } = props;
  const buttonFourTwoNineThreeFiveZeroFourOnClick = useNavigateAction({
    type: "url",
    url: "/home",
  });
  const buttonFourTwoNineThreeFiveZeroFiveOnClick = useNavigateAction({
    type: "url",
    url: "/video",
  });
  const buttonFourTwoNineThreeFiveZeroSixOnClick = useNavigateAction({
    type: "url",
    url: "/contact",
  });
  const buttonFourTwoNineThreeFiveZeroSevenOnClick = useNavigateAction({
    type: "url",
    url: "/model",
  });
  const buttonFourTwoNineThreeFiveZeroEightOnClick = useNavigateAction({
    type: "url",
    url: "/consent",
  });
  const buttonFourTwoNineThreeFiveTwoFourOnClick = useNavigateAction({
    type: "url",
    url: "/about",
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
      <Button
        width="34px"
        height="unset"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        shrink="0"
        backgroundColor="rgba(224,228,233,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="🏠"
        onClick={() => {
          buttonFourTwoNineThreeFiveZeroFourOnClick();
        }}
        {...getOverrideProps(overrides, "Button4293504")}
      ></Button>
      <Button
        width="34px"
        height="unset"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        shrink="0"
        backgroundColor="rgba(224,228,233,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="📸"
        onClick={() => {
          buttonFourTwoNineThreeFiveZeroFiveOnClick();
        }}
        {...getOverrideProps(overrides, "Button4293505")}
      ></Button>
      <Button
        width="36px"
        height="unset"
        shrink="0"
        backgroundColor="rgba(224,228,233,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="📞"
        onClick={() => {
          buttonFourTwoNineThreeFiveZeroSixOnClick();
        }}
        {...getOverrideProps(overrides, "Button4293506")}
      ></Button>
      <Button
        width="34px"
        height="unset"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        shrink="0"
        backgroundColor="rgba(224,228,233,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="📑"
        onClick={() => {
          buttonFourTwoNineThreeFiveZeroSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Button4293507")}
      ></Button>
      <Button
        width="36px"
        height="unset"
        shrink="0"
        backgroundColor="rgba(224,228,233,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="✍🏼"
        onClick={() => {
          buttonFourTwoNineThreeFiveZeroEightOnClick();
        }}
        {...getOverrideProps(overrides, "Button4293508")}
      ></Button>
      <Button
        width="36px"
        height="unset"
        shrink="0"
        backgroundColor="rgba(224,228,233,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="👤"
        onClick={() => {
          buttonFourTwoNineThreeFiveTwoFourOnClick();
        }}
        {...getOverrideProps(overrides, "Button4293524")}
      ></Button>
    </Flex>
  );
}
