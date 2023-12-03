/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { HeadingProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CASMOverridesProps = {
    CASM?: PrimitiveOverrideProps<ViewProps>;
    CASM40462845?: PrimitiveOverrideProps<ViewProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
} & EscapeHatchProps;
export declare type CASMProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CASMOverridesProps | undefined | null;
}>;
export default function CASM(props: CASMProps): React.ReactElement;
