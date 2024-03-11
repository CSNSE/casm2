/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Rating } from "@aws-amplify/ui-react";
export default function Pic(props) {
  const { todo, overrides, ...rest } = props;
  return (
    <Flex
      gap="15px"
      direction="column"
      width="390px"
      height="225px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="31px 32px 59px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Pic")}
      {...rest}
    >
      <Rating
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        aria-live=""
        {...getOverrideProps(overrides, "Rating")}
      ></Rating>
      <Image
        width="143px"
        height="127px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={todo?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </Flex>
  );
}
