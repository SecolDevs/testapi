import React from 'react'
import './bootstrap.min.css'
import './style.css'
import Directus from './components/directus/Directus'
import Header from './components/Header'
import DirectusState from './context/directus/DirectusState'
import Strapi from './components/strapi/Strapi'
import StrapiState from './context/strapi/StrapiState'

function App() {
  return (
    <DirectusState>
      <StrapiState>
        <Header />
        <div className="row p-5">
          <div className="col-lg-12 mt-5">
            <h1 className="text-info text-center">DIRECTUS</h1>
            <Directus />
          </div>
          <div className="col-lg-12">
            <hr />
            <h1 className="text-success text-center">STRAPI</h1>
            <Strapi />
          </div>
        </div>
      </StrapiState>
    </DirectusState>
  )
}

export default App
