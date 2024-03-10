const API_KEY = process.env.API_KEY;

import Results from '@/components/Results';
import React from 'react'

async function Home({searchParams}) {

  const genre = searchParams.genre || 'a'
  // const res = await fetch(
  //   `http://www.omdbapi.com/?s=${genre}&apikey=${API_KEY}`
  // );
  // const data = await res.json();
  // if(!res.ok){
  //   throw new Error('Failed to fetch data');
  // }

  // const results = data.results;
  // console.log(results);
   

      const URL = `http://www.omdbapi.com/?s=${genre}&apikey=${API_KEY}`
      const response = await fetch(URL)
      const finalData = await response.json()
      const results = finalData.Search;
  

  return <div>
      <Results results={results} />
  </div>
}

export default Home