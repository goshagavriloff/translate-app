import { footers } from "../utils/constants";
import { LanguageCode } from "./Language";

type HeaderTitle = "From" | "To";
type FooterCode = keyof (typeof footers);
type FooterTitle=typeof footers[FooterCode]["caption"];
type FooterIonic=typeof footers[FooterCode]["ionic"];

export type HeaderProps = {
    title: HeaderTitle
};
export type TextProps={
    txt:string,
    limit?:number,
    readonly:boolean,
    placeholder:string
};
export type FooterProps={
    caption:FooterTitle,
    bcaption:FooterCode,
    ionic:FooterIonic

};

export type CardProps = {
    header: HeaderProps,
    text:TextProps,
    footer:FooterProps,
};


export type SwapProps={
    callback:Function
};