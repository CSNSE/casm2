/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, TextField, View } from "@aws-amplify/ui-react";
export default function Images(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="517px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Images")}
      {...rest}
    >
      <Flex
        width="157px"
        height="34px"
        {...getOverrideProps(overrides, "Heading")}
      ></Flex>
      <TextField
        width="300px"
        height="unset"
        label="Name"
        position="absolute"
        top="42px"
        left="45px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField4264460")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Description"
        position="absolute"
        top="137px"
        left="45px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField4264461")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="443px"
        left="42px"
        backgroundColor="rgba(4,125,149,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Submit"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}

