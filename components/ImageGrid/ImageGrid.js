import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import {motion} from "framer-motion"
const ImageGrid = ({setSelectImage}) => {

    const [docs,setDocs] = useState([])
    useEffect(() => {
        const ref = collection(db,'images')
        ref = query(ref,orderBy("tarih","desc"))
        onSnapshot(ref,snap => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(),id:doc.id})
            })
            setDocs(documents)
        })
    },[])

  return (
    <div className="img-grid">
        {
            docs && docs.map(doc => (
                <>
                    <motion.div className='img-wrap' key={doc.id}  onClick={() => setSelectImage(doc.url)} layout whileHover={{opacity:1}}>
                        <motion.img src={doc.url} alt="yüklenen resim" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}/>
                    </motion.div>
                </>
            ))
        }
    </div>
  )
}

export default ImageGrid