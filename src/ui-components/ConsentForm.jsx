/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function ConsentForm(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/survey" });
  return (
    <Flex
      gap="0"
      direction="column"
      width="390px"
      height="844px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ConsentForm")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="785px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 31")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Consent to Survey"
          {...getOverrideProps(overrides, "Consent to Survey")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
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
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="There is always the possibility of tampering from an outside source when using the internet for collecting information. While the confidentiality of your responses will be protected once the data are downloaded from the internet, there is always a possibility of hacking or other security breaches that could threaten the confidentiality of your responses. Please know that you are free to decide not to answer any question.&#xA;Adult Consent: If you are over the age of 18 and not a high school student, please review the consent information below. Purpose of the Research: To determine whether my model would be an efficient training tool for surgical procedures (suturing/scleral buckling surgery/strabismus surgery) and applanation&#xA;If you participate, you will be asked to: Analyze my device and provide feedback. Time required for your participation: 5 minutes. Potential risks to you as a participant: Injest silicone. Potential benefits to you as a participant: This eye model is a necessary training tool in the medical field that does not exist elsewhere. The model can rotate and was designed with accurate dimensions of a human eye. Your confidential, personal information will be protected by: Referring to the person filling out the form as an eye doctor.&#xA;&#xA;If you have questions about this study, please contact:&#xA;239-776-4249"
          {...getOverrideProps(
            overrides,
            "There is always the possibility of tampering from an outside source when using the internet for collecting information. While the confidentiality of your responses will be protected once the data are downloaded from the internet, there is always a possibility of hacking or other security breaches that could threaten the confidentiality of your responses. Please know that you are free to decide not to answer any question. Adult Consent: If you are over the age of 18 and not a high school student, please review the consent information below. Purpose of the Research: To determine whether my model would be an efficient training tool for surgical procedures (suturing/scleral buckling surgery/strabismus surgery) and applanation If you participate, you will be asked to: Analyze my device and provide feedback. Time required for your participation: 5 minutes. Potential risks to you as a participant: Injest silicone. Potential benefits to you as a participant: This eye model is a necessary training tool in the medical field that does not exist elsewhere. The model can rotate and was designed with accurate dimensions of a human eye. Your confidential, personal information will be protected by: Referring to the person filling out the form as an eye doctor. If you have questions about this study, please contact: 239-776-4249"
          )}
        ></Text>
      </Flex>
      <Button
        width="390px"
        height="58px"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="I Consent "
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
