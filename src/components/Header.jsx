import React from 'react'
import { useContext } from 'react'
import DirectusContext from '../context/directus/DirectusContext'
import StrapiContext from '../context/strapi/StrapiContext'
import Growing from './Growing'
import Loader from './Loader'

const Header = () => {
  const strapiContext = useContext(StrapiContext)
  const directusContext = useContext(DirectusContext)

  const loadingD = directusContext.loading
  const loadingS = strapiContext.loading
  return (
    <div className="vw-100 card bg-primary p-3 fixed-top">
      <h1 className="text-center text-white">
        {loadingD ? (
          <Loader color="text-info" />
        ) : (
          <Growing color="text-info" />
        )}
        TEST API'S
        {loadingS ? (
          <Loader color="text-success" />
        ) : (
          <Growing color="text-success" />
        )}
      </h1>
    </div>
  )
}

export default Header
