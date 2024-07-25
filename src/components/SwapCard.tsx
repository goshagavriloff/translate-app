import IonIcon from '@reacticons/ionicons'
import React, { MouseEventHandler } from 'react'
import { SwapProps } from '../types/Card'

const SwapCard = (props:{swap:SwapProps,setContext:Function}) => {
  const {swap,setContext}=props;
  const {callback}=swap;

  const handleClick = () => {
    callback();
    setContext();
  }
  
  return (
    <div className="relative" onClick={handleClick}>
    <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 flex items-center justify-center md:-translate-x-2/4 md:left-2/4 top-[30px] w-[50px] h-[50px] cursor-pointer border-primary-bg transition-all duration-[0.3s] ease-in text-primary-text bg-primary rounded-[50%] border-[5px] border-solid hover:-translate-x-2/4 hover:scale-110">
      <IonIcon name="swap-horizontal-outline" className='rotate-90 md:rotate-0 text-[25px]'></IonIcon>
    </div>
  </div>
  )
}

export default SwapCard