/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ModelEyeOverridesProps = {
    ModelEye?: PrimitiveOverrideProps<FlexProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 34"?: PrimitiveOverrideProps<ViewProps>;
    Button41642112?: PrimitiveOverrideProps<ButtonProps>;
    Button41642172?: PrimitiveOverrideProps<ButtonProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "Are you a resident?"?: PrimitiveOverrideProps<TextProps>;
    "$99 USD41642176"?: PrimitiveOverrideProps<TextProps>;
    "To the best of your recollection, have you practiced suturing technique in a wet lab"?: PrimitiveOverrideProps<TextProps>;
    "$99 USD41642178"?: PrimitiveOverrideProps<TextProps>;
    "To the best of your recollection, have you practiced suturing technique using a surgical simulator?"?: PrimitiveOverrideProps<TextProps>;
    "$99 USD41642180"?: PrimitiveOverrideProps<TextProps>;
    "Based on your recollection of strabismus surgery rotation, do you think the C.A.S.M would be a good model for practicing eye muscle surgery"?: PrimitiveOverrideProps<TextProps>;
    "$99 USD41642182"?: PrimitiveOverrideProps<TextProps>;
    "If you answered \"No\" to the previous question, please provide a short explanation about why."?: PrimitiveOverrideProps<TextProps>;
    "$99 USD41642184"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ModelEyeProps = React.PropsWithChildren<Partial<FlexProps> & {
    SurveyResult?: any;
} & {
    overrides?: ModelEyeOverridesProps | undefined | null;
}>;
export default function ModelEye(props: ModelEyeProps): React.ReactElement;
