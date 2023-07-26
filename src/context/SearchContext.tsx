import React, { SetStateAction, useState } from 'react'
import { IResult } from '../components/Results/Result';

export interface ISearchContext {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    results: IResult[];
    setResults: React.Dispatch<React.SetStateAction<IResult[]>>;
}

export const SearchContext = React.createContext<ISearchContext>({
    searchText: '',
    setSearchText: () => {},
    results: [],
    setResults: () => {}
})

function SearchProvider(props: any) {

    const [searchText, setSearchText] = useState<string>('')
    const [results, setResults] = useState<IResult[]>([])

    return (
        <SearchContext.Provider value={{ searchText, setSearchText, results, setResults }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchProvider