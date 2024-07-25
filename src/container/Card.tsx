import React, { useEffect, useState } from 'react'
import HeaderCard from '../components/HeaderCard'
import TextCard from '../components/TextCard'
import FooterCard from '../components/FooterCard'
import { ContextCard } from '../app/ContextCard'
import { LanguageCode } from '../types/Language'
import { TextProps } from '../types/Card'

const Card = (props: { context: ContextCard, setContext: Function ,callbackFooter:Function}) => {

  const { context, setContext,callbackFooter } = props;
  const { header, text, footer, language } = context;

  const [langId, setLangId] = useState<LanguageCode>(language);
  const [txt,setTxt]=useState<TextProps>(text);


  const callbackLanguage = (value: LanguageCode) => {
    context.setLanguage(value);
    setContext();
  }
  const callbackText = (value: TextProps) => {
    context.setTxt(value);
    setContext();
  }
  useEffect(() => {
    setLangId(context.language);
    setContext();
  }, [context.language]);

  useEffect(()=>{
    setTxt(context.text);
    setContext();
  },[context.text.txt]);

  return (
    <div className='max-w-full rounded-3xl  md:flex-1 md:p-7 bg-light'>
      <HeaderCard context={header} langId={langId} setLangId={callbackLanguage} />
      <TextCard context={txt} setTxt={callbackText}/>
      <FooterCard context={footer} callback={callbackFooter}/>
    </div>
  )
}

export default Card