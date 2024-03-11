import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {

      const genre = searchParams.genre || 'hollywood'
      const URL = `http://www.omdbapi.com/?s=${genre}&apikey=${API_KEY}`
      const response = await fetch(URL, { next: { revalidate: 10000 } })
      const finalData = await response.json()
      if(!response.ok){
        throw new Error('Failed to fetch data');
      }
      const results = finalData.Search;
  
  return( <div>
      <Results results={results} />
  </div>
  );
}
