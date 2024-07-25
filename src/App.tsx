import React, { useEffect, useState } from 'react';
import Card from './container/Card';
import SwapCard from './components/SwapCard';
import { Context } from './app/Context';

function App() {

  const [context, setContext] = useState<Context>(new Context());

  const swap = context.swap.bind(context);

  const callback = () => {
    setContext(context.clone());
  }

  const upload=(file:any)=>{
    context.uploadFile(file).then((txt:string)=>{
      const from=context.from.text;
      context.from.setTxt({...from,txt});
      callback();

    });
  };

  const download=()=>{
    const title=`translated-to-${context.to.language}.txt`;
    const content=`${context.to.text.txt}`;

    context.downloadFile(content,title);
  };

  useEffect(() => {
    context.translate().then(() => {
      setContext(context.clone());
    });

  }, [context.from.language, context.to.language, context.from.text.txt])

  return (
    <div className='font-sans'>
      <div className="container mx-auto max-w-full mt-5 flex flex-col gap-2.5 md:w-[1200px] md:mt-0 md:flex-row">
        <Card context={context.from} setContext={callback} callbackFooter={upload}/>
        <SwapCard swap={{ callback: swap }} setContext={callback} />
        <Card context={context.to} setContext={callback} callbackFooter={download}/>
      </div>
    </div>

  );
}

export default App;
