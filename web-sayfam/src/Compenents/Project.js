import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.github.com/users/enesakdn/repos?page=$%7Bpage%7D&per_page=100"
      )
      .then((res) => {
        const newData = res.data;
        const filterData = newData.filter((a) => a.homepage !== null);
        setData(filterData);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {data &&
          data.map((a) => {
            return (
              <div key={a.id} className="w-1/2 ">
                <div className=" mt-40  mr-8  bg-[#DDEEFE] Project1">
                  <h1 className="font-Playfair flex-col Display font-bold text-3xl mb-5">
                    {a.name}
                  </h1>
                  <p className="font-ınter text-base flex-col ">
                    {a.description}
                  </p>
                  <div className="flex flex-row flex-wrap">
                    {a.topics.map((topic) => {
                      {
                        return <p className=" topic">{topic}</p>;
                      }
                    })}
                  </div>
                  <div className="mt-10 mb-10 font-bold">
                    <a
                      className="pr-12    "
                      href={a.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                    <a
                      className="pl-28"
                      href={a.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to app
                    </a>
                  </div>
                  <img src="https://s3-alpha-sig.figma.com/img/600f/f411/f246155782db0594c00c688cdbf27f80?Expires=1679875200&Signature=cy-YjlWcwMB0T99Ofmmm-pAvWan46p-1GWVfNzImp9TpB7z3fSkJp-reRmGjo3f8zsBjHGj2LnhKxHUHzujo8YbIUyxVt9nMfoCyTs18QzoH9yukzn2IuzbzvMksoZR6ikYOxzlMJNMHEQHLtTwdo4INoWWv-rf3D1AYPBQ~fS~kVT23OAkTHt1E1CXFHdc6QjQnmUnPfGbPvSk7qJT0fAitY3sjdPdYINdPqYtk2PPKBMugLlxUQtOh3H5-Xd35-rixyz23cdXzSn5v~eQwDYzuQAzA1kQz4zR2K9UhljywNlSAqKpSUV2Q9Z5QJDiBt27cF-oMejLBxR4lgdL9Yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Project;
