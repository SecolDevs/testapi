import React, { useContext } from 'react'
import DirectusContext from '../../context/directus/DirectusContext'
import Author from './Author'

const Authors = () => {
  const directusContext = useContext(DirectusContext)
  const { authors } = directusContext

  return (
    <div className="row">
      <div className="card-deck">
        {authors.map((author) => (
          <Author key={author.id} autor={author} />
        ))}
      </div>
    </div>
  )
}

export default Authors
