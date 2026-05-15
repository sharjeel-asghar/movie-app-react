import MovieCard from "../components/MovieCard"

// @ts-nocheck
function Home (){
  const movies = [ 
   {id:1,title:"jhon Wick", release_date:"2020"},
   {id:2,title:"Termintor", release_date:"2022"},
   {id:3,title:"The Matrix", release_date:"2019"},
  ]
  const handleSearch  = () => {
  
  }
  return (
    <div className='home'>
      <form onSubmit={handleSearch} className="search-name">
        <input type="text" placeholder="Search for movies" className="search-input" />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map(movie =>( 
          <MovieCard movie={movie}  key={movie.id}/>
        ))}
      </div>
    </div>
  )
}

export default Home