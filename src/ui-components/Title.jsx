/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { FaEye } from 'react-icons/fa';
import { Heading, View } from "@aws-amplify/ui-react";

export default function Home(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="844px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      style={{
        background: "linear-gradient(90deg, #394766 0%, #4a5680 50%, #394766 100%)",
      }}
      {...getOverrideProps(overrides, "Home")}
      {...rest}
    >
      <FaEye size="100px" color="white" style={{ position: "absolute", top: "calc(50% - 250px)" }} />
      <Heading
        level="3"
        children="C.A.S.M"
        position="absolute"
        top="calc(50% - 100px)"
        color="#FFFFFF"
        {...getOverrideProps(overrides, "HeadingCASMBelowIcon")}
      ></Heading>
      <Heading
        level="4"
        children="Corneal Applanation Suturing Model"
        position="absolute"
        top="calc(50% - 50px)"
        color="#FFFFFF"
        {...getOverrideProps(overrides, "HeadingCornealApplanation")}
      ></Heading>
      <Heading
        level="5"
        children="Sonia Patel"
        position="absolute"
        top="calc(50% + 10px)"
        color="#FFFFFF"
        {...getOverrideProps(overrides, "HeadingYourName")}
      ></Heading>
      <Heading
        level="6"
        children="Patent Pending"
        position="absolute"
        top="calc(50% + 50px)"
        color="#FFFFFF"
        {...getOverrideProps(overrides, "HeadingPatentPending")}
      ></Heading>
    </View>
  );
}
