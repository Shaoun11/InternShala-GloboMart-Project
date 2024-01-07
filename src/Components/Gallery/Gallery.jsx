import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-marquee-slider";

const galleryImg = [
    "https://i.ibb.co/PGkksjC/185249-2022-removebg-preview.png",
    "https://i.dummyjson.com/data/products/6/1.png",
    "https://i.ibb.co/FYGDRCs/P30-Pro-Black-removebg-preview.png",
    "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
    "https://i.ibb.co/17tVpbf/product-1631796086iphone-13-pro-max-gold-select-removebg-preview.png",
    "https://i.dummyjson.com/data/products/7/1.jpg",
    "https://i.ibb.co/HDZgKLt/mate50-pro-removebg-preview.png",
    "https://www.custommacbd.com/cdn/shop/products/surface-laptop-5-Custom-Mac-BD.jpg?v=1677742950",
    "https://i.ibb.co/pLsg4jC/Honor-X8a-Black-removebg-preview.png",
    
    "https://i.dummyjson.com/data/products/9/1.jpg",
    
];
const galleryImgRevers = [
    "https://i.dummyjson.com/data/products/13/1.jpg",
    "https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFYZTZCaVpPekwuX1NMMTAwMF8uanBn.jpg",
    "https://i5.walmartimages.com/asr/961a4cf2-fe98-43ca-a71d-cc6b105dbf2e.422b61870e11b84974ffa121736690c7.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    "https://hatil.com/sites/default/files/styles/hatil_product_list_crop/public/Moseley-281%20Sofa%20HATIL%20modern%20living%20room%20online%20buy%20Bangladesh%20best%20price.jpg?itok=pM_94fVf",
    "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww",
    "https://images-platform.99static.com/bLWUvEIclEzKlUjwb1ctdAcK2po=/117x1597:1267x2747/500x500/top/smart/99designs-contests-attachments/77/77198/attachment_77198533",
    "https://i.dummyjson.com/data/products/24/1.jpg",
    "https://i.ibb.co/h2k8N1s/download.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/064/136/919/large/farhat-zubair-lays-post.jpg?1687209786",
    "https://media.designcafe.com/wp-content/uploads/2020/07/25174928/furniture-decorative-items-for-living-room.jpg",
];

const Gallery = () => {
  return (
    <div className="max-container my-10 md:my-20">
      <div className="w-full flex justify-center items-end">
        <h1 className="text-2xl md:text-5xl mt font-bold">Futured Products</h1>
        <div className="w-2 h-2 ml-1 rounded-full bg-secondary mb-1"></div>
      </div>
      <div className="my-10 relative rounded-xl shadow-xl">
        <div className="h-[200px] w-full px-5 pt-5">
          <Marquee key="" velocity={12} className="w-full h-full">
            {galleryImg?.map((productImg, index) => (
              <div key={index} className="w-fit h-[200px] overflow-hidden  ">
                <img
                  src={productImg}
                  className="w-fit h-full border-r hover:scale-[1.2] object-cover origin-center duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="h-[200px] w-full px-5 pb-5">
          <Marquee key="" velocity={12}>
            {galleryImgRevers?.map((productImg, index) => (
              <div key={index} className="w-fit h-[200px] overflow-hidden  ">
                <img
                  src={productImg}
                  className="w-fit h-[200px] object-cover border-r hover:scale-[1.2] origin-center duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
