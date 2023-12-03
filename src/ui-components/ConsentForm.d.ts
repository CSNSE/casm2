/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ConsentFormOverridesProps = {
    ConsentForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31"?: PrimitiveOverrideProps<FlexProps>;
    "Consent to Survey"?: PrimitiveOverrideProps<TextProps>;
    "There is always the possibility of tampering from an outside source when using the internet for collecting information. While the confidentiality of your responses will be protected once the data are downloaded from the internet, there is always a possibility of hacking or other security breaches that could threaten the confidentiality of your responses. Please know that you are free to decide not to answer any question. Adult Consent: If you are over the age of 18 and not a high school student, please review the consent information below. Purpose of the Research: To determine whether my model would be an efficient training tool for surgical procedures (suturing/scleral buckling surgery/strabismus surgery) and applanation If you participate, you will be asked to: Analyze my device and provide feedback. Time required for your participation: 5 minutes. Potential risks to you as a participant: Injest silicone. Potential benefits to you as a participant: This eye model is a necessary training tool in the medical field that does not exist elsewhere. The model can rotate and was designed with accurate dimensions of a human eye. Your confidential, personal information will be protected by: Referring to the person filling out the form as an eye doctor. If you have questions about this study, please contact: 239-776-4249"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ConsentFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ConsentFormOverridesProps | undefined | null;
}>;
export default function ConsentForm(props: ConsentFormProps): React.ReactElement;
