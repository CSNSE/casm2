/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NavOverridesProps = {
    Nav?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "Frame 33"?: PrimitiveOverrideProps<ViewProps>;
    "\u270E"?: PrimitiveOverrideProps<TextProps>;
    "Frame 35"?: PrimitiveOverrideProps<ViewProps>;
    "\uD83D\uDCDE"?: PrimitiveOverrideProps<TextProps>;
    "Frame 34"?: PrimitiveOverrideProps<ViewProps>;
    Image?: PrimitiveOverrideProps<TextProps>;
    "Survey & Image Model"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavProps = React.PropsWithChildren<Partial<FlexProps> & {
    survey?: any;
} & {
    overrides?: NavOverridesProps | undefined | null;
}>;
export default function Nav(props: NavProps): React.ReactElement;
