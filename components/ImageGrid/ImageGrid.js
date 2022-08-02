import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'

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
                    <div className='img-wrap' key={doc.id}  onClick={() => setSelectImage(doc.url)}>
                        <img src={doc.url} alt="yüklenen resim" />
                    </div>
                </>
            ))
        }
    </div>
  )
}

export default ImageGrid