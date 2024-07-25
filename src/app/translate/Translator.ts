import { LanguageCode, LanguageDescr, Translation } from "../../types/Language";

export interface Translator{
    alphathet:{[key in string]:{name:string,native:string}};
    svg:string;
    auto_from:string;
    auto_to:string;
    execute(txt:string,from:string,to:string):Promise<Translation>;
}