/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function Links(props) {
  const { overrides, ...rest } = props;
  const buttonFourThreeEightFiveSixThreeFiveOnClick = useNavigateAction({
    type: "url",
    url: "/eye",
  });
  const buttonFourThreeEightFiveSixThreeNineOnClick = useNavigateAction({
    type: "url",
    url: "/heart",
  });
  const buttonFourThreeEightFiveSixFourThreeOnClick = useNavigateAction({
    type: "url",
    url: "/kidney",
  });
  const buttonFourThreeEightFiveSixFourSevenOnClick = useNavigateAction({
    type: "url",
    url: "/liver",
  });
  const buttonFourThreeEightFiveSixFiveOneOnClick = useNavigateAction({
    type: "url",
    url: "/skin",
  });
  const buttonFourThreeEightFiveSixFiveFiveOnClick = useNavigateAction({
    type: "url",
    url: "/hand",
  });
  const buttonFourThreeEightFiveSixFiveNineOnClick = useNavigateAction({
    type: "url",
    url: "/leg",
  });
  return (
    <Flex
      gap="15px"
      direction="column"
      width="390px"
      height="416px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="31px 32px 59px 32px"
      backgroundColor="rgba(18,61,102,1)"
      {...getOverrideProps(overrides, "Links")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Eye"
        onClick={() => {
          buttonFourThreeEightFiveSixThreeFiveOnClick();
        }}
        {...getOverrideProps(overrides, "Button4385635")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Heart"
        onClick={() => {
          buttonFourThreeEightFiveSixThreeNineOnClick();
        }}
        {...getOverrideProps(overrides, "Button4385639")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Kidney"
        onClick={() => {
          buttonFourThreeEightFiveSixFourThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button4385643")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Liver"
        onClick={() => {
          buttonFourThreeEightFiveSixFourSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Button4385647")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Skin"
        onClick={() => {
          buttonFourThreeEightFiveSixFiveOneOnClick();
        }}
        {...getOverrideProps(overrides, "Button4385651")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Hand"
        onClick={() => {
          buttonFourThreeEightFiveSixFiveFiveOnClick();
        }}
        {...getOverrideProps(overrides, "Button4385655")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Leg"
        onClick={() => {
          buttonFourThreeEightFiveSixFiveNineOnClick();
        }}
        {...getOverrideProps(overrides, "Button4385659")}
      ></Button>
    </Flex>
  );
}
