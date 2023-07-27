import React, { useContext, useState } from 'react'
import Search from '../../components/Search'
import Results from '../../components/Results'
import { SearchContext } from '../../context/SearchContext'
import SearchServices from '../../api/services/search'
import { IResult } from '../../components/Results/Result'
import Filters from '../../components/Filter'

function Home() {
  const {searchText, setResults, results} = useContext(SearchContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const search = async() => {
    try{
        setIsLoading(true)
        const response = await SearchServices.search(searchText)
        const _results = response.data.response.results.map((item: any) => ({
          id: item.data.id,
          name: item.value,
          price: item.data.price,
          image: item.data.image_url,
          description: item.data.description          
        } as IResult))

        setResults(_results)
        setIsLoading(false)
    }catch(err: any){
        alert(err.message)
        console.log(`Error in fetching search results for ${searchText}: `,err)
    }
  }

  return (
    <div className="container">
      <Search onSearch={search} />
      {isLoading?
        <div className="text-center p-3">
          <p className="fs-5 my-3 fw-bold">Loading...</p>
        </div>
        :
        <>
          {results.length > 0 && <Filters />}
          <Results />
        </>
      }
    </div>
  )
}

export default Home