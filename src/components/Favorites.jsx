import React from 'react'
import useGlobalContext from '../GlobalContext'

const Favorites = () => {
  const { addToFavorites, removeFromFavorites } = useGlobalContext()

  return (
    <div>Favorites</div>
  )
}

export default Favorites