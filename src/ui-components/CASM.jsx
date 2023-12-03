/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Heading, View } from "@aws-amplify/ui-react";
export default function CASM(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="844px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CASM")}
      {...rest}
    >
      <View
        width="390px"
        height="844px"
        {...getOverrideProps(overrides, "CASM40462845")}
      ></View>
      <Heading
        width="796px"
        height="111px"
        position="absolute"
        top="13.63%"
        bottom="73.22%"
        left="-52.05%"
        right="-52.05%"
        level="1"
        children="Corneal&#xA;Applanation &#xA;Suturing &#xA;Model"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
    </View>
  );
}
