import React from 'react'

const MyVideo = () => {
  return (
    <video width="1200" height="720" controls autoPlay loop muted>
    <source src="myvidio.mp4" type="video/mp4" />
  </video>
  )
}

export default MyVideo