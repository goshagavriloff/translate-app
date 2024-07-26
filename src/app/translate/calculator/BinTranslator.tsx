import { LanguageBinCode, LanguageBinDescr, Translation } from "../../../types/Language";
import { bins } from "../../../utils/constants";
import { Translator } from "../Translator";

export class BinTranslator implements Translator {
    alphathet: {[key in LanguageBinCode]:LanguageBinDescr};
    svg: string;
    auto_from: LanguageBinCode;
    auto_to: LanguageBinCode;

    constructor(){
        this.alphathet=bins as {[key in LanguageBinCode]:LanguageBinDescr};
        this.svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="black" d="M92 24c-23.55 0-40 19.74-40 48s16.45 48 40 48s40-19.74 40-48s-16.45-48-40-48m0 72c-15.55 0-16-21.54-16-24s.45-24 16-24s16 21.54 16 24s-.45 24-16 24m53.27-42.63a12 12 0 0 1 5.36-16.1l24-12A12 12 0 0 1 192 36v72a12 12 0 0 1-24 0V55.42l-6.63 3.31a12 12 0 0 1-16.1-5.36M164 136c-23.55 0-40 19.74-40 48s16.45 48 40 48s40-19.74 40-48s-16.45-48-40-48m0 72c-15.55 0-16-21.54-16-24s.45-24 16-24s16 21.54 16 24s-.45 24-16 24m-60-60v72a12 12 0 0 1-24 0v-52.58l-6.63 3.31a12 12 0 1 1-10.74-21.46l24-12A12 12 0 0 1 104 148"/></svg>`;
        this.auto_from="10";
        this.auto_to="2";
    }

    execute(txt: string, from: string, to: string): Promise<Translation> {

        const translation=parseInt(txt, Number(from)).toString(Number(to));
        
        return new Promise((resolve)=>{
            
            const result= {
                text:txt,
                translation:(translation==="NaN")?"":translation,
                language:{
                    from,
                    to
                }
            } as Translation;
            resolve(result);
        });
    }
    
}