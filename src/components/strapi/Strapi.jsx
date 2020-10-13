import React, { useContext } from 'react'
import { useEffect } from 'react'
import StrapiContext from '../../context/strapi/StrapiContext'
import Authors from '../strapi/Authors'
import Songs from '../strapi/Songs'
import Loader from '../Loader'

const Strapi = () => {
  const strapiContext = useContext(StrapiContext)
  const { loading, getData } = strapiContext

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="row text-center">
      <div className="col-lg-6">
        <h2>Autores</h2>
        {loading ? <Loader /> : <Authors />}
      </div>
      <div className="col-lg-6">
        <h2>Canciones</h2>
        {loading ? <Loader /> : <Songs />}
      </div>
    </div>
  )
}

export default Strapi
