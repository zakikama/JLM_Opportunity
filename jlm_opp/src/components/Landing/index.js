import React from 'react'
import "../Landing/style.css"
import img1 from "../../assets/cover-1.png"
import img2 from "../../assets/pic001.png"
import img3 from "../../assets/pic002.png"
import { Icon } from 'semantic-ui-react'


function Landing() {
  return (
      <div>
    <section class="Parent01">
    <div class="child1">
    <h1 className='slogan'>
          Votre portail vers un avenir plus brillant
      </h1>
      <h3 className='slogan00'>
      L’insertion professionnels  n’a jamais etait aussi facile
      </h3>
      <button className='btn1'>
        Learn more
    </button>
    </div>
    <div class="child2">
    <img
        src={img1}
        width="601"
        height="438"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </div>
</section>
<section class="Parent01">
    <div class="child">
    <img
        src={img2}
        width="601"
        height="438"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </div>
    <div class="child3">
    <p className='small_header'>
      <Icon fitted name='circle' />
        <span className='ml-1' style={{marginLeft:'10px'}}>
        Qui sommes-nous ?</span></p>
      <h2  className='slogan_header'>
      JLM Opportunity est une plateforme numérique 
      </h2>
      <h3 className='slogan00'>
      qui a pour but d’offrir des formations en ligne et certifications
       en plus d’une section de recrutement dédiée aux offres de travail
        selon les profils de l’utilisateurs et facilite l’insertion 
        professionnelles des jeunes non diplômés.</h3>
    </div>
</section>
<section  class="Parent01">
<div class="child1">
<p className='small_header'>
      <Icon fitted name='circle' />
        <span className='ml-1' style={{marginLeft:'10px'}}>
        Notre but ?</span></p>
      <h2  className='slogan_header'>
      Développer l’esprit entrepreneurial et de solidarité chez les jeunes</h2>
      <h3 className='slogan00'>
      Faire des jeunes marocains des acteurs majeurs dans l’amélioration du niveau de vie des 
      populations en situation précaire et dans le développement socioéconomique du Maroc.</h3>
    </div>
    <div class="child2">
    <img
        src={img3}
        width="601"
        height="438"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </div>
</section>
      </div>

  )
}

export default Landing