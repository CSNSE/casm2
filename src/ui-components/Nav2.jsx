/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { deleteTodo } from "../graphql/mutations";
import { Flex, Text } from "@aws-amplify/ui-react";
const client = generateClient();
export default function Nav2(props) {
  const { survey, todo, overrides, ...rest } = props;
  const homeOnClick = useNavigateAction({ type: "url", url: "\\Title" });
  const surveyOnClick = useNavigateAction({ type: "url", url: "\\consent" });
  const videoOnClick = useNavigateAction({ type: "url", url: "\\video" });
  const modelsOnClick = useNavigateAction({ type: "url", url: "\\model" });
  const OnClick = async () => {
    await client.graphql({
      query: deleteTodo.replaceAll("__typename", ""),
      variables: {
        input: {
          id: todo?.image,
        },
      },
    });
  };
  return (
    <Flex
      gap="20px"
      direction="row"
      width="390px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Nav2")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Home"
        onClick={() => {
          homeOnClick();
        }}
        {...getOverrideProps(overrides, "Home")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children=" Survey"
        onClick={() => {
          surveyOnClick();
        }}
        {...getOverrideProps(overrides, "Survey")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Video"
        onClick={() => {
          videoOnClick();
        }}
        {...getOverrideProps(overrides, "Video")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Models"
        onClick={() => {
          modelsOnClick();
        }}
        {...getOverrideProps(overrides, "Models")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="16px"
        height="23px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="✎"
        {...getOverrideProps(overrides, "\u270E")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="16px"
        height="23px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="🗑"
        onClick={() => {
          OnClick();
        }}
        {...getOverrideProps(overrides, "\uD83D\uDDD1")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="16px"
        height="23px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="➕"
        {...getOverrideProps(overrides, "\u2795")}
      ></Text>
    </Flex>
  );
}
