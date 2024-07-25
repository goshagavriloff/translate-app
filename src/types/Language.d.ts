import { bins, languages } from "../utils/constants";

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

export type LanguageCode=LanguageTextCode|LanguageBinCode;

export type LanguageDescr=LanguageTextDescr|LanguageBinDescr;

type LanguageTextCode = keyof (typeof languages);
type LanguageBinCode=keyof (typeof bins);

type LanguageTextDescr=typeof languages[LanguageTextCode];
type LanguageBinDescr=typeof bins[LanguageBinCode];



