import React from "react";

export const Profile = () => {
  return (
    <>
      <section className="flex  justify-center   bg-[#F4F4F4]">
        <div className="shadow1">
          <h1 className="text-[#EA2678] font-bold text-l  mb-1">
            Basic Information
          </h1>
          <div className="w-1/2 p-7">
            <div className="font-bold">
              <p>Doğum Tarihi</p>
              <p>İkamet Şehri</p>
              <p>Eğitim Durumu </p>

              <p>Tercih Ettiği Rol</p>
            </div>
          </div>
          <div className="w-1/2 p-4 mt-16 ">
            <p>15.05.1999</p>
            <p>Zonguldak</p>
            <p>Koü Makine Müh.</p>
            <p> Frontend UI</p>
          </div>
        </div>
        <div className="bg-[#F4F4F4] p-4 m-24 w-1/4">
          <h1
            className="font-
Playfair Display text-2xl mb-4"
          >
            About Me
          </h1>
          <p className="font-ınter">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
            <br /> Mnima accusamus ratione soluta aperiam sit voluptate? Dicta
            quod deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </section>
    </>
  );
};
