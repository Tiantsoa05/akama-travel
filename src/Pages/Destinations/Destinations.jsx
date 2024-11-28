import React from "react";
import ranomafana from "../../assets/ranomafana.jpg"
import andasibe from "../../assets/andasibe.jpg"
import ankarafantsika from "../../assets/ankarafantsika.jpg"
import ambalavao from "../../assets/ambalavao.jpeg"
import ambalavao2 from "../../assets/ambalavao2.jpg"
import baobab from "../../assets/baobab.jpg"
import './destinations.css'


const Destinations = ()=>{
    return (
        <div className="destinations container-fluid w-100 h-100 bg-lght p-5 rounded-lg d-flex flex-wrap justify-content-around mt-5 bg-dark"  style={{marginTop: "0px"}} id="destinations">
            <div className="card h-20 w-25 m-2">
                <img src={ranomafana} alt="Ranomafana" className="img-destination"/>
                <div className="card-body">
                    <h5 className="card-title">Ranomafana</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="card h-20 w-25 m-2">
                <img src={andasibe} alt="Andasibe" className="img-destination"/>
                <div className="card-body">
                    <h5 className="card-title">Andasibe</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="card h-20 w-25 m-2">
                <img src={ankarafantsika} alt="Ankarafantsika" className="img-destination"/>
                <div className="card-body">
                    <h5 className="card-title">Ankarafantsika</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="card h-20 w-25 m-2">
                <img src={ambalavao} alt="Ambalavao" className="img-destination"/>
                <div className="card-body">
                    <h5 className="card-title">Ambalavao</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="card h-20 w-25 m-2">
                <img src={ambalavao2} alt="Ambalavao" className="img-destination"/>
                <div className="card-body">
                    <h5 className="card-title">Ambalavao</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="card h-20 w-25 m-2">
                <img src={baobab} alt="Baobab" className="img-destination"/>
                <div className="card-body">
                    <h5 className="card-title">Allée de baobab</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Destinations