
export const Form = ({onSubmit, onChange, search}) => {
  return (
    <>
     <form className="form" onSubmit={onSubmit}>
        <input className="form-input" type="text" placeholder="Search Anime" onChange={onChange} value={search} />
        <button className="btn-search">Search</button>
      </form>
    </>
  )
}
