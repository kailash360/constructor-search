import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import {ReactComponent as SearchLogo} from '../../assets/icons/search.svg';

export interface ISearch {
    onSearch: () => Promise<void>;
}

function Search(props: ISearch) {
    const { setSearchText } = useContext(SearchContext)

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => setSearchText(e.target.value)

    return (
        <div className="search row gx-1 w-75 align-items-center mx-auto">
            <div className="input-wrapper col-10 my-1">
                <input type="text" className='w-100  rounded p-2' onChange={handleSearchChange} placeholder='Enter your query here...' />
            </div>
            <button className="col-2 rounded p-2 text-white bg-primary" type='button' onClick={props.onSearch}>Search &nbsp; <SearchLogo className='fw-bold'/> </button>
        </div>
    )
}

export default Search