/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
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
    Button4317752?: PrimitiveOverrideProps<ButtonProps>;
    Button4317753?: PrimitiveOverrideProps<ButtonProps>;
    Button4317754?: PrimitiveOverrideProps<ButtonProps>;
    Button4317755?: PrimitiveOverrideProps<ButtonProps>;
    Button4317756?: PrimitiveOverrideProps<ButtonProps>;
    Button4317757?: PrimitiveOverrideProps<ButtonProps>;
    Button4317776?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavProps = React.PropsWithChildren<Partial<FlexProps> & {
    survey?: any;
    url?: (event: SyntheticEvent) => void;
} & {
    overrides?: NavOverridesProps | undefined | null;
}>;
export default function Nav(props: NavProps): React.ReactElement;
