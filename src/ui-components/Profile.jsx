/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createProfile } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import {
  Button,
  Flex,
  Heading,
  PhoneNumberField,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
const client = generateClient();
export default function Profile(props) {
  const { profile, overrides, ...rest } = props;
  const [
    textFieldFourThreeOneEightEightThreeZeroValue,
    setTextFieldFourThreeOneEightEightThreeZeroValue,
  ] = useState("");
  const [textAreaFieldValue, setTextAreaFieldValue] = useState("");
  const buttonOnClick = async () => {
    await client.graphql({
      query: createProfile.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldFourThreeOneEightEightThreeZeroValue,
          description: textAreaFieldValue,
        },
      },
    });
  };
  return (
    <View
      width="390px"
      height="568px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Profile")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="364px"
        height="87px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="27px"
        left="13px"
        borderRadius="32px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(184,206,249,1)"
        {...getOverrideProps(overrides, "Badge")}
      >
        <Heading
          width="unset"
          height="unset"
          shrink="0"
          level="1"
          children={profile?.name}
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
      </Flex>
      <PhoneNumberField
        width="300px"
        height="unset"
        label="Phone Number:"
        placeholder="239-867-5309"
        position="absolute"
        top="206px"
        left="45px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "PhoneNumberField")}
      ></PhoneNumberField>
      <TextField
        width="300px"
        height="unset"
        label="Name:"
        placeholder={profile?.name}
        position="absolute"
        top="125px"
        left="45px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourThreeOneEightEightThreeZeroValue}
        onChange={(event) => {
          setTextFieldFourThreeOneEightEightThreeZeroValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField4318830")}
      ></TextField>
      <TextAreaField
        width="300px"
        height="unset"
        label="Description:"
        placeholder={profile?.description}
        position="absolute"
        top="369px"
        left="45px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textAreaFieldValue}
        onChange={(event) => {
          setTextAreaFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextAreaField")}
      ></TextAreaField>
      <TextField
        width="300px"
        height="unset"
        label="Email:"
        placeholder={profile?.email}
        position="absolute"
        top="288px"
        left="45px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField4318832")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="517px"
        left="158px"
        backgroundColor="rgba(148,202,223,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Save"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
