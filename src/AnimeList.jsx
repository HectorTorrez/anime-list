import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Form } from "./components/Form";


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
    
      
      // setAnime(animes)

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
      isLoading(false)
    }
  
  return (
    <div className="app">
      
      <h1>AnimeList</h1>
      <Form onSubmit={onSubmit} onChange={onChange} search={search}/>
      {isLoading && <p>...Loading</p>}
      {anime.length === 0 ? <p>No hay nada</p> : ''}
      <div className="body-card">  
        {
          anime.map( anm => (
           <Card anm={anm} isLoading={isLoading}/>
            
          ))
        }
      </div>
    </div>

  )
}
