import React from 'react'

const Author = ({ autor }) => {
  const { name, cover, genre } = autor
  return (
    <div className="col-lg-6 col-md-6 mt-2">
      <div className="card rounded text-white bg-dark">
        <h3 className="card-header">{name}</h3>
        <img
          src={cover.data.full_url}
          loading="lazy"
          className="card-img-top"
          alt={name}
        />
        <div className="card-body">
          <div className="card-text">
            <h4 className="text-muted">{genre}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Author
