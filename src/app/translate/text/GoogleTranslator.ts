import { LanguageCode, LanguageTextCode, LanguageTextDescr, Translation } from "../../../types/Language";
import { languages } from "../../../utils/constants";
import { TextTranslator } from "./TextTranslator";


export class GoogleTranslator implements TextTranslator {
    
    alphathet:{[key in LanguageTextCode]:LanguageTextDescr};
    svg:string;
    auto_from:LanguageTextCode;
    auto_to:LanguageTextCode;
    constructor() {
        this.alphathet=languages as {[key in LanguageCode]:LanguageTextDescr};
        this.svg=(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="black" d="m473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72c-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 0 1-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4c57.73 0 112.45-22.62 151.45-63.66c38.34-40.4 58.17-96.3 58.17-154.9c0-24.67-2.48-39.32-2.59-39.96"/></svg>`);
        this.auto_from="auto";
        this.auto_to="en";
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