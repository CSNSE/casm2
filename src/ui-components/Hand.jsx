/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Badge, Button, Flex, Text } from "@aws-amplify/ui-react";
export default function Hand(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/links" });
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
      {...getOverrideProps(overrides, "Hand")}
      {...rest}
    >
      <Badge
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        variation="default"
        children="Hand"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(244,244,244,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="281px"
        height="169px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Biotechnological advancements in hand rehabilitation and prosthetics have led to the development of highly sophisticated bionic hands and fingers that closely mimic natural movements and functionalities. These devices use sensors and AI to interpret nerve signals from the user's residual limb, allowing for precise control and improving the quality of life for amputees or those with hand impairments.&#xA;"
        {...getOverrideProps(
          overrides,
          "Biotechnological advancements in hand rehabilitation and prosthetics have led to the development of highly sophisticated bionic hands and fingers that closely mimic natural movements and functionalities. These devices use sensors and AI to interpret nerve signals from the user's residual limb, allowing for precise control and improving the quality of life for amputees or those with hand impairments."
        )}
      ></Text>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Links Page"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
