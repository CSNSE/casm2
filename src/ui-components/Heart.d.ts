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
export declare type HeartOverridesProps = {
    Heart?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Biotechnological advancements in cardiac care include the development of bioengineered tissues and organs for transplantation, stem cell therapy to regenerate damaged heart tissue, and the creation of innovative cardiac devices like biodegradable stents and artificial hearts. These technologies aim to improve outcomes for patients with heart disease, offering new hope for recovery and a better quality of life."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HeartProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeartOverridesProps | undefined | null;
}>;
export default function Heart(props: HeartProps): React.ReactElement;
