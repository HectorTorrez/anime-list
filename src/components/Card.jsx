
export const Card = ({anm, isLoading}) => {
  return (
    
        <div className={`${isLoading ? 'none' : 'card'}`} key={anm.id}>
            <a className="card-body" href={anm.url} target="_blank">
            <h2 className="card-title">{anm.title}</h2>
            <div className="card-img">
                <img src={anm.img} alt={anm.title} />
            </div>
            <p className="card-url">{anm.url}</p>
            </a>

        </div>

  )
}
