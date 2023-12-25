/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { deleteSurvey } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function ModelEye(props) {
  const { SurveyResult, overrides, ...rest } = props;
  const buttonFourOneSixFourTwoOneOneTwoOnClick = async () => {
    await client.graphql({
      query: deleteSurvey.replaceAll("__typename", ""),
      variables: {
        input: {
          id: SurveyResult?.id,
        },
      },
    });
  };
  const buttonFourOneSixFourTwoOneOneTwoOnMouseLeave = useNavigateAction({
    type: "reload",
  });
  const buttonFourOneSixFourTwoOneSevenTwoOnClick = useNavigateAction({
    type: "url",
    url: `${"/edit/"}${SurveyResult?.id}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="390px"
      height="562px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ModelEye")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <View
          width="358px"
          height="73px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 34")}
        >
          <Button
            width="97px"
            height="32px"
            position="absolute"
            top="25px"
            left="9px"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Delete"
            onClick={() => {
              buttonFourOneSixFourTwoOneOneTwoOnClick();
            }}
            onMouseLeave={() => {
              buttonFourOneSixFourTwoOneOneTwoOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "Button41642112")}
          ></Button>
          <Button
            width="97px"
            height="32px"
            position="absolute"
            top="25px"
            left="111px"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Edit"
            onClick={() => {
              buttonFourOneSixFourTwoOneSevenTwoOnClick();
            }}
            {...getOverrideProps(overrides, "Button41642172")}
          ></Button>
        </View>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
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
            children="Are you a resident?"
            {...getOverrideProps(overrides, "Are you a resident?")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
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
            children={SurveyResult?.res}
            {...getOverrideProps(overrides, "$99 USD41642176")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
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
            children="To the best of your recollection, have you practiced suturing technique in a wet lab"
            {...getOverrideProps(
              overrides,
              "To the best of your recollection, have you practiced suturing technique in a wet lab"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
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
            children={SurveyResult?.wetLab}
            {...getOverrideProps(overrides, "$99 USD41642178")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
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
            children="To the best of your recollection, have you practiced suturing technique using a surgical simulator?"
            {...getOverrideProps(
              overrides,
              "To the best of your recollection, have you practiced suturing technique using a surgical simulator?"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
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
            children={SurveyResult?.sim}
            {...getOverrideProps(overrides, "$99 USD41642180")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
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
            children="Based on your recollection of strabismus surgery rotation, do you think the C.A.S.M would be a good model for practicing eye muscle surgery"
            {...getOverrideProps(
              overrides,
              "Based on your recollection of strabismus surgery rotation, do you think the C.A.S.M would be a good model for practicing eye muscle surgery"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
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
            children={SurveyResult?.muscle}
            {...getOverrideProps(overrides, "$99 USD41642182")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
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
            children='If you answered "No" to the previous question, please provide a short explanation about why.'
            {...getOverrideProps(
              overrides,
              'If you answered "No" to the previous question, please provide a short explanation about why.'
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
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
            children={SurveyResult?.no}
            {...getOverrideProps(overrides, "$99 USD41642184")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
