import React, { useState } from 'react'

const SearchPanel = () => {
    const [searchParam, setSearchParam] = useState('')

    const searchBooks = (e) => {
        e.preventDefault()
        console.log(searchParam)
    }

    return (
        <div className="search-panel">
            <header>
                <h1 className="headline">Book Finder</h1>
                <p className="search-tip">
                    Just type below a title, an author or ISBN
                </p>
            </header>
            <form className="search-form" onSubmit={searchBooks}>
                <label htmlFor="search">
                    <input
                        id="search"
                        type="text"
                        onChange={(e) => setSearchParam(e.target.value)}
                        onBlur={(e) => setSearchParam(e.target.value)}
                    />
                    <input type="submit" value="Search" />
                </label>
            </form>
        </div>
    )
}

export default SearchPanel
