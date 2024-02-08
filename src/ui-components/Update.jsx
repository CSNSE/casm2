
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
import { Button, Text, TextField, View, Grid } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { getSurvey } from "../graphql/queries";
const client = generateClient();
export default function EditF(props) {
  const {
    idProp,
    survey: surveyModelProp,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    res: "",
    wetLab: "",
    sim: "",
    muscle: "",
    no: "",
  };
  const [res, setRes] = React.useState(initialValues.res);
  const [wetLab, setWetLab] = React.useState(initialValues.wetLab);
  const [sim, setSim] = React.useState(initialValues.sim);
  const [muscle, setMuscle] = React.useState(initialValues.muscle);
  const [no, setNo] = React.useState(initialValues.no);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = surveyRecord
      ? { ...initialValues, ...surveyRecord }
      : initialValues;
    setRes(cleanValues.res);
    setWetLab(cleanValues.wetLab);
    setSim(cleanValues.sim);
    setMuscle(cleanValues.muscle);
    setNo(cleanValues.no);
    setErrors({});
  };
  const [surveyRecord, setSurveyRecord] = React.useState(surveyModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSurvey.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSurvey
        : surveyModelProp;
      setSurveyRecord(record);
    };
    queryData();
  }, [idProp, surveyModelProp]);
  React.useEffect(resetStateValues, [surveyRecord]);
  const validations = {
    res: [],
    wetLab: [],
    sim: [],
    muscle: [],
    no: [],
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
          res: res ?? null,
          wetLab: wetLab ?? null,
          sim: sim ?? null,
          muscle: muscle ?? null,
          no: no ?? null,
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
            query: updateSurvey.replaceAll("__typename", ""),
            variables: {
              input: {
                id: surveyRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SurveyUpdateForm")}
      {...rest}
    >
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
    ><TextField
    label="Are you a resident?"
    isRequired={true}
    isReadOnly={false}
    value={res}
    onChange={(e) => {
      let { value } = e.target;
      if (onChange) {
        const modelFields = {
          res: value,
          wetLab,
          sim,
          muscle,
          no,
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
  <TextField
    label="To the best of your recollection, have you practiced suturing technique in a wet lab"
    isRequired={true}
    isReadOnly={false}
    value={wetLab}
    onChange={(e) => {
      let { value } = e.target;
      if (onChange) {
        const modelFields = {
          res,
          wetLab: value,
          sim,
          muscle,
          no,
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
    label="To the best of your recollection, have you practiced suturing technique using a surgical simulator?"
    isRequired={true}
    isReadOnly={false}
    value={sim}
    onChange={(e) => {
      let { value } = e.target;
      if (onChange) {
        const modelFields = {
          res,
          wetLab,
          sim: value,
          muscle,
          no,
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
    label="Based on your recollection of strabismus surgery rotation, do you think the C.A.S.M would be a good model for practicing eye muscle surgery"
    isRequired={true}
    isReadOnly={false}
    value={muscle}
    onChange={(e) => {
      let { value } = e.target;
      if (onChange) {
        const modelFields = {
          res,
          wetLab,
          sim,
          muscle: value,
          no,
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
    label='If you answered "No" to the previous question, please provide a short explanation about why.'
    isRequired={true}
    isReadOnly={false}
    value={no}
    onChange={(e) => {
      let { value } = e.target;
      if (onChange) {
        const modelFields = {
          res,
          wetLab,
          sim,
          muscle,
          no: value,
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
      <Button
        children="Submit"
        type="submit"
        variation="primary"
        isDisabled={
          !(idProp || surveyModelProp) ||
          Object.values(errors).some((e) => e?.hasError)
        }
        {...getOverrideProps(overrides, "SubmitButton")}
      ></Button>
    </View>
    </Grid>
  );
}



