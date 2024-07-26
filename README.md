# Getting Started with Create React App

This project(Translate-UI) was bootstrapped with [Create React App]
The Translate-UI project is a project for translating data according to user-specified settings.
The Translate-UI project is easy to modify.
By default, the project works with the Google Translate API, but you can switch the API with one click!
## Project architecture

The project is divided into two parts:
1. Frontend - layout and rendering of React components when working with the interface
2. Application - business logic for the interaction of architecture components (files in src/app)

## Project modification
To add your translator, you must complete the following steps:
### 1. Add a list of languages ​​for the translator (file /src/utils/constants.ts). 
####  Description of type: 

|           | Type   | Description                                              |
| --------  | ------ |--------------------------------------------------------- |
| `key`     | String | The key is passed directly to the translator class       |
| `name`    | String | Short name, displayed when selected from a list of values|
| `native`  | String | Full name                                                |


#### Example:

```typescript
export const custom_alphathet ={
    "R01010":{ "name": "AUD", "native": "Австралийский доллар" },
    ...
    "R01035":{ "name": "GBP", "native": "Фунт стерлингов Соединенного королевства" },
};
```
### 2. Add types for easy programming (file /src/types/Language.d.ts).

#### Example:

```typescript
type LanguageCustomCode=keyof (typeof custom_alphathet);
type LanguageCustomDescr=typeof custom_alphathet[LanguageCustomCode];

```
### 3. Add your translator implementing class with the necessary mandatory attributes (/app/translate/)
#### Class Description
|           | Type   | Description                                              |
| --------  | ------ |--------------------------------------------------------- |
| `alphathet`     | String | list of available languages ​​for translation        |
| `svg`    | String | String SVG |
| `auto_from`  | String | Default translation language(from)                    |
| `auto_to`  | String | Default translation language(to)                        |

#### Example:

```typescript
import { LanguageCustomCode, LanguageCustomDescr, Translation } from "../../../types/Language";
import { custom_alphathet } from "../../../utils/constants";
import { Translator } from "../Translator";

export class CustomTranslator implements Translator {
    alphathet: { [x: LanguageCustomCode]: LanguageCustomDescr; };
    svg: string;
    auto_from: LanguageCustomCode;
    auto_to: LanguageCustomCode;

    constructor(){
        this.alphathet=custom_alphathet as {[key in LanguageCustomCode]:LanguageCustomDescr};
        this.svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M6.5 10h-2v7h2zm6 0h-2v7h2zm8.5 9H2v2h19zm-2.5-9h-2v7h2zm-7-6.74L16.71 6H6.29zm0-2.26L2 6v2h19V6z"/></svg>`;
        this.auto_from="R01010";
        this.auto_to="R01035";
    }

    execute(txt: string, from: LanguageCustomCode, to: LanguageCustomCode): Promise<Translation> {

        const translation="";
        
        return new Promise((resolve)=>{
            
            const result= {
                text:txt,
                translation,
                language:{
                    from,
                    to
                }
            } as Translation;
            resolve(result);
        });
    }
    
}
```
### 4. Add a translator to SwitchCard's translators (/src/components/SwitchCard.tsx)
Example:
```typescript
...

    const translators=[GoogleTranslator,BinTranslator,CustomTranslator];

...
```
## Congratulations, you have added your translator