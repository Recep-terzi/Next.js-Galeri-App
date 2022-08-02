import React from 'react'
import {motion} from "framer-motion"
const Modal = ({selectImage,setSelectImage}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectImage(null)
        }
    }

  return (
    <motion.div className='backdrop' onClick={handleClick} initial={{opacity:0}} animate={{opacity:1}}>
        <motion.img src={selectImage} alt="resim" initial={{y:"-100vh"}} animate={{y:"0"}}/>
    </motion.div>
  )
}

export default Modal