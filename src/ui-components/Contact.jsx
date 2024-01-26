/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createContact } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Heading, TextField } from "@aws-amplify/ui-react";
const client = generateClient();
export default function Contact(props) {
  const { Contact, overrides, ...rest } = props;
  const [
    textFieldFourTwoZeroThreeOneSevenThreeSixValue,
    setTextFieldFourTwoZeroThreeOneSevenThreeSixValue,
  ] = useState("");
  const [
    textFieldFourTwoZeroThreeOneSevenThreeSevenValue,
    setTextFieldFourTwoZeroThreeOneSevenThreeSevenValue,
  ] = useState("");
  const [
    textFieldFourTwoZeroThreeOneSevenThreeEightValue,
    setTextFieldFourTwoZeroThreeOneSevenThreeEightValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await client.graphql({
      query: createContact.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldFourTwoZeroThreeOneSevenThreeSixValue,
          email: textFieldFourTwoZeroThreeOneSevenThreeSevenValue,
          message: textFieldFourTwoZeroThreeOneSevenThreeEightValue,
        },
      },
    });
  };
  const buttonOnMouseLeave = useNavigateAction({
    type: "url",
    url: "/contactm",
  });
  return (
    <Flex
      gap="15px"
      direction="column"
      width="390px"
      height="498px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="59px 32px 59px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Contact")}
      {...rest}
    >
      <Heading
        width="unset"
        height="unset"
        shrink="0"
        level="1"
        children="Contact Me"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <TextField
        width="325px"
        height="unset"
        label="Name:"
        placeholder="John Doe"
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourTwoZeroThreeOneSevenThreeSixValue}
        onChange={(event) => {
          setTextFieldFourTwoZeroThreeOneSevenThreeSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField42031736")}
      ></TextField>
      <TextField
        width="325px"
        height="88px"
        label="Email:"
        placeholder="johndoe@gmail.com"
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourTwoZeroThreeOneSevenThreeSevenValue}
        onChange={(event) => {
          setTextFieldFourTwoZeroThreeOneSevenThreeSevenValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField42031737")}
      ></TextField>
      <TextField
        width="325px"
        height="84px"
        label="Message:"
        placeholder="Begin message here"
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourTwoZeroThreeOneSevenThreeEightValue}
        onChange={(event) => {
          setTextFieldFourTwoZeroThreeOneSevenThreeEightValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField42031738")}
      ></TextField>
      <Button
        width="189px"
        height="39px"
        border="1px SOLID rgba(4,125,149,1)"
        borderRadius="4.5px"
        padding="7.5px 15.5px 7.5px 15.5px"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Submit Message"
        onClick={() => {
          buttonOnClick();
        }}
        onMouseLeave={() => {
          buttonOnMouseLeave();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
