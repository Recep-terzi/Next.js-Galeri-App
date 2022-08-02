import ImageGrid from "../components/ImageGrid/ImageGrid";
import Title from "../components/Title/Title";
import UploadForm from "../components/UploadForm/UploadForm";

export default function Home() {
  return <div className="App">
    <Title />
    <UploadForm />
    <ImageGrid />
  </div>;
}
