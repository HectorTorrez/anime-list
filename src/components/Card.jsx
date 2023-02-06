
export const Card = ({anm}) => {
  return (
    
        <div className="card" key={anm.id}>
            <a className="card-body" href={anm.url} target="_blank">
            <h2 className="card-title">{anm.title}</h2>
            <div className="card-img">
                <img src={anm.img} alt={anm.title} />
            </div>
            </a>

        </div>

  )
}
