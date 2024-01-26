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
  const buttonFourTwoFiveZeroFourOneTwoOnClick = useNavigateAction({
    type: "url",
    url: "/home",
  });
  const buttonFourTwoFiveZeroFourOneSixOnClick = useNavigateAction({
    type: "url",
    url: "/video",
  });
  const buttonFourTwoFiveZeroFourTwoZeroOnClick = useNavigateAction({
    type: "url",
    url: "\\contact",
  });
  const buttonFourTwoFiveOneFourTwoEightOnClick = useNavigateAction({
    type: "url",
    url: "/model",
  });
  const buttonFourTwoFiveZeroFourTwoFourOnClick = useNavigateAction({
    type: "url",
    url: "/consent",
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
          buttonFourTwoFiveZeroFourOneTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Button4250412")}
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
          buttonFourTwoFiveZeroFourOneSixOnClick();
        }}
        {...getOverrideProps(overrides, "Button4250416")}
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
          buttonFourTwoFiveZeroFourTwoZeroOnClick();
        }}
        {...getOverrideProps(overrides, "Button4250420")}
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
          buttonFourTwoFiveOneFourTwoEightOnClick();
        }}
        {...getOverrideProps(overrides, "Button4251428")}
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
          buttonFourTwoFiveZeroFourTwoFourOnClick();
        }}
        {...getOverrideProps(overrides, "Button4250424")}
      ></Button>
    </Flex>
  );
}
