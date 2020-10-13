import React from 'react'

const Song = (cancion) => {
  const { Name, author } = cancion.cancion

  return (
    <div className="col-lg-10 mt-2 card shadow border-dark rounded">
      <h3 className="text-success">
        {Name} - <span>{author.Name}</span>
      </h3>
    </div>
  )
}

export default Song
