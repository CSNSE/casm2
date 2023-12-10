/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { updateSurvey } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Button, Text, TextField, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function Update(props) {
  const { Updated, overrides, ...rest } = props;
  const [
    textFieldFourOneSixFiveTwoTwoThreeEightValue,
    setTextFieldFourOneSixFiveTwoTwoThreeEightValue,
  ] = useState("");
  const [
    textFieldFourOneSixFiveTwoTwoThreeSixValue,
    setTextFieldFourOneSixFiveTwoTwoThreeSixValue,
  ] = useState("");
  const [
    textFieldFourOneSixFiveTwoTwoThreeNineValue,
    setTextFieldFourOneSixFiveTwoTwoThreeNineValue,
  ] = useState("");
  const [
    textFieldFourOneSixFiveTwoTwoThreeFiveValue,
    setTextFieldFourOneSixFiveTwoTwoThreeFiveValue,
  ] = useState("");
  const [
    textFieldFourOneSixFiveTwoTwoThreeSevenValue,
    setTextFieldFourOneSixFiveTwoTwoThreeSevenValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await client.graphql({
      query: updateSurvey.replaceAll("__typename", ""),
      variables: {
        input: {
          wetLab: textFieldFourOneSixFiveTwoTwoThreeEightValue,
          sim: textFieldFourOneSixFiveTwoTwoThreeSixValue,
          muscle: textFieldFourOneSixFiveTwoTwoThreeNineValue,
          no: textFieldFourOneSixFiveTwoTwoThreeFiveValue,
          res: textFieldFourOneSixFiveTwoTwoThreeSevenValue,
          id: Updated?.id,
        },
      },
    });
  };
  return (
    <View
      width="390px"
      height="844px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Update")}
      {...rest}
    >
      <TextField
        width="331px"
        height="118px"
        label='If you answered "No" to the previous question, please provide a short explanation about why.'
        placeholder={Updated?.no}
        position="absolute"
        top="622px"
        left="29px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourOneSixFiveTwoTwoThreeFiveValue}
        onChange={(event) => {
          setTextFieldFourOneSixFiveTwoTwoThreeFiveValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField41652235")}
      ></TextField>
      <TextField
        width="325px"
        height="148px"
        label="To the best of your recollection, have you practiced suturing technique using a surgical simulator?"
        position="absolute"
        top="279px"
        left="29px"
        placeholder={Updated?.sim}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourOneSixFiveTwoTwoThreeSixValue}
        onChange={(event) => {
          setTextFieldFourOneSixFiveTwoTwoThreeSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField41652236")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Are you a resident?"
        position="absolute"
        top="47px"
        left="42px"
        placeholder={Updated?.id}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourOneSixFiveTwoTwoThreeSevenValue}
        onChange={(event) => {
          setTextFieldFourOneSixFiveTwoTwoThreeSevenValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField41652237")}
      ></TextField>
      <TextField
        width="325px"
        height="118px"
        label="To the best of your recollection, have you practiced suturing technique in a wet lab"
        position="absolute"
        top="140px"
        left="29px"
        placeholder={Updated?.wetLab}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourOneSixFiveTwoTwoThreeEightValue}
        onChange={(event) => {
          setTextFieldFourOneSixFiveTwoTwoThreeEightValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField41652238")}
      ></TextField>
      <TextField
        width="331px"
        height="unset"
        label="Based on your recollection of strabismus surgery rotation, do you think the C.A.S.M would be a good model for practicing eye muscle surgery"
        position="absolute"
        top="448px"
        left="29px"
        placeholder={Updated?.muscle}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourOneSixFiveTwoTwoThreeNineValue}
        onChange={(event) => {
          setTextFieldFourOneSixFiveTwoTwoThreeNineValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField41652239")}
      ></TextField>
      <Button
        width="390px"
        height="58px"
        position="absolute"
        top="786px"
        left="0px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Update"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="326px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2.01%"
        bottom="94.43%"
        left="calc(50% - 163px - -10px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"ID of Survey: "}${Updated?.id}`}
        {...getOverrideProps(overrides, "label")}
      ></Text>
    </View>
  );
}
