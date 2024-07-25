import { languages } from "../utils/constants";

export type Translation={
    text:string,
    translation:string,
    language:{
        from:LanguageCode,
        to:LanguageCode
    }
};

export type Language = {
    code: LanguageCode,
    descr: LanguageDescr,
};

export type LanguageCode = keyof (typeof languages);
type LanguageDescr=typeof languages[LanguageCode];


