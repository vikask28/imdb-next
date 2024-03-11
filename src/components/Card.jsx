export default function Card({ result }) {
  return (
    <div className='group cursor-pointer hover:shadow-slate-400 shadow-md rounded-lg border sm:border-slate-400 sm:m-2 transition-shadow duration-200 overflow-hidden '>
        <img
        className='w-60'
        src={`${result.Poster}`}
        alt='Image not found'
        >
        </img>
        <h1 className='pl-2 pt-4 pb-2 w-56'>{result.Title}</h1>
        <h1 className='pl-2 pb-4'>{result.Year}</h1>
    </div>
  )
}
