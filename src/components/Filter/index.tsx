import React, { useContext } from 'react';
import Constants from '../../Constants';
import { SearchContext } from '../../context/SearchContext';

function Filters() {
    const { setSortType } = useContext(SearchContext)

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSortType(e.target.value)

    return (
        <div className="filter py-2">
            <div className="filter-sort mx-auto">
                <p className="">Sort by {' '}
                    <select name="sort" id="" onChange={handleSortChange}>
                        {Constants.SORT_TYPES.map((type: any) => <option value={`${type.field}-${type.order}`}>{type.name}</option>)}
                    </select>
                </p>
            </div>
        </div>
    )
}

export default Filters