import React from "react";
import { BsStarFill } from "react-icons/bs";
// import avatar from "../assets/avatar_2.png";
import './Rental.css'; // Import a CSS file for styling

const Rental = ({ title, image, price, URL, desc, about, avatar,date }) => {
  return (
    <div className="rental-card">
      <a href={`http://${URL}`} target="_blank" className="card-link">
        <div className="relative">
          <div className="grad absolute w-full h-full rounded-b-[1.3rem]"></div>
          <div className="flex rental-card-inner bg-black">
            {/* Background */}
            <img
              src={image}
              alt=""
              className="object-cover rounded-[1.3rem] sm:h-[17rem] md:h-[13rem] w-full opacity-60"
            />
            {/* Title */}
            <div className="absolute text-emerald-200 font-bold bottom-6 left-6 text-[22px] flex items-center gap-2">
              {title}
              <span>&#x2022;</span>
              <p className="text-[18px] text-slate-2400">${price}</p>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="pt-3 flex justify-between items-start rental-description">
          {/* Left */}
          <div className="relative left-20">
            <p className="max-w-[17rem] font-semibold text-[17px]">
              {desc}
            </p>
            <p className="max-w-[17rem] text-[16px] -mt-1 text-gray-500">
              {about}
            </p>
            <p className="absolute text-emerald-200 max-w-[17rem] font-bold text-[17px]">{date}</p>
          </div>
          {/* Right */}
          <img src={avatar} className="absolute w-16 h-16" alt="Avatar" />

        </div>
      </a>
    </div>
  );
};

export default Rental;
