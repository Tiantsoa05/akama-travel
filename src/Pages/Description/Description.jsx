import React from "react";
import Swipper from "../../components/Swipper/Swipper";
import { useTranslation } from "react-i18next";

export default function Description(){

    const {t, i18n} = useTranslation()

    return <div className="description container-fluid" id="about">
        <h3 className="text-center">{t('about')}</h3>
        <Swipper/>
        <div className="row container-fluid gap-5 desc-details">
            <div className="col-xs-12 col-3">
                <h5>{t('titre_missions')}</h5>
                <p>
                    {t('missions')}
                </p>
            </div>
            <div className="col-xs-12 col-3">
                <h5>{t('titre_obj')}</h5>
                <p>{t('objectifs')}</p>
            </div>
            <div className="col-xs-12 col-3">
                <h5>{t('titre_part')}</h5>
                <p>{t('particularites')}</p>
            </div>
            <div className="col-xs-12 col-3">
                <h5>{t('titre_visions')}</h5>
                <p>{t('visions')}</p>
            </div>
        </div>
    </div>
}