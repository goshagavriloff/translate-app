import React, { useEffect, useRef, useState } from 'react'
import { Translator } from '../app/translate/Translator'
import { GoogleTranslator } from '../app/translate/text/GoogleTranslator';
import { Context } from '../app/Context';

const SwitchCard = (props:{context:Context,setContext:Function}) => {
    const {context,setContext}=props;
    const {translator}=context;
    const [activeTranslator,setTranslator]=useState<Translator>(translator);
    const [id,setId]=useState<number>(0);

    const svg = useRef<HTMLDivElement>(null);

    const translators=[GoogleTranslator,GoogleTranslator];
    
    const handleClick = () => {
        const _id=(id+1)%translators.length;
        const _translator=translators[_id];
        setId(_id);
        setTranslator(new _translator());

        context.setTranslator(activeTranslator);
        context.setup();
        setContext();
      }

    useEffect(() => {
        if (svg.current) {
            if (!svg.current.firstChild) {
                svg.current.innerHTML=activeTranslator.svg;
              } else{
                svg.current.innerHTML=activeTranslator.svg;
              }
        }
      }, [id]);
    
  return (
    <div className="fixed z-1 right-5 bottom-5">
    <label className="relative cursor-pointer" onClick={handleClick}>
      <div id='svg_id' ref={svg}  className="w-[70px] h-[70px] flex items-center flex-col justify-center border border-light-text bg-light transition-all duration-[0.2s] ease-in px-0 py-[3px] rounded-[30px] border-solid">

      </div>
    </label>
  </div>
    
  )
}

export default SwitchCard