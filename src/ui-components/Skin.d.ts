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
export declare type SkinOverridesProps = {
    Skin?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "In skin care and wound healing, biotechnology has introduced bioengineered skin substitutes and growth factor therapies that promote tissue regeneration and repair. These technologies are particularly beneficial for treating burns, chronic wounds, and skin diseases, offering faster healing times and reduced scarring compared to traditional treatments."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SkinProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SkinOverridesProps | undefined | null;
}>;
export default function Skin(props: SkinProps): React.ReactElement;
