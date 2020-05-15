import React from 'react'

export default function SearchBar(props) {

  const { updateSearchTerm } = props

  const changeHandler = event => {
    updateSearchTerm(event.target.value)
  }

  return (
    <div className="searchCara">
    <input type="text"
    placeholder="Search" onChange={changeHandler}/>
    </div>
  )
}
