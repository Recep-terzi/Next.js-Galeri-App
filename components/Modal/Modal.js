import React from 'react'

const Modal = ({selectImage,setSelectImage}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectImage(null)
        }
    }

  return (
    <div className='backdrop' onClick={handleClick}>
        <img src={selectImage} alt="resim"/>
    </div>
  )
}

export default Modal