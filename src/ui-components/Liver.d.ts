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
export declare type LiverOverridesProps = {
    Liver?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "For liver diseases, biotechnological innovations include the engineering of liver tissues for transplantation, the use of gene editing techniques to correct genetic liver disorders, and the development of liver-on-a-chip devices for drug testing and disease modeling. These approaches can lead to more effective treatments for liver conditions, reducing the need for liver transplants and improving patient outcomes."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LiverProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LiverOverridesProps | undefined | null;
}>;
export default function Liver(props: LiverProps): React.ReactElement;
