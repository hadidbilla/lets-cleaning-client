import React, { useState } from "react";
import TeamCart from "./TeamCart/TeamCart";

const Team = () => {
  const teamMember = [
    {
      img: "https://i.ibb.co/YXFym3S/taylor-nh-Ib-H2-Ow-B7-M-unsplash.jpg",
      name: "Jondy Roades",
      title: "CEO",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img:
        "https://i.ibb.co/b14CwSK/michael-mcauliffe-Qnfe-PA4j-IQ-unsplash.jpg",
      name: "Ros Taylor",
      title: "CFO",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://i.ibb.co/5s35H1d/metin-ozer-i-Sm-Twu-KTNDo-unsplash.jpg",
      name: "Karin Jonas",
      title: "Senior Executive",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="container mt-5">
      <h1 style={{ color: "tomato" }} className="text-center mt-4 mb-3">
        Our Team
      </h1>
      <div className="row">
        {teamMember.map((member) => (
          <TeamCart member={member}></TeamCart>
        ))}
      </div>
    </div>
  );
};

export default Team;
