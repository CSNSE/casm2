/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Badge, Button, Flex, Text } from "@aws-amplify/ui-react";
export default function Liver(props) {
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
      {...getOverrideProps(overrides, "Liver")}
      {...rest}
    >
      <Badge
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        variation="default"
        children="Liver"
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
        width="265px"
        height="169px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="For liver diseases, biotechnological innovations include the engineering of liver tissues for transplantation, the use of gene editing techniques to correct genetic liver disorders, and the development of liver-on-a-chip devices for drug testing and disease modeling. These approaches can lead to more effective treatments for liver conditions, reducing the need for liver transplants and improving patient outcomes.&#xA;"
        {...getOverrideProps(
          overrides,
          "For liver diseases, biotechnological innovations include the engineering of liver tissues for transplantation, the use of gene editing techniques to correct genetic liver disorders, and the development of liver-on-a-chip devices for drug testing and disease modeling. These approaches can lead to more effective treatments for liver conditions, reducing the need for liver transplants and improving patient outcomes."
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
