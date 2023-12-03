/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import {
  Button,
  Radio,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Survey(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/ty" });
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
      backgroundColor="rgba(4,125,149,1)"
      {...getOverrideProps(overrides, "Survey")}
      {...rest}
    >
      <Radio
        width="unset"
        height="unset"
        position="absolute"
        top="224px"
        left="40px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        children="Yes"
        {...getOverrideProps(overrides, "Radio4051413")}
      ></Radio>
      <SelectField
        width="300px"
        height="unset"
        label="Are you a resident?"
        placeholder="Select Status"
        position="absolute"
        top="77px"
        left="29px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
      <Radio
        width="unset"
        height="unset"
        position="absolute"
        top="254px"
        left="43px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        children="No"
        {...getOverrideProps(overrides, "Radio4051419")}
      ></Radio>
      <Radio
        width="unset"
        height="unset"
        position="absolute"
        top="375px"
        left="37px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        children="Yes"
        {...getOverrideProps(overrides, "Radio4061522")}
      ></Radio>
      <Radio
        width="unset"
        height="unset"
        position="absolute"
        top="405px"
        left="40px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        children="No"
        {...getOverrideProps(overrides, "Radio4061523")}
      ></Radio>
      <Radio
        width="unset"
        height="unset"
        position="absolute"
        top="543px"
        left="32px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        children="Yes"
        {...getOverrideProps(overrides, "Radio4061543")}
      ></Radio>
      <Radio
        width="unset"
        height="unset"
        position="absolute"
        top="573px"
        left="35px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        children="No"
        {...getOverrideProps(overrides, "Radio4061544")}
      ></Radio>
      <TextField
        width="300px"
        height="unset"
        label='If you answered "No" to the previous question, please provide a short explanation about why.'
        placeholder="Please Respond Here"
        position="absolute"
        top="616px"
        left="35px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="300px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="17.65%"
        bottom="73.82%"
        left="calc(50% - 150px - 18px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="1. To the best of your recollection, have you practiced suturing technique in a wet lab?"
        {...getOverrideProps(overrides, "label4070389")}
      ></Text>
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
        children="Submit"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="300px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="34%"
        bottom="57.46%"
        left="calc(50% - 150px - 18px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="2. To the best of your recollection, have you practiced suturing technique using a surgical simulator?"
        {...getOverrideProps(overrides, "label4070390")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="334px"
        height="83px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="52.73%"
        bottom="37.44%"
        left="calc(50% - 167px - -3px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="3. Based on your recollection of strabismus surgery rotation, do you think the C.A.S.B.M would be a good model for practicing eye muscle surgery?"
        {...getOverrideProps(overrides, "label4070391")}
      ></Text>
    </View>
  );
}
