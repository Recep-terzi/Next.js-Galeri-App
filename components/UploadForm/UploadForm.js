import React, { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'

const UploadForm = () => {
    const [file,setFile] = useState(null)
    const [error,setError] = useState(null)

    const tipListesi =['image/png','image/jpeg']


    const handleChange = (e) => {
        e.preventDefault();
        let secilen = e.target.files[0]
        if(secilen && tipListesi.includes(secilen.type)){
            setFile(secilen)
            setError(null)
        }
        else{
            setFile(null)
            setError('Lütfen png ya da jpeg/jpg uzantılı bir dosya seçiniz.')
        }
    }


  return (
    <form>
        <label>
        <input type="file" onChange={handleChange} ></input>
        <span> + </span>
        </label>
        <div className='output'>
            {error && <div className='error'>{error}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
    </form>
  )
}

export default UploadForm