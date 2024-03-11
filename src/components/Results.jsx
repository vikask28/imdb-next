
import Card from './Card'

export default function Results({results}) {
  return (
    <div className='grid place-items-center xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-content-center gap-2 max-w-6xl mx-auto my-6' >
        {
          results.map((result)=>(
          <Card key={result.imdbID} result={result}/>
          ))
        }
    </div>
  )
}
