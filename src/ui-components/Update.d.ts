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
export declare type UpdateOverridesProps = {
    Update?: PrimitiveOverrideProps<ViewProps>;
    TextField41781565?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41781566?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41781567?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41781568?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41781569?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UpdateProps = React.PropsWithChildren<Partial<ViewProps> & {
    Updated?: any;
} & {
    overrides?: UpdateOverridesProps | undefined | null;
}>;
export default function Update(props: UpdateProps): React.ReactElement;
