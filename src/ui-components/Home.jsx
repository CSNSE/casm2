/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Heading, View } from "@aws-amplify/ui-react";
export default function Home(props) {
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
      {...getOverrideProps(overrides, "Home")}
      {...rest}
    >
      <View
        width="390px"
        height="844px"
        {...getOverrideProps(overrides, "CASM")}
      ></View>
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="93px"
        left="62px"
        level="1"
        children="Corneal &#xA;Applanation&#xA;Suturing &#xA;Model"
        {...getOverrideProps(overrides, "Heading40672535")}
      ></Heading>
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="745px"
        left="26px"
        level="1"
        children="Patent Pending"
        {...getOverrideProps(overrides, "Heading40672571")}
      ></Heading>
    </View>
  );
}
