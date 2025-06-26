import Card from "../../Components/Card/Card";
import img1 from "../../assets/port1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
    <>
      <section className=" min-h-screen pb-2 bg-white text-[#2c3e50] ">
        <div className="container w-4/5 mx-auto pt-36 md:pt-28 text-center">
          <h2 className="uppercase text-lg md:text-3xl lg:text-4xl font-bold m-5">
            Portfolio component
          </h2>
          <div className="flex justify-center items-center space-x-5">
            <div className="px-8 md:px-10 h-1 bg-[#2c3e50] "></div>
            <i className="fa-solid fa-star"></i>
            <div className="px-8 md:px-10 h-1 bg-[#2c3e50] "></div>
          </div>
          <div className="gallery grid py-7 gap-10 md:grid-cols-3">
            <Card img={img1} />
            <Card img={img2} />
            <Card img={img3} />
            <Card img={img1} />
            <Card img={img2} />
            <Card img={img3} />
          </div>
        </div>
      </section>
    </>
  );
}
