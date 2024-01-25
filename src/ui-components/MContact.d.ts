/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MContactOverridesProps = {
    MContact?: PrimitiveOverrideProps<FlexProps>;
    TextField42271598?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42271599?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42271600?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MContactProps = React.PropsWithChildren<Partial<FlexProps> & {
    contact?: any;
} & {
    overrides?: MContactOverridesProps | undefined | null;
}>;
export default function MContact(props: MContactProps): React.ReactElement;
