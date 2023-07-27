const BASE_URL = 'https://ac.cnstrc.com'
const SORT_TYPES = [
    {
        name: 'Relevance',
        field: '',
        order: ''
    },
    {
        name: 'Name',
        field: 'name',
        order: 'asc'
    },
    {
        name: 'Price - Lowest to Highest',
        field: 'price',
        order: 'asc'
    },
    {
        name: 'Price - Highest to Lowest',
        field: 'price',
        order: 'desc'
    }
]

const Constants = {
    BASE_URL,
    SORT_TYPES
}

export default Constants;
