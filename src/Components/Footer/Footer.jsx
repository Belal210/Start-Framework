

export default function Footer () {

    return (
        <>
      <footer className=" bg-[#2c3e50]">
        <div className="container py-20 px-14 mx-auto text-white text-center flex flex-col items-center justify-center gap-9 md:flex-row md:*:w-1/3">
            <div className="left">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="center ">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">AROUND THE WEB</h3>
                <ul className="flex gap-2 text-sm w-fit mx-auto">
                    <li className="size-9 border border-white rounded-full flex justify-center items-center cursor-pointer"><i className="fa-brands fa-facebook icon"></i></li>
                    <li className="size-9 border border-white rounded-full flex justify-center items-center cursor-pointer"><i className="fa-brands fa-twitter icon"></i></li>
                    <li className="size-9 border border-white rounded-full flex justify-center items-center cursor-pointer"><i className="fa-brands fa-linkedin-in icon"></i></li>
                    <li className="size-9 border border-white rounded-full flex justify-center items-center cursor-pointer"><i className="fa-solid fa-globe icon"></i></li>
                </ul>
            </div>
            <div className="right ">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">ABOUT FREELANCER</h3>
                <p className="">Freelance is a free to use, licensed tailwind theme created by Route</p>
            </div>
            
        </div>
        <div className="py-8 text-center text-white bg-[#1a252f]">
        <p>Copyright © Your Website 2025</p>
       </div>
      </footer>
        </>
    )
}