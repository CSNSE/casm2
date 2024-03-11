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
export declare type HandOverridesProps = {
    Hand?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Biotechnological advancements in hand rehabilitation and prosthetics have led to the development of highly sophisticated bionic hands and fingers that closely mimic natural movements and functionalities. These devices use sensors and AI to interpret nerve signals from the user's residual limb, allowing for precise control and improving the quality of life for amputees or those with hand impairments."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HandProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HandOverridesProps | undefined | null;
}>;
export default function Hand(props: HandProps): React.ReactElement;
