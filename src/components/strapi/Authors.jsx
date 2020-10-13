import React from 'react'
import { useContext } from 'react'
import StrapiContext from '../../context/strapi/StrapiContext'
import Author from './Author'

const Authors = () => {
  const strapiContext = useContext(StrapiContext)
  const { authors } = strapiContext

  console.log('STRAPI AUTHORS')
  console.log(authors)

  return (
    <div className="row">
      <div className="card-deck">
        {authors.map((author) => (
          <Author key={author._id} autor={author} />
        ))}
      </div>
    </div>
  )
}

export default Authors
