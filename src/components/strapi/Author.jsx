import React from 'react'

const Author = ({ autor }) => {
  const { Name, Cover, Genre } = autor
  const url = `https://strapiapi-heroku.herokuapp.com${Cover.url}`

  return (
    <div className="col-lg-6 col-md-6 mt-2">
      <div className="card rounded text-white bg-dark">
        <h3 className="card-header">{Name}</h3>
        <img src={url} loading="lazy" className="card-img-top" alt={Name} />
        <div className="card-body">
          <div className="card-text">
            <h4 className="text-muted">{Genre}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Author
