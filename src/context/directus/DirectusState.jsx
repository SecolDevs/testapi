import React, { useReducer } from 'react'
import { clienteDirectus } from '../../config/axiosClient'
import DirectusContext from './DirectusContext'
import DirectusReducer from './DirectusReducer'
import { DIRECTUS_GET_DATA } from '../../types'

const DirectusState = (props) => {
  const initialState = {
    authors: null,
    songs: null,
    loading: true,
  }

  const [state, dispatch] = useReducer(DirectusReducer, initialState)

  const getData = async () => {
    try {
      const [songs, authors] = await Promise.all([
        clienteDirectus.get('/items/song?fields=*.*.*'),
        clienteDirectus.get('/items/author?fields=*.*'),
      ])
      const data = {
        songs: songs.data.data,
        authors: authors.data.data,
      }

      dispatch({
        type: DIRECTUS_GET_DATA,
        payload: data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <DirectusContext.Provider
      value={{
        authors: state.authors,
        songs: state.songs,
        loading: state.loading,
        getData,
      }}
    >
      {props.children}
    </DirectusContext.Provider>
  )
}

export default DirectusState
