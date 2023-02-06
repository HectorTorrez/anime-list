import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar"
import { getAnimes } from "./data/getAnimes";
export const AnimeList = () => {
  const [anime, setAnime] = useState([]);
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)


  
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
    .then(response => response.json())
    .then(res => {
        const { data } = res

        const animes = data.map(img => ({
            id: img.mal_id,
            title: img.title,
            img: img.images.jpg.image_url,
            url: img.url

        }))
        
        setAnime(animes)
        setIsLoading(false)
      })
    
      // getAnimes()


    }, [anime])
    
    const onChange = ({target}) => {
      setSearch(target.value)
  
    }
  
    const onSubmit = (event) => {
      event.preventDefault()
      if(search.trim().length <1 ) return
      setAnime([{
        id: search.id + 1,
        title: search.title
      }]) 
    }
  
  return (
    <>
    <Navbar/>
      
      <h2>AnimeList</h2>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={search} />
        <button>Search</button>
      </form>

      {isLoading && <p>...Loading</p>}
      {anime.length === 0 ? <p>No hay nada</p> : ''}
      <div>  
        {
          anime.map( anm => (
            
            <div key={anm.id}>
              <h1>{anm.title}</h1>
              <img src={anm.img} alt="" />
              <p>{anm.url}</p>
            </div>
            
          ))
        }
      </div>
    </>

  )
}
