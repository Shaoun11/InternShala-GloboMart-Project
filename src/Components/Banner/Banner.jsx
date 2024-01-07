
import { FiSearch } from 'react-icons/fi';
const Banner = () => {
    return (
        <div>
        <section 
        
          className="relative  bg-[url(https://i.ibb.co/Fb8hj29/Untitled-design-18.png)] bg-cover bg-center bg-no-repeat"
        >
          <div
            className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/50 lg:to-white/10 md:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
          ></div>
        
          <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
          >
            <div className="max-w-xl">
              <h1 className="  lg:text-7xl md:text-4xl  text-[39px] lg:ml-0 ml-2 md:ml-0 mr-0">
                Let's find your
          <br />
                
              </h1>
              <h1  className="  lg:text-6xl md:text-4xl lg:mb-2 lg:mt-3 text-[34px] lg:ml-0 ml-2 md:ml-0 mr-0"><strong className="  mr-[60px]  text-yellow-500">
                  Best Products
                </strong></h1>
              <p className="lg:text-2xl md:text-4xl lg:pb-2  lg:ml-0 ml-2 md:ml-0 mr-0 text-xl sm:text-xl/relaxed">
              Welcome to our Phone Shop, Discover the latest smartphones, accessories!
              </p>
        
              <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-2 justify-between">
                                    <input
                                        className="text-base text-gray-400 flex-grow outline-none px-2"
                                        type="text"
                                        name='search'
                                        
                                        // onChange={(e) => setsearch(e.target.value)}
                                        placeholder="Search your Products  Name"
                                    />
                                    <div className="ms:flex items-center lg:px-2 py-1  rounded-lg space-x-4 mx-auto">

                                        <FiSearch className='text-xl' ></FiSearch>
                                    </div>
                                </div>
            </div>
          </div>
        </section>
        
        {/* <div>
            <img className='w-full' src="https://img.freepik.com/premium-photo/summer-vanilla-perfume-background-photo-with-copy-space-bright-pink-vanilla-perfume-banner-summer-ai-generative_974186-289.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696809600&semt=ais" alt="" />
        </div> */}
        </div>
    );
};

export default Banner;