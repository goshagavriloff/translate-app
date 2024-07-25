import { FooterCode,  FooterProps, HeaderProps, HeaderTitle, TextProps } from "../types/Card";
import { LanguageCode } from "../types/Language";
import { footers } from "../utils/constants";

export class ContextCard{
    header:HeaderProps;
    text:TextProps;
    footer:FooterProps;

    language:LanguageCode;

    constructor(title:HeaderTitle) {

            this.header={title};
            this.language="auto";
            this.text={
                txt:"",
                readonly: title==='To',
                placeholder:title==='From'?"Введите текст":""
            };
            this.footer={} as FooterProps;
    }

    setLanguage(language:LanguageCode){
        this.language=language;
    }
    setTxt(text: TextProps){
        this.text=text;
    }
    setFooter(bcaption:FooterCode){

        this.footer={
            ...footers[bcaption],
            bcaption,
        }
    }
    
}