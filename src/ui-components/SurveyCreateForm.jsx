/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createSurvey } from "../graphql/mutations";
const client = generateClient();
export default function SurveyCreateForm(props) {
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
    wetLab: "",
    sim: "",
    muscle: "",
    no: "",
    res: "",
  };
  const [wetLab, setWetLab] = React.useState(initialValues.wetLab);
  const [sim, setSim] = React.useState(initialValues.sim);
  const [muscle, setMuscle] = React.useState(initialValues.muscle);
  const [no, setNo] = React.useState(initialValues.no);
  const [res, setRes] = React.useState(initialValues.res);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setWetLab(initialValues.wetLab);
    setSim(initialValues.sim);
    setMuscle(initialValues.muscle);
    setNo(initialValues.no);
    setRes(initialValues.res);
    setErrors({});
  };
  const validations = {
    wetLab: [],
    sim: [],
    muscle: [],
    no: [],
    res: [],
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
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          wetLab,
          sim,
          muscle,
          no,
          res,
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
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
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
            query: createSurvey.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "SurveyCreateForm")}
      {...rest}
    >
      <TextField
        label="Wet lab"
        isRequired={false}
        isReadOnly={false}
        value={wetLab}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              wetLab: value,
              sim,
              muscle,
              no,
              res,
            };
            const result = onChange(modelFields);
            value = result?.wetLab ?? value;
          }
          if (errors.wetLab?.hasError) {
            runValidationTasks("wetLab", value);
          }
          setWetLab(value);
        }}
        onBlur={() => runValidationTasks("wetLab", wetLab)}
        errorMessage={errors.wetLab?.errorMessage}
        hasError={errors.wetLab?.hasError}
        {...getOverrideProps(overrides, "wetLab")}
      ></TextField>
      <TextField
        label="Sim"
        isRequired={false}
        isReadOnly={false}
        value={sim}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              wetLab,
              sim: value,
              muscle,
              no,
              res,
            };
            const result = onChange(modelFields);
            value = result?.sim ?? value;
          }
          if (errors.sim?.hasError) {
            runValidationTasks("sim", value);
          }
          setSim(value);
        }}
        onBlur={() => runValidationTasks("sim", sim)}
        errorMessage={errors.sim?.errorMessage}
        hasError={errors.sim?.hasError}
        {...getOverrideProps(overrides, "sim")}
      ></TextField>
      <TextField
        label="Muscle"
        isRequired={false}
        isReadOnly={false}
        value={muscle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              wetLab,
              sim,
              muscle: value,
              no,
              res,
            };
            const result = onChange(modelFields);
            value = result?.muscle ?? value;
          }
          if (errors.muscle?.hasError) {
            runValidationTasks("muscle", value);
          }
          setMuscle(value);
        }}
        onBlur={() => runValidationTasks("muscle", muscle)}
        errorMessage={errors.muscle?.errorMessage}
        hasError={errors.muscle?.hasError}
        {...getOverrideProps(overrides, "muscle")}
      ></TextField>
      <TextField
        label="No"
        isRequired={false}
        isReadOnly={false}
        value={no}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              wetLab,
              sim,
              muscle,
              no: value,
              res,
            };
            const result = onChange(modelFields);
            value = result?.no ?? value;
          }
          if (errors.no?.hasError) {
            runValidationTasks("no", value);
          }
          setNo(value);
        }}
        onBlur={() => runValidationTasks("no", no)}
        errorMessage={errors.no?.errorMessage}
        hasError={errors.no?.hasError}
        {...getOverrideProps(overrides, "no")}
      ></TextField>
      <TextField
        label="Res"
        isRequired={false}
        isReadOnly={false}
        value={res}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              wetLab,
              sim,
              muscle,
              no,
              res: value,
            };
            const result = onChange(modelFields);
            value = result?.res ?? value;
          }
          if (errors.res?.hasError) {
            runValidationTasks("res", value);
          }
          setRes(value);
        }}
        onBlur={() => runValidationTasks("res", res)}
        errorMessage={errors.res?.errorMessage}
        hasError={errors.res?.hasError}
        {...getOverrideProps(overrides, "res")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
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
