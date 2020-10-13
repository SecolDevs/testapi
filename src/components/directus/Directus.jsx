import React, { useContext, useEffect } from 'react'
import DirectusContext from '../../context/directus/DirectusContext'
import Loader from '../Loader'
import Authors from './Authors'
import Songs from './Songs'

const Directus = () => {
  const directusState = useContext(DirectusContext)
  const { loading, getData } = directusState

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="row text-center">
      <div className="col-lg-6">
        <h2>Canciones</h2>
        {loading ? <Loader /> : <Songs />}
      </div>
      <div className="col-lg-6">
        <h2>Autores</h2>
        {loading ? <Loader /> : <Authors />}
      </div>
    </div>
  )
}

export default Directus
