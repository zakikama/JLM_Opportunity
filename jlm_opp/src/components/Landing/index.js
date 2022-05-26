import React from 'react'
import "../Landing/style.css"
import img1 from "../../assets/cover-1.png"
import img2 from "../../assets/pic001.png"

function Landing() {
  return (
      <div>
              <div class="Parent01">
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
</div>
<div class="Parent01">
    <div class="child1">
      <h3 className='slogan00'>
      qui a pour but d’offrir des formations en ligne et certifications en plus d’une section de recrutement dédiée aux offres de travail selon les profils de l’utilisateurs et facilite l’insertion professionnelles des jeunes non diplômés.       </h3>
    </div>
    <div class="child2">
    <img
        src={img2}
        width="601"
        height="438"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </div>
</div>
      </div>

  )
}

export default Landing