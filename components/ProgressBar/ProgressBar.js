import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import {storage,db} from '../../firebase/index'
const ProgressBar = ({file,setFile}) => {

    const [progress,setProgress] = useState(0)
    const [error,setError] = useState(null)
    const [cancel,setCancel] = useState(false)
    const [url,setUrl] = useState(null)

    useEffect(() => {
        const collectionRef = collection(db,'images')
        const storageRef = ref(storage,file.name)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on('state_changed',(snap) => {
            let yuzdelik = (snap.bytesTransferred / snap.totalBytes ) * 100;
            if (!cancel){
                setProgress(yuzdelik)
            }
        },(err) => {
            if(!cancel){
                setError(err)
            }
        },() => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                if(!cancel){
                    setUrl(downloadURL)
                    if(url != null){
                        addDoc(collectionRef,{url:url,tarih:serverTimestamp()})
                    }
                }
            })
        })

        if(url){
            if(!cancel){
                setFile(null)
            }
        }

        return () => setError(true)

    },[url,setFile])

  return (
    <div className="progress-bar" style={{width:progress + '%'}}></div>
  )
}

export default ProgressBar