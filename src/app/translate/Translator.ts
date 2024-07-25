import { Translation } from "../../types/Language";

export interface Translator{
    execute(txt:string,from:string,to:string):Promise<Translation>;
}