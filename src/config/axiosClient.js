import axios from 'axios'

export const clienteDirectus = axios.create({
  baseURL: process.env.REACT_APP_DIRECTUS_URL,
})

export const clienteStrapi = axios.create({
  baseURL: process.env.REACT_APP_STRAPI_URL,
})
