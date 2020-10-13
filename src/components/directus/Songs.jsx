import React, { useContext } from 'react'
import DirectusContext from '../../context/directus/DirectusContext'
import Song from './Song'

const Songs = () => {
  const directusContext = useContext(DirectusContext)
  const { songs } = directusContext
  console.log('DIRECTUS SONGS')
  console.log(songs)

  return (
    <div className="row">
      {songs.map((song) => (
        <Song key={song.id} cancion={song} />
      ))}
    </div>
  )
}

export default Songs
