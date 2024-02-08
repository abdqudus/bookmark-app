import React from 'react'
import useStoreContext from '../custom Hooks/useStoreContext'
import useGetEntries from '../custom Hooks/useGetEntries'
import SearchResultEntries from './SearchResultEntries'
import Empty from './Empty'

const SearchResult = () => {
    const { input } = useStoreContext()
    const { entries } = useGetEntries()

    const val = entries.filter(e => input.trim() && e.name.includes(input))

    if (val.length == 0) {
        return <Empty header="No results found" par='There are no bookmarks that match your search' />
    }
    return (
        <div className='py-4 bg-white rounded-lg'>
            <SearchResultEntries val={val} />
        </div>
    )
}

export default SearchResult
