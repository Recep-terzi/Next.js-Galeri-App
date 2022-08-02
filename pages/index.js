import { useState } from "react";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import Modal from "../components/Modal/Modal";
import Title from "../components/Title/Title";
import UploadForm from "../components/UploadForm/UploadForm";

export default function Home() {

  const [selectImage,setSelectImage] = useState(null)

  return <div className="App">
    <Title />
    <UploadForm />
    <ImageGrid setSelectImage={setSelectImage} />
    {
      selectImage && <Modal selectImage={selectImage} setSelectImage={setSelectImage} />
    }
  </div>;
}
