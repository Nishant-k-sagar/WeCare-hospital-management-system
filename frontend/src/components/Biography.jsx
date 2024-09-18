import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
        <div className='"banner'>
            <img src={imageUrl} alt='about image' width="580" object-fit="cover"/>
        </div>
    <div className="banner">
        <p>Biography
        </p>
        <h3>Who we Are</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quam ipsam maxime ea beatae nihil magnam quis accusantium consequuntur esse est ullam mollitia facilis. Rem, suscipit, blanditiis corporis reiciendis a incidunt beatae doloremque nulla natus sunt est repellat ullam repellendus accusamus voluptatibus iste doloribus. Id eius repellat et accusantium nulla.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, porro reiciendis et repellendus id numquam qui in sequi ad est exercitationem libero mollitia non laudantium debitis dolores rem accusamus illum voluptate perspiciatis voluptas explicabo quasi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequatur nisi dolores.</p>
        <p>Lorem, ipsum dolor.</p>
    </div> 
    </div>
  )
}

export default Biography
