import React, { useState } from 'react'
import { IResult } from '../components/Results/Result';

export interface ISearchContext {
    searchText: string;
    results: IResult[];
    sortType: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    setResults: React.Dispatch<React.SetStateAction<IResult[]>>;
    setSortType: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = React.createContext<ISearchContext>({
    searchText: '',
    results: [],
    sortType: '',
    setSearchText: () => {},
    setResults: () => {},
    setSortType: () => {}
})

function SearchProvider(props: any) {

    const [searchText, setSearchText] = useState<string>('')
    const [results, setResults] = useState<IResult[]>([])
    const [sortType, setSortType] = useState<string>('')

    return (
        <SearchContext.Provider value={{ searchText, setSearchText, results, setResults, sortType, setSortType }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchProvider