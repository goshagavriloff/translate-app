import { LanguageCode, LanguageTextCode, LanguageTextDescr, Translation } from "../../../types/Language";
import { languages } from "../../../utils/constants";
import { TextTranslator } from "./TextTranslator";


export class GoogleTranslator implements TextTranslator {
    
    alphathet:{[key in LanguageTextCode]:LanguageTextDescr};

    constructor() {
        this.alphathet=languages as {[key in LanguageCode]:LanguageTextDescr};
    }

    execute(txt: string, from: string, to: string):Promise<Translation> {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURI(
            txt
          )}`;
          return fetch(url)
            .then((response) => response.json())
            .then((json) => {
                return {
                    text:txt,
                    translation:json[0]?.map((item:any) => item[0]).join(""),
                    language:{
                        from,to
                    }
                } as Translation;
            });
    }
}