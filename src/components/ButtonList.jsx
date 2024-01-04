/* eslint-disable react/prop-types */

const ButtonList = ({ image , buttons, onButtonClick }) => {
    return (
      <div className="grid py-10 grid-cols-1 lg:grid-cols-3 gap-y-10 h-full ">
        {buttons.map((button, index) => (
          <button className="w-[300px] duration-200 hover:scale-110  h-[500px] p-3  bg-pink-100 hover:bg-pink-200 rounded-md  border border-gray-100" key={index} onClick={() => onButtonClick(index)}>
          <img className="rounded-xl " src={image[index]} alt="" />
            <span className="font-semibold mt-10 ">{button}</span>
          </button>
        ))}
      </div>
    );
  };
  
  export default ButtonList;