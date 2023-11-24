import { useState, useEffect } from 'react'
import img1 from '../../../assets/sekiro.jpg'
import img2 from '../../../assets/bloodborne.jpg'

const Picture = () => {

    const [ image, setImage] = useState(img1);

  return (
    <div>
        <img src={image} alt="pic" />
    </div>
  )
}

export default Picture
