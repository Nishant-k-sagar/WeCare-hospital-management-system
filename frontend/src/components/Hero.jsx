import React from 'react'

const Hero = ({ title, imageUrl}) => {
  return (
    <div className='hero container'>
        <div className='banner'>
            <h1>{title}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum tenetur ab illum, praesentium inventore aliquam quibusdam fugit soluta dolor, perspiciatis pariatur excepturi iste asperiores molestiae! Libero non, voluptates nam voluptatum dolores consequatur dignissimos tempora porro adipisci sed ipsam delectus error ratione beatae eum corporis ex assumenda sapiente illum? Voluptate, natus!
            </p>
        </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" width="580"/>
        <span>
            <img src="/Vector.png" alt="vector"/>
        </span>
      </div>
    </div>
  )
}

export default Hero
