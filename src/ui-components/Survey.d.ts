/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, RadioProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SurveyOverridesProps = {
    Survey?: PrimitiveOverrideProps<ViewProps>;
    Radio4051413?: PrimitiveOverrideProps<RadioProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    Radio4051419?: PrimitiveOverrideProps<RadioProps>;
    Radio4061522?: PrimitiveOverrideProps<RadioProps>;
    Radio4061523?: PrimitiveOverrideProps<RadioProps>;
    Radio4061543?: PrimitiveOverrideProps<RadioProps>;
    Radio4061544?: PrimitiveOverrideProps<RadioProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    label4070389?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    label4070390?: PrimitiveOverrideProps<TextProps>;
    label4070391?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SurveyProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SurveyOverridesProps | undefined | null;
}>;
export default function Survey(props: SurveyProps): React.ReactElement;
