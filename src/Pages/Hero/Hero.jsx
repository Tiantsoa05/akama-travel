import React from "react";
import { useTranslation } from 'react-i18next';

export default function Hero(){
    
    const { t, i18n } = useTranslation();

    return <div className="hero row" >
        <div className="land_desc col-xs-12 col-6" id='home'>
        <h2 className='titre text-center'>Akama Travel</h2>
        </div>
        <div className="container land col-xs-12 col-6" >
        <p className='text-description'> {t('slogan')} <br />
            {t('obj')}
        </p>
        </div>
  </div>
}