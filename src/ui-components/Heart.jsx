/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Badge, Button, Flex, Text } from "@aws-amplify/ui-react";
export default function Heart(props) {
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
      {...getOverrideProps(overrides, "Heart")}
      {...rest}
    >
      <Badge
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        variation="default"
        children="Heart"
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
        width="267px"
        height="169px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Biotechnological advancements in cardiac care include the development of bioengineered tissues and organs for transplantation, stem cell therapy to regenerate damaged heart tissue, and the creation of innovative cardiac devices like biodegradable stents and artificial hearts. These technologies aim to improve outcomes for patients with heart disease, offering new hope for recovery and a better quality of life.&#xA;"
        {...getOverrideProps(
          overrides,
          "Biotechnological advancements in cardiac care include the development of bioengineered tissues and organs for transplantation, stem cell therapy to regenerate damaged heart tissue, and the creation of innovative cardiac devices like biodegradable stents and artificial hearts. These technologies aim to improve outcomes for patients with heart disease, offering new hope for recovery and a better quality of life."
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
