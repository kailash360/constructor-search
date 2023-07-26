import apiCall from "../config";

const SearchServices = {
    search: async (searchText: string) => await apiCall(`/search/${searchText}`)
}

export default SearchServices