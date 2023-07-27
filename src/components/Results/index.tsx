import React, { useEffect, useState } from 'react'
import Result, { IResult } from './Result'
import { SearchContext } from '../../context/SearchContext';
import { ReactComponent as BoxLogo } from '../../assets/icons/box.svg';

export interface IResults {
    query: string;
    results: IResult[];
}

const sortResults = (results: IResult[], field: string, order: string) => {

    if(field === '') return results;

    let _results: IResult[] = [];

    if (order === 'asc') {
        _results = results.sort((a: IResult, b: IResult) => (a[field as keyof IResult] > b[field as keyof IResult]) ? 1 : -1);
    } else {
        _results = results.sort((a: IResult, b: IResult) => (a[field as keyof IResult] > b[field as keyof IResult]) ? -1 : 1);
    }

    return _results;
}

function Results() {

    const { searchText, results, sortType } = React.useContext(SearchContext)

    const [query, setQuery] = useState(searchText)
    
    const _sortedResults = sortType === '-' ? results : sortResults(results, sortType.split('-')[0], sortType.split('-')[1])
    
    useEffect(() => {
        setQuery(searchText)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [results])
    
    return (
        <div className="py-3 mx-auto">
            {results.length > 0 ?
                <>
                    <p className="fs-5 my-0">Showing {results.length} results for '{query}'</p>
                    <hr className='my-0' />
                    <div className="results-container d-flex flex-row justify-content-evenly flex-wrap">
                        {_sortedResults.map((result: IResult) => <Result {...result} />)}
                    </div>
                </>
                : <div className="text-center p-3 mt-3">
                    <p className="fs-3">Products are displayed here </p>
                    <BoxLogo width={80} height='auto' />
                </div>
            }
        </div>
    )
}

export default Results