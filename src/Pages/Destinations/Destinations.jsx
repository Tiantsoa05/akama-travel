import React from "react";
import './destinations.css'
import { data } from "../../data/data";
import { useTranslation } from "react-i18next";


const Destinations = ()=>{
    const {t,i18n} = useTranslation()
    const act = t('actualLanguage')
    return <div id="destinations" className="destinations">
        <h3 className="text-center mt-5">Destinations</h3>
        <div className="container-fluid w-100 h-100 p-5 rounded-lg d-flex flex-wrap justify-content-around"  style={{marginTop: "0px"}}>
            {
                data.map((lieu,index)=>{
                    const desc = lieu.description.find(d=>d.translate === act)
                    return <div className="card h-20 w-25 m-2">
                        <img src={`/images/${lieu.image}`} alt={lieu.city} className="img-destination"/>
                        <div className="card-body">
                            <h5 className="card-title">{lieu.city} <p>{`${lieu.ville} - ${lieu.province}`}</p></h5>
                            <p className="card-text">{desc.content}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Destinations