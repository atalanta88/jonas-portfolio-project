export default function CTASection() {
  return (
    <>
      {" "}
      <section
        id="section-one"
        className="bg-gray-100 dark:bg-gray-800 px-1 lg:pt-20 lg:pb-20 "
      >
        <div className="bg-gray-100 dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto flex relative pt-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 bg-green-500 dark:bg-white mb-12"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Se mine
                <span className="text-5xl sm:text-7xl">Prosjekter</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white py-5">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img
                src="https://images.pexels.com/photos/6414318/pexels-photo-6414318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="max-w-xs md:max-w-sm m-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
