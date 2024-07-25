import React, {useState } from 'react'
import IonIcon from '@reacticons/ionicons';
import { HeaderProps } from '../../types/Card';


import classNames from 'classnames';
import { LanguageCode, LanguageDescr } from '../../types/Language';


const HeaderCard = (props: {context:HeaderProps,langId:LanguageCode,setLangId:Function,alphathet:{[key in LanguageCode]:LanguageDescr}}) => {


  const {context,langId,setLangId,alphathet}=props;
  const { title } = context;

  const [isOpen, setOpen] = useState(false);

  const handleClick = (e:any) => {
    const target = e.target as HTMLElement;
    const value= target.dataset['value'] as LanguageCode||"auto";
    
    setLangId(value);
    handleDropDown();
  }

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const headerClasses = classNames({
    'flex flex-col md:flex-row md:items-center md:gap-5 md:mr-5': title === 'From',
    'flex flex-col md:flex-row md:items-center md:gap-5 md:ml-5': title === 'To',
  });

  const ulClasses = classNames({
    'absolute w-full h-[300px] overflow-auto z-10 flex-col bg-primary-bg transition-all duration-1000 p-5 rounded-[0_0_20px_20px] left-0 top-full list-none hidden': !isOpen,
    'absolute w-full h-[300px] overflow-auto z-10 flex-col bg-primary-bg transition-all duration-1000 p-5 rounded-[0_0_20px_20px] left-0 top-full list-none flex flex-col': isOpen
  });

  const liClasses = 'cursor-pointer border-b-light transition-all duration-[0.3s] ease-in mb-[5px] px-5 py-2.5 rounded-[20px] border-b border-solid hover:bg-light';

  const toggleClasses = classNames({
    'flex items-center px-5 py-4 rounded-[30px] bg-primary-bg cursor-pointer transition-all duration-300': !isOpen,
    'flex items-center px-5 py-4 rounded-[30px] bg-primary-bg cursor-pointer transition-all duration-300 rounded-[20px_20px_0_0]': isOpen
  });

  const ionicClasses = classNames({
    'rotate-180': isOpen
  });

  return (
    <div className={headerClasses}>
      <span className="text-sm text-light-text font-semibold whitespace-nowrap">{title}:</span>
      <div className="relative mb-2.5 w-full">

        <div className={toggleClasses} onClick={handleDropDown}>
          <IonIcon name="globe-outline" className='text-xl transition-transform' />
          <span className="flex-1 ml-2.5" data-value={langId}>{alphathet[langId]?.name}</span>
          <IonIcon name="chevron-down-outline" className={ionicClasses} />
        </div>

        <ul className={ulClasses}>
          {
            Object.entries(alphathet).map(([key, descr]) => {
              const { name, native } = descr;
              return (
                <li key={key} className={liClasses} data-value={key} onClick={handleClick} >{name} ({native})</li>
              )
            })
          }


        </ul>
      </div>

    </div>
  )
}

export default HeaderCard