/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, TextField, View } from "@aws-amplify/ui-react";
export default function Update(props) {
  const { Updated, overrides, ...rest } = props;
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/video" });
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
        {...getOverrideProps(overrides, "TextField41781565")}
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
        {...getOverrideProps(overrides, "TextField41781566")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Are you a resident?"
        position="absolute"
        top="47px"
        left="42px"
        placeholder={Updated?.res}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField41781567")}
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
        {...getOverrideProps(overrides, "TextField41781568")}
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
        {...getOverrideProps(overrides, "TextField41781569")}
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
        onMouseUp={() => {
          buttonOnMouseUp();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
