/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Badge, Button, Flex, Text } from "@aws-amplify/ui-react";
export default function Skin(props) {
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
      {...getOverrideProps(overrides, "Skin")}
      {...rest}
    >
      <Badge
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        variation="default"
        children="Skin"
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
        width="259px"
        height="169px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="In skin care and wound healing, biotechnology has introduced bioengineered skin substitutes and growth factor therapies that promote tissue regeneration and repair. These technologies are particularly beneficial for treating burns, chronic wounds, and skin diseases, offering faster healing times and reduced scarring compared to traditional treatments.&#xA;"
        {...getOverrideProps(
          overrides,
          "In skin care and wound healing, biotechnology has introduced bioengineered skin substitutes and growth factor therapies that promote tissue regeneration and repair. These technologies are particularly beneficial for treating burns, chronic wounds, and skin diseases, offering faster healing times and reduced scarring compared to traditional treatments."
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
