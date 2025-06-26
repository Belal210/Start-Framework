import { useState } from "react";

export default function Card({ img }) {
  const [isopen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className=" md:col-span-1 rounded-md overflow-hidden relative group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img className="w-full" src={img} alt="image 1" />
        <div className="layer bg-[#1abc9ce6] absolute size-full top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <i className="text-white fa-solid fa-plus fa-6x"></i>
        </div>
      </div>

      {isopen && (
        <div
          className="fixed inset-0 z-50 size-full bg-[#0d6dfd81] flex justify-center items-center"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          <img id="zoomed-img" className=" md:w-1/2" src={img} alt="zoomed image" onClick={(e)=> e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
