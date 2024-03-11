/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps } from "@aws-amplify/ui-react";
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
export declare type LinksOverridesProps = {
    Links?: PrimitiveOverrideProps<FlexProps>;
    Button4385635?: PrimitiveOverrideProps<ButtonProps>;
    Button4385639?: PrimitiveOverrideProps<ButtonProps>;
    Button4385643?: PrimitiveOverrideProps<ButtonProps>;
    Button4385647?: PrimitiveOverrideProps<ButtonProps>;
    Button4385651?: PrimitiveOverrideProps<ButtonProps>;
    Button4385655?: PrimitiveOverrideProps<ButtonProps>;
    Button4385659?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LinksProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LinksOverridesProps | undefined | null;
}>;
export default function Links(props: LinksProps): React.ReactElement;
