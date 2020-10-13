import React from 'react'
import { useContext } from 'react'
import StrapiContext from '../../context/strapi/StrapiContext'
import Song from './Song'

const Songs = () => {
  const strapiContext = useContext(StrapiContext)
  const { songs } = strapiContext

  console.log('STRAPI SONGS')
  console.log(songs)

  return (
    <div className="row">
      {songs.map((song) => (
        <Song key={song._id} cancion={song} />
      ))}
    </div>
  )
}

export default Songs
