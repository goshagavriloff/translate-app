import React, { ChangeEvent } from 'react'

import IonIcon from '@reacticons/ionicons';
import { FooterProps } from '../types/Card';

const FooterCard = (props:{context:FooterProps,callback:Function}) => {
  const {context,callback}=props;
  const {caption,bcaption,ionic}=context;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (bcaption==='Загрузить'){
      inputRef.current?.click();
    }
    else {
      callback();
    }
  }
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
          const file = e.target?.files?.[0];
          if (file &&
            (file.type === "application/pdf" ||
              file.type === "text/plain" ||
              file.type === "application/msword" ||
              file.type ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
          ) {
            callback(file);
          } else {
            alert("Пожалуйста, загрузите файл txt/txt/docx");
          }
  }

  return (
    <div className="flex items-center flex-col justify-center border-t-primary-bg pt-5 border-t-2 border-solid">
          <p className='mb-5'>{caption}</p>
          
          <button id="btn" className='h-[50px] flex items-center gap-5 text-text cursor-pointer bg-primary-bg px-5 py-0 rounded-[30px] border-none hover:text-primary-text hover:bg-primary' onClick={handleClick}>
            <span className='text-xs pointer-events-none'>{bcaption}</span>
            <IonIcon name={ionic} className='text-xl'/>
          </button>
          {bcaption==='Загрузить'&& (
            <input type="file" id="upload-document" hidden ref={inputRef} onChange={handleChange}/>
          )}
        </div>
  )
}

export default FooterCard