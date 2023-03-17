import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-coll mb-48 mt-48">
      <div
        className="font:
Inter text-5xl ml-80 mb-46 "
      >
        <h1>
          Let’s work together on <br />
          your next product.
        </h1>
      </div>
      <div className="flex flex-initial ml-14 font-Inter font-medium">
        <nav>
          <a
            href="https://github.com/enesakdn"
            className=" text-[#1769FF] block mb-2 "
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/enes-akdo%C4%9Fan-2b35a0238/"
            className="text-[#0077B5] block mb-2 "
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/enesakdn/"
            className="text-black block mb-2 "
          >
            İnstagram
          </a>
          <a
            className="text-[#AF0C48] block mb-2 "
            href="mailto:enesakdogan948@gmail.com"
          >
            Email
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
