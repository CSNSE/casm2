/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { deleteTodo } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Image, Rating, Text, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function ModelVid(props) {
  const { todo, overrides, ...rest } = props;
  const buttonFourOneEightNineOneFiveSixZeroOnClick = async () => {
    await client.graphql({
      query: deleteTodo.replaceAll("__typename", ""),
      variables: {
        input: {
          id: todo?.id,
        },
      },
    });
  };
  const buttonFourOneEightNineOneFiveSixZeroOnMouseLeave = useNavigateAction({
    type: "reload",
  });
  const buttonFourOneEightNineOneFiveSixOneOnClick = useNavigateAction({
    type: "url",
    url: "/updatem",
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
      {...getOverrideProps(overrides, "ModelVid")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="559px"
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
              buttonFourOneEightNineOneFiveSixZeroOnClick();
            }}
            onMouseLeave={() => {
              buttonFourOneEightNineOneFiveSixZeroOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "Button41891560")}
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
              buttonFourOneEightNineOneFiveSixOneOnClick();
            }}
            {...getOverrideProps(overrides, "Button41891561")}
          ></Button>
          <Rating
            width="unset"
            height="unset"
            position="absolute"
            top="60.5px"
            left="14px"
            size="default"
            {...getOverrideProps(overrides, "Rating")}
          ></Rating>
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
            children="Name"
            {...getOverrideProps(overrides, "Name")}
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
            children={todo?.name}
            {...getOverrideProps(overrides, "$99 USD41891564")}
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
            children="Description"
            {...getOverrideProps(overrides, "Description")}
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
            children={todo?.description}
            {...getOverrideProps(overrides, "$99 USD41891566")}
          ></Text>
        </Flex>
        <Image
          width="358px"
          height="329px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={todo?.image}
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
