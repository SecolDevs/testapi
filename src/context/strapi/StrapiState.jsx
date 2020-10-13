import React, { useReducer } from 'react'
import { clienteStrapi } from '../../config/axiosClient'
import StrapiContext from './StrapiContext'
import StrapiReducer from './StrapiReducer'
import { STRAPI_GET_DATA } from '../../types'

const StrapiState = (props) => {
  const initialState = {
    authors: null,
    songs: null,
    loading: true,
  }

  const [state, dispatch] = useReducer(StrapiReducer, initialState)

  const getData = async () => {
    try {
      const [songs, authors] = await Promise.all([
        clienteStrapi.get('/songs'),
        clienteStrapi.get('/authors'),
      ])
      const data = {
        songs: songs.data,
        authors: authors.data,
      }

      dispatch({
        type: STRAPI_GET_DATA,
        payload: data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <StrapiContext.Provider
      value={{
        authors: state.authors,
        songs: state.songs,
        loading: state.loading,
        getData,
      }}
    >
      {props.children}
    </StrapiContext.Provider>
  )
}

export default StrapiState
