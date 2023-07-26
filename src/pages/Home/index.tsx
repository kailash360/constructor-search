import React, { useContext, useState } from 'react'
import Search from '../../components/Search'
import Results from '../../components/Results'
import { SearchContext } from '../../context/SearchContext'
import SearchServices from '../../api/services/search'
import { IResult } from '../../components/Results/Result'

function Home() {
  const {searchText, setResults} = useContext(SearchContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const search = async() => {
    try{
        setIsLoading(true)
        const response = await SearchServices.search(searchText)
        const _results = response.data.response.results.map((item: any) => ({
          id: item.data.id,
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
        :<Results />
      }
    </div>
  )
}

export default Home