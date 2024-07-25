import { LanguageTextCode, LanguageTextDescr } from "../../../types/Language";
import { Translator } from "../Translator";

export interface TextTranslator extends Translator {
    alphathet:{[key in LanguageTextCode]:LanguageTextDescr};
}