import React, { useEffect, useState } from 'react'
import Result, { IResult } from './Result'
import { SearchContext } from '../../context/SearchContext';
import {ReactComponent as BoxLogo} from '../../assets/icons/box.svg';

export interface IResults {
    query: string;
    results: IResult[];
}

function Results() {

    const { searchText, results } = React.useContext(SearchContext)

    const [query, setQuery] = useState(searchText)

    useEffect(() => {
        setQuery(searchText)
    },[results])

    return (
        <div className="py-3 mx-auto">
            {results.length > 0 ? 
                <>
                    <p className="fs-3 my-0">Showing {results.length} results for '{query}'</p>
                    <hr className='my-0' />
                    <div className="results-container d-flex flex-row justify-content-evenly flex-wrap">
                        {results.map((result: IResult) => <Result {...result} />)}
                    </div>
                </> 
                :<div className="text-center p-3 mt-3">
                    <p className="fs-3">Products are displayed here </p>
                    <BoxLogo width={80} height='auto' />
                </div>
            }
        </div>
    )
}

export default Results