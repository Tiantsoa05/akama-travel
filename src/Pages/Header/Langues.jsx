import React from "react";
import { useTranslation } from 'react-i18next';
import { languages } from "../../variables/languages";

export default function Langues ({setLanguage,disappear}){
    const { t, i18n } = useTranslation();
    return <div className="exit_lng" onClick={()=>disappear()}>
        <div className="buttons_lng">
            {
                languages.map(l=>{
                    return <div onClick={()=>setLanguage(l)} key={l}>{t(l.toString())}</div>
                })
            }
        </div>
    </div>
}