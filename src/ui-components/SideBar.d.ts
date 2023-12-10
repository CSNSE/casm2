/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32140841877"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32140841878"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Corneal Applanation Suturing Model"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32140841890"?: PrimitiveOverrideProps<FlexProps>;
    "Patent Pending"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32140841925"?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
