import { LanguageCode, LanguageDescr, Translation } from "../../types/Language";

export interface Translator{
    alphathet:{[key in string]:{name:string,native:string}};
    execute(txt:string,from:string,to:string):Promise<Translation>;
}