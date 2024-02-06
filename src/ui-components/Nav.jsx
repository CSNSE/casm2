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
  const { survey, url, overrides, ...rest } = props;
  const buttonFourThreeOneSevenSevenFiveTwoOnClick = useNavigateAction({
    type: "url",
    url: "/home",
  });
  const buttonFourThreeOneSevenSevenFiveThreeOnClick = useNavigateAction({
    type: "url",
    url: "/video",
  });
  const buttonFourThreeOneSevenSevenFiveFourOnClick = useNavigateAction({
    type: "url",
    url: "/contact",
  });
  const buttonFourThreeOneSevenSevenFiveFiveOnClick = useNavigateAction({
    type: "url",
    url: "/model",
  });
  const buttonFourThreeOneSevenSevenFiveSixOnClick = useNavigateAction({
    type: "url",
    url: "/consent",
  });
  const buttonFourThreeOneSevenSevenFiveSevenOnClick = useNavigateAction({
    type: "url",
    url: "/about",
  });
  const buttonFourThreeOneSevenSevenSevenSixOnClick = useNavigateAction({
    type: "url",
    url: "/profile",
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
          buttonFourThreeOneSevenSevenFiveTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Button4317752")}
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
          buttonFourThreeOneSevenSevenFiveThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button4317753")}
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
          buttonFourThreeOneSevenSevenFiveFourOnClick();
        }}
        {...getOverrideProps(overrides, "Button4317754")}
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
          buttonFourThreeOneSevenSevenFiveFiveOnClick();
        }}
        {...getOverrideProps(overrides, "Button4317755")}
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
          buttonFourThreeOneSevenSevenFiveSixOnClick();
        }}
        {...getOverrideProps(overrides, "Button4317756")}
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
          buttonFourThreeOneSevenSevenFiveSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Button4317757")}
      ></Button>
      <Button
        width="36px"
        height="unset"
        shrink="0"
        backgroundColor="rgba(224,228,233,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="👥"
        onClick={() => {
          buttonFourThreeOneSevenSevenSevenSixOnClick();
        }}
        {...getOverrideProps(overrides, "Button4317776")}
      ></Button>
    </Flex>
  );
}
