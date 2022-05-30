import React from 'react'
import { Helmet } from 'react-helmet'
import "../Landing/styleFeed.css"
import userPic from "../../assets/icons8-male_user.png"
import validUser from "../../assets/icons8-check_circle.png"
import BrainStrom from "../../assets/icons8-brainstorm_skill.png"
import WordIcon from "../../assets/icons8-word.png"
import ExcelIcon from "../../assets/icons8-microsoft_excel.png"
import Time from "../../assets/icons8-time.png"
import TechSupp from "../../assets/icons8-technical_support.png"
import JLMIco from "../../assets/logo_JLM_op.png"


const TITLE = 'Feed - JLM Opportunity'

function Feed() {
  return (

    <>
    <Helmet>
          <title>{ TITLE }</title>
    </Helmet>
   <div class="container">
    <div class="row">
        <div class="col-sm-3">
            <section id="userDetails">
                <img src={userPic}className="d-inline-block align-top"alt="User Icon"/>
                <h2>Utilisateur  <img src={validUser}className="d-inline-block align-top"alt="User Icon"/></h2> 
                <h6>Employé : <strong>Non</strong></h6>
                    <div id="buttonsList">
                    <button>Offres Enregistrés (5) </button>
                    <button>Formations Favorites (2)</button>
                    <button>Paramètres</button>
                    </div>
            </section>
        </div>

        <div class="col-sm-5"> 
            <section id="formationTab">
                <h1>Formations Disponibles : </h1>
                    <div class="Formation">
                        <div class="icon" >
                            <img src={BrainStrom}  alt="User Icon"/>
                        </div>
                        <h2>Cours BrainStorming</h2>
                        <h4>Durée : 1 Semaine (10 Heures)</h4>

                        <button>S'inscrire</button>

                    </div>
                    <div class="Formation">
                        <div class="icon" >
                            <img src={WordIcon}  alt="User Icon"/>
                        </div>
                        <h2>Fondamentaux De Microsoft Word</h2>
                        <h4>Durée : 4 Semaines (35 Heures)</h4>
                        <button>S'inscrire</button>

                    </div>
                    <div class="Formation">
                    <div class="icon" >
                            <img src={Time}  alt="User Icon"/>
                        </div>
                        <h2>Gestion Du Temps</h2>
                        <h4>Durée : 1 Semaine (15 Heures)</h4>
                        <button>S'inscrire</button>
                    </div>
                    <div class="Formation">
                    <div class="icon" >
                            <img src={TechSupp}  alt="User Icon"/>
                        </div>
                        <h2>Comment Convaincre Un Client ?</h2>
                        <h4>Durée : 3 Semaines (25 Heures)</h4>
                        <button>S'inscrire</button>

                    
                    </div>
                    <div class="Formation">
                        <div class="icon" >
                                <img src={ExcelIcon}  alt="User Icon"/>
                            </div>
                            <h2>Premier Pas Sur Excel</h2>
                            <h4>Durée : 4 Semaines (30 Heures)</h4>
                            <button>S'inscrire</button>
                    </div>
                    
            </section>
        </div>

        <div class="col-sm-3">
            <section id="pointTab">
                <h2>Points</h2>
                <input  id="range" type="range" value="70"/>
                <h4> 1700 / 2200 </h4>
                <br/>
                <div id="goals">
                <br/>
                    <h2>Buts : </h2>
                    <ul>
                        <li>1000 Points : Compte Validé</li>
                        <li>5000 Points : Visibilité Étendue</li>
                        <li>10000 Points :  Accès A Une Formation Payante Gratuitement</li>
                    </ul>
                    
                </div>
                
            </section>
            <span>JLM Opportunity 2022 </span>
            <br/>
            <span>Powered By : </span>
                    <br/>
                    <img src={JLMIco} width="60"className="d-inline-block align-top"alt="User Icon"/>

        </div>
    </div>
</div>







</>

    )
}

export default Feed