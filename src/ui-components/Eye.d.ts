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
export declare type EyeOverridesProps = {
    Eye?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Biomedical devices for the eye, such as advanced prosthetics and implantable lenses, are transforming the treatment of vision impairment and blindness. Retinal implants, for example, can restore vision for those with retinitis pigmentosa, while artificial corneas offer new hope for corneal blindness."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type EyeProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EyeOverridesProps | undefined | null;
}>;
export default function Eye(props: EyeProps): React.ReactElement;
