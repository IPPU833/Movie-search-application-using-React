import { useGlobalContext } from "../context/AppContext"

export default function Searchbar() {

  const {query, setQuery, isError} = useGlobalContext();

  return (
    <div className="search-section">
      <h2>Search You Favourite Movie</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" placeholder="Search Here"  value={query} onChange={(e) =>setQuery(e.target.value)}/>
        </div>
      </form>

      <div className="card-error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </div>
  )
}