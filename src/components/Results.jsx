import React from 'react'

function Results({results}) {
  return (
    <div>
        {
          results.map((result)=>(
            
                <div key={result.imdbID}>
                    <h2>{result.Title}</h2>
                    <img src={result.Poster} alt="" />
                </div>
          ))
        }
    </div>
  )
}

export default Results