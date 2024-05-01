import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (99+)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to KidzKloset, your ultimate destination for stylish and affordable
           children's clothing and accessories! At KidzKloset, we understand the joys and 
           challenges of parenthood, which is why we've curated a diverse collection of
            trendy and comfortable outfits for your little ones. From adorable onesies 
            and playful dresses to cozy pajama sets and durable outerwear, we've got 
            everything you need to dress your child with confidence and flair.
        </p>
        <p>
        Our website offers a seamless shopping experience, with intuitive navigation,
         detailed product descriptions, and secure payment options. Whether you're shopping
          for everyday essentials or special occasion outfits, KidzKloset has you covered.
           Plus, with our hassle-free returns and exchange policy, you can shop with
            peace of mind. Join the KidzKloset community today and discover the joy of
             dressing your kids in style!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
