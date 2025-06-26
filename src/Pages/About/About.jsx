
export default function About() {
  return (
    <>
      <section className="min-h-screen bg-[#1abd9c] flex justify-center items-center text-white mt-16">
        <div className="container w-3/4 min-h-full mx-auto flex flex-col justify-center items-center gap-8">
          <h2 className="uppercase text-xl md:text-3xl lg:text-4xl font-bold">about component</h2>
          <div className="flex justify-center items-center space-x-5">
            <div className="px-6 md:px-10 h-1 bg-white "></div>
            <i className="fa-solid fa-star"></i>
            <div className="px-6 md:px-10 h-1 bg-white "></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-7 md:flex-row *:md:w-1/2">
            <div className="w-full">
              Freelancer is a free tailwind theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="w-full">
              Freelancer is a free tailwind theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
