import React from 'react';
import { TextProps } from '../../types/Card';

const TextCard = (props:{context:TextProps,setTxt:Function}) => {
  const {context,setTxt}=props;
  const {txt,readonly,limit,placeholder}=context;

  const handleChange = (e:any) => {
    const target = e.target as HTMLTextAreaElement;
    const txt= target.value;
    
    setTxt({
      ...context,
      txt
    });
  }

  return (
    
    <div className="relative">
        
    <textarea
      className="w-full bg-transparent resize-none text-text text-lg mx-0 my-2.5 p-5 border-none outline-none"
      cols={30}
      rows={10}
      placeholder={placeholder}
      readOnly={readonly}
      value={txt}
      maxLength={!limit?2000:limit}
      onChange={handleChange}
    ></textarea>

    {limit &&
    (
      <div className="absolute text-[0.8rem] text-light-text p-2.5 right-0 bottom-0"><span id="input-chars">{txt?.length||0}</span> / {limit}</div>
    )}
   
  </div>
  )
}

export default TextCard