import { LanguageCode, Translation } from "../types/Language";
import { ContextCard } from "./ContextCard";
import { GoogleTranslator } from "./translate/text/GoogleTranslator";
import { Translator } from "./translate/Translator";

export class Context {
    from: ContextCard;
    to: ContextCard;
    translator: Translator;

    constructor(clone?: Context) {
        if (!clone) {
            const from = new ContextCard('From');
            const to = new ContextCard('To');

            from.text.limit = 2000;

            //from.set
            from.setFooter("Загрузить");
            to.setFooter("Скачать");


            this.from = from;
            this.to = to;

            this.translator = new GoogleTranslator();
            this.setup();

        } else {

            this.from = clone.from;
            this.to = clone.to;
            this.translator = clone.translator;
        }

    }

    setup():void{
        const {translator}=this;
        const {alphathet,auto_from,auto_to}=translator;

        [this.from,this.to].forEach((card:ContextCard)=>{
            card.setAlphathet(alphathet);
            card.text.txt="";
        });

        this.from.setLanguage(auto_from as LanguageCode);
        this.to.setLanguage(auto_to as LanguageCode);
    }

    clone(): Context {
        return new Context(this);
    }


    setTranslator(translator: Translator): void {
        this.translator = translator;
    }

    translate(): Promise<void> {
        const { txt } = this.from.text;
        const lang_from = this.from.language;
        const lang_to = this.to.language;

        return this.translator
            .execute(txt, lang_from, lang_to)
            .then((result: Translation) => {
                this.to.text.txt = result.translation;
            });
    }

    swap(): void {
        [this.from.language, this.to.language] = [this.to.language, this.from.language];

        if (this.from.text.txt) {

            [this.from.text.txt, this.to.text.txt] = [this.to.text.txt, this.from.text.txt];
        }

    }

    downloadFile(content:string,title:string): Promise<void> {
        return new Promise<void>(()=>{
            const outputText = content;
            if (outputText) {
                const blob = new Blob([outputText], { type: "text/plain" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.download = `${title}.txt`;
                a.href = url;
                a.click();
            }
        });
    }
    
    uploadFile(file: any): Promise<string> {
        return new Promise<string>((resolve,reject)=>{
            const reader = new FileReader();
            
            reader.onloadend = (e: ProgressEvent<FileReader>)=>{
               
                if (e.target){
                    const str=e.target.result as string;
                    resolve(str.slice(0,this.from.text.limit));
                } 
            };

            reader.onerror = function(e: any) {
                reject(e);
              };
          
            reader.readAsText(file);

        });

    }
}