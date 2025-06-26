
import avatar from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      
      <section className="h-screen bg-[#1abd9c]">
        <div className="container h-full mx-auto flex justify-center items-center">
          <div className="content text-center text-white space-y-4">
            <div className="w-3/4 mx-auto">
              <img className="w-full" src={avatar} alt="main-img" />
            </div>
            <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold">start framework</h1>
            <div className="flex justify-center items-center space-x-5">
              <div className="px-6 md:px-10 h-1 bg-white "></div>
              <i className="fa-solid fa-star"></i>
              <div className="px-6 md:px-10 h-1 bg-white "></div>
            </div>
            <p className="w-fit mx-auto">Graphic Artist - Web Designer - Illustrato</p>
          </div>
        </div>
      </section>
      
    </>
  );
}
