/* eslint-disable react/prop-types */

const ImageViewer = ({ image }) => {
    const defaultImage = "./assets/0.png";
    return (
      <div className="fixed p-3 ">
        <img className="rounded-xl border " src={image || defaultImage} alt="Selected" />
      </div>
    );
  };
  
  export default ImageViewer;
  