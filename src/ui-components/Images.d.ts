/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ImagesOverridesProps = {
    Images?: PrimitiveOverrideProps<ViewProps>;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    TextField4264460?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4264461?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ImagesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ImagesOverridesProps | undefined | null;
}>;
export default function Images(props: ImagesProps): React.ReactElement;
