import Header from '../Navber/Navber';
import { FiSearch } from 'react-icons/fi';
import { useLoaderData } from 'react-router-dom';
import Phonecart from '../PhonesCart/PhoneCart';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';
import OurServices from '../Our Services/Services';
import Contact from '../Contacr';
import { useState } from 'react';

const Home = () => {
    const [search,setsearch]=useState('');
    const searchQuery = search.toLowerCase(); 
    const phonedata=useLoaderData();
    const data=phonedata.products;
    console.log(data);
    return (
        <div>
            <Header></Header>
            <div>
        <section 
        
          className="relative  bg-[url(https://i.ibb.co/Fb8hj29/Untitled-design-18.png)] h-[650px] bg-cover bg-center bg-no-repeat"
        >
          <div
            className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/50 lg:to-white/10 md:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
          ></div>
        
          <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen  lg:px-8"
          >
            <div className="max-w-xl">
              <h1 className="  lg:text-7xl md:text-4xl  text-[39px] lg:ml-0 ml-2 md:ml-0 mr-0">
                Let's find your
          <br />
                
              </h1>
              <h1  className="  lg:text-6xl md:text-4xl lg:mb-2 lg:mt-3 text-[34px] lg:ml-0 ml-2 md:ml-0 mr-0"><strong className="  mr-[60px]  text-yellow-500">
                  Best Products
                </strong></h1>
              <p className="lg:text-2xl md:text-4xl lg:pb-4 pb-3  lg:ml-0 ml-2 md:ml-0 mr-0 text-xl sm:text-xl/relaxed">
              Welcome to our Phone Shop, Discover the latest smartphones, accessories!
              </p>
        
              <div className="sm:flex items-center  bg-white rounded-lg overflow-hidden px-2 py-2 justify-between">
                                    <input
                                        className="text-base text-gray-400 flex-grow outline-none px-2"
                                        type="text"
                                        name='search'
                                        
                                        onChange={(e) => setsearch(e.target.value)}
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
         <div className="w-full flex justify-center  mt-5 items-end">
        <h1 className="text-2xl md:text-5xl font-bold">Our All Products</h1>
        <div className="w-2 h-2 ml-1 rounded-full bg-secondary mb-1"></div>
      </div>
          <div className='max-w-6xl mx-auto'>
          <div className='grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-12 ml-4 mr-5 '>
            {
                    data.filter((item)=>{
                        return  item.title.toLowerCase().includes(searchQuery);
                    }).map(phone => <Phonecart key={phone.id} phone={phone} > </Phonecart>)
                }
            </div>
          </div>
            <div className='max-w-7xl mx-auto'>
            <div className='pt-14 pb-20'>
            <Gallery>
            </Gallery>
            </div>
            <OurServices></OurServices>
            </div>
            <Contact></Contact>
           <div className='-mb-7'>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;