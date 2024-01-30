/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField, View } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTodo } from "../graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";

const client = generateClient();

export default function TodoCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;

  const initialValues = {
    name: "",
    description: "",
    image: undefined,
  };

  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(initialValues.description);
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});

  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setImage(initialValues.image);
    setErrors({});
  };

  const validations = {
    name: [{ type: "Required" }],
    description: [],
    image: [],
  };

  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;

    let validationResponse = validateField(value, validations[fieldName]);

    const customValidator = fetchByPath(onValidate, fieldName);

    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }

    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };

  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      backgroundColor="rgba(255,255,255,1)"
      onSubmit={async (event) => {
        event.preventDefault();

        let modelFields = {
          name,
          description,
          image,
        };

        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(runValidationTasks(fieldName, modelFields[fieldName]));
            return promises;
          }, [])
        );

        if (validationResponses.some((r) => r.hasError)) {
          return;
        }

        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }

        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });

          await client.graphql({
            query: createTodo.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });

          if (onSuccess) {
            onSuccess(modelFields);
          }

          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "Images")}
      {...rest}
    >
    
        <Flex
          width="100%"
          height="34px"
          justifyContent="center" // Center the heading
          {...getOverrideProps(overrides, "Heading")}
        ></Flex>

        <TextField
          width="300px"
          height="unset"
          label="Name"
          position="absolute"
          top="42px"
          left="45px"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField4264460")}
        ></TextField>

        <TextField
          width="300px"
          height="unset"
          label="Description"
          position="absolute"
          top="137px"
          left="45px"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField4264461")}
        ></TextField>

        <Field
          errorMessage={errors.image?.errorMessage}
          hasError={errors.image?.hasError}
          label={"Image"}
          isRequired={false}
          isReadOnly={false}
        >
          <StorageManager
          onUploadSuccess={({ key }) => {
            setImage((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  name,
                  description,
                  image: value,
                };
                const result = onChange(modelFields);
                value = result?.image ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setImage((prev) => {
              let value = initialValues?.image;
              if (onChange) {
                const modelFields = {
                  name,
                  description,
                  image: value,
                };
                const result = onChange(modelFields);
                value = result?.image ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"private"}
          acceptedFileTypes={[]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "image")}
        ></StorageManager>
      </Field>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
