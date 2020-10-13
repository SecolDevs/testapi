import { DIRECTUS_GET_DATA } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case DIRECTUS_GET_DATA:
      return {
        ...state,
        songs: action.payload.songs,
        authors: action.payload.authors,
        loading: false,
      }
    default:
      return state
  }
}
