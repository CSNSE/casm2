/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createSurvey } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Button, TextField, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function Survey(props) {
  const { survey, overrides, ...rest } = props;
  const [
    textFieldFourOneTwoEightSevenSixSixValue,
    setTextFieldFourOneTwoEightSevenSixSixValue,
  ] = useState("");
  const [
    textFieldFourOneTwoEightSevenSixFourValue,
    setTextFieldFourOneTwoEightSevenSixFourValue,
  ] = useState("");
  const [
    textFieldFourOneTwoEightSevenSixSevenValue,
    setTextFieldFourOneTwoEightSevenSixSevenValue,
  ] = useState("");
  const [
    textFieldFourOneTwoEightSevenSixThreeValue,
    setTextFieldFourOneTwoEightSevenSixThreeValue,
  ] = useState("");
  const [
    textFieldFourOneTwoEightSevenSixFiveValue,
    setTextFieldFourOneTwoEightSevenSixFiveValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await client.graphql({
      query: createSurvey.replaceAll("__typename", ""),
      variables: {
        input: {
          wetLab: textFieldFourOneTwoEightSevenSixSixValue,
          sim: textFieldFourOneTwoEightSevenSixFourValue,
          muscle: textFieldFourOneTwoEightSevenSixSevenValue,
          no: textFieldFourOneTwoEightSevenSixThreeValue,
          res: textFieldFourOneTwoEightSevenSixFiveValue,
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
      backgroundColor="rgba(245,245,245,1)"
      {...getOverrideProps(overrides, "Survey")}
      {...rest}
    >
      <TextField
        width="331px"
        height="118px"
        label='If you answered "No" to the previous question, please provide a short explanation about why.'
        placeholder="Please Respond Here"
        position="absolute"
        top="622px"
        left="29px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourOneTwoEightSevenSixThreeValue}
        onChange={(event) => {
          setTextFieldFourOneTwoEightSevenSixThreeValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField4128763")}
      ></TextField>
      <TextField
        width="325px"
        height="148px"
        label="To the best of your recollection, have you practiced suturing technique using a surgical simulator?"
        position="absolute"
        top="279px"
        left="29px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourOneTwoEightSevenSixFourValue}
        onChange={(event) => {
          setTextFieldFourOneTwoEightSevenSixFourValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField4128764")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Are you a resident?"
        position="absolute"
        top="26px"
        left="31px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourOneTwoEightSevenSixFiveValue}
        onChange={(event) => {
          setTextFieldFourOneTwoEightSevenSixFiveValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField4128765")}
      ></TextField>
      <TextField
        width="325px"
        height="118px"
        label="To the best of your recollection, have you practiced suturing technique in a wet lab"
        position="absolute"
        top="140px"
        left="29px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourOneTwoEightSevenSixSixValue}
        onChange={(event) => {
          setTextFieldFourOneTwoEightSevenSixSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField4128766")}
      ></TextField>
      <TextField
        width="331px"
        height="unset"
        label="Based on your recollection of strabismus surgery rotation, do you think the C.A.S.M would be a good model for practicing eye muscle surgery"
        position="absolute"
        top="448px"
        left="29px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourOneTwoEightSevenSixSevenValue}
        onChange={(event) => {
          setTextFieldFourOneTwoEightSevenSixSevenValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField4128767")}
      ></TextField>
      <Button
        width="390px"
        height="58px"
        position="absolute"
        top="786px"
        left="0px"
        backgroundColor="rgba(0,34,102,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Submit Form"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
