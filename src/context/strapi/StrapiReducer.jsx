import { STRAPI_GET_DATA } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case STRAPI_GET_DATA:
      return {
        ...state,
        authors: action.payload.authors,
        songs: action.payload.songs,
        loading: false,
      }
    default:
      return state
  }
}
