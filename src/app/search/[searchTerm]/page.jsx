import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

async function SearchPage({ params }) {
    const searchTerm = params.searchTerm;
    const URL = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`

      const response = await fetch(URL)

      const finalData = await response.json()
      const results = finalData.Search;
  return (
    <div>
        {results && 
        results.length === 
                <h1 className='text-center pt-6'>No results found</h1>
        }
        {results && <Results results={results} />}
    </div>
  );
}

export default SearchPage
