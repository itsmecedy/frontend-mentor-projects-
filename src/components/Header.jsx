import React from "react";

export default function Header() {
  return (
    <>
      <div className=" flex justify-between mt-20 ">
        <header className=" text-4xl ">Frontend Mentor Projects </header>
        <a
          href="https://mancio-portfolio.netlify.app/"
          rel="noreferrer"
          className="text-2xl hover:text-blue-700 hover:drop-shadow-md transform scale-100 hover:scale-110 transition-all"
        >
          Return to Portfolio
        </a>
      </div>
    </>
  );
}
