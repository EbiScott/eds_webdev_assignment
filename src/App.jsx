import { useState } from 'react';
import ButtonList from './components/ButtonList';
import ImageViewer from './components/ImageViewer';

const App = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const buttons = ['Cloth 1', 'Cloth 2', 'Cloth 3', 'Cloth 4', 'Cloth 5', 'Cloth 6', 'Cloth 7', 'Cloth 8', 'Cloth 9', 'Cloth 10', 'Cloth 11', 'Cloth 12', 'Cloth 13', 'Cloth 14', 'Cloth 15', 'Cloth 16'];

  const handleButtonClick = (index) => {
    console.log('Button clicked. Index:', index);
    setSelectedImageIndex(index);
  };

  const images = [
    '../assets/1.PNG',
    '../assets/2.PNG',
    '../assets/3.PNG',
    '../assets/4.png',
    '../assets/5.png',
    '../assets/6.png',
    '../assets/7.png',
    '../assets/8.png',
    '../assets/9.png',
    '../assets/10.png',
    '../assets/1a.png',
    '../assets/2a.png',
    '../assets/3a.png',
    '../assets/4a.png',
    '../assets/5a.png',
    '../assets/6a.png',
  ]; 

  const imageSub = [
    '../assets/11.png',
    '../assets/22.png',
    '../assets/33.png',
    '../assets/44.png',
    '../assets/55.png',
    '../assets/66.png',
    '../assets/77.png',
    '../assets/88.png',
    '../assets/99.png',
    '../assets/100.png',
    '../assets/11a.png',
    '../assets/22a.png',
    '../assets/33a.png',
    '../assets/44a.png',
    '../assets/55a.png',
    '../assets/66a.png',
  ]; 

  return (
    <div className="flex ">
    <div className="w-1/3 h-screen overflow-y-auto">
      <ImageViewer image={images[selectedImageIndex]} />
    </div>
    <div className="w-2/3 p-4 overflow-y-auto">
      <ButtonList image={imageSub} buttons={buttons} onButtonClick={handleButtonClick} />
    </div>
  </div>
  );
};

export default App;