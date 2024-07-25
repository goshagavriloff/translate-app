import { FooterCode,  FooterProps, HeaderProps, HeaderTitle, TextProps } from "../types/Card";
import { LanguageCode} from "../types/Language";
import { footers } from "../utils/constants";

export class ContextCard{
    header:HeaderProps;
    text:TextProps;
    footer:FooterProps;

    language:LanguageCode;
    alphathet:{[key in string]:{name:string,native:string}};

    constructor(title:HeaderTitle) {

            this.header={title};
            this.language="auto";
            this.text={
                txt:"",
                readonly: title==='To',
                placeholder:title==='From'?"Введите текст":""
            };
            this.footer={} as FooterProps;

            this.alphathet={} as {[key in string]:{name:string,native:string}};

    }

    setLanguage(language:LanguageCode){
        this.language=language;
    }

    setAlphathet(alphathet:{[key in string]:{name:string,native:string}}){
        this.alphathet=alphathet;
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