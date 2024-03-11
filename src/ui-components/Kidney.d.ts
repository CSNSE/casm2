/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BadgeProps, ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type KidneyOverridesProps = {
    Kidney?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "In the realm of kidney health, biotechnology has led to the development of artificial kidneys and bioartificial kidney devices that mimic the natural functions of the kidneys. This includes filtering waste from the blood and maintaining fluid and electrolyte balance. Stem cell research and gene therapy are also promising areas, potentially offering ways to repair kidney damage or address the underlying causes of kidney diseases."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type KidneyProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: KidneyOverridesProps | undefined | null;
}>;
export default function Kidney(props: KidneyProps): React.ReactElement;
