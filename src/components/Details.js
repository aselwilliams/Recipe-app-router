import React from 'react';
import {useParams} from 'react-router-dom'

function Details({recipeLabel}) {
   
  return (
    <div>
        <div>
            <img src={recipeLabel.recipe.image} alt={recipeLabel.recipe.label} />
        </div>
        <div>
            <p>{recipeLabel.recipe.label}</p>
        </div>
        <h5>Nutrients Facts</h5>
        <div>
            {recipeLabel.recipe.healthLabels.slice(0,10).map((item)=><p>{item}</p>)}
        </div>
    </div>
  )
}

export default Details