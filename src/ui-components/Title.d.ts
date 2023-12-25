/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, HeadingProps, ViewProps } from "@aws-amplify/ui-react";
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
    Heading4168273?: PrimitiveOverrideProps<FlexProps>;
    Heading4168311?: PrimitiveOverrideProps<HeadingProps>;
    Heading4168313?: PrimitiveOverrideProps<HeadingProps>;
    Heading4168316?: PrimitiveOverrideProps<HeadingProps>;
} & EscapeHatchProps;
export declare type TitleProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TitleOverridesProps | undefined | null;
}>;
export default function Title(props: TitleProps): React.ReactElement;
