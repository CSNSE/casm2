/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, HeadingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type TitleOverridesProps = {
    Title?: PrimitiveOverrideProps<ViewProps>;
    Heading4244350?: PrimitiveOverrideProps<FlexProps>;
    Heading4244351?: PrimitiveOverrideProps<HeadingProps>;
    Heading4244352?: PrimitiveOverrideProps<HeadingProps>;
    "Corneal Applanation Suturing Model (C.A.S.M)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TitleProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TitleOverridesProps | undefined | null;
}>;
export default function Title(props: TitleProps): React.ReactElement;
