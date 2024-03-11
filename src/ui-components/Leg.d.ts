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
export declare type LegOverridesProps = {
    Leg?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "For leg health, biotechnology has contributed to the creation of advanced prosthetic legs and exoskeletons that enhance mobility for individuals with lower limb loss or paralysis. These technologies leverage materials science, robotics, and machine learning to provide users with greater freedom of movement, stability, and the ability to perform activities of daily living with ease."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LegProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LegOverridesProps | undefined | null;
}>;
export default function Leg(props: LegProps): React.ReactElement;
