/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
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
    TextField4128763?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4128764?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4128765?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4128766?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4128767?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SurveyProps = React.PropsWithChildren<Partial<ViewProps> & {
    survey?: any;
} & {
    overrides?: SurveyOverridesProps | undefined | null;
}>;
export default function Survey(props: SurveyProps): React.ReactElement;
