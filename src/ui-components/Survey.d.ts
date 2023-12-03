/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { RadioProps, SelectFieldProps, ViewProps } from "@aws-amplify/ui-react";
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
    Radio4051425?: PrimitiveOverrideProps<RadioProps>;
    Radio4051431?: PrimitiveOverrideProps<RadioProps>;
    Radio4051438?: PrimitiveOverrideProps<RadioProps>;
} & EscapeHatchProps;
export declare type SurveyProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SurveyOverridesProps | undefined | null;
}>;
export default function Survey(props: SurveyProps): React.ReactElement;
