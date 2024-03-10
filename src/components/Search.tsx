import FindIcon from '../assets/icons/Find'

function Search() {
  return (
    <div className="relative w-full h-8 flex flex-row items-center border-neutral-500">
      <FindIcon width={20} height={20} fill="#F5F5F5" className="" />
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent text-sm text-neutral-100 pl-2 pr-8 focus:outline-none"
      />
      <button className="absolute text-neutral-100 top-0 bottom-0 right-0">
        Go
      </button>
    </div>
  )
}

export default Search
