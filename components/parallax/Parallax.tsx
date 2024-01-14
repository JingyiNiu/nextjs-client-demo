import React, { useEffect, useState } from "react";

const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="relative bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="h-60 w-60 bg-sky-200 flex justify-center items-center">5</div>
        <div className="h-60 w-60 bg-violet-200 flex justify-center items-center">6</div>
        <div className="h-60 w-60 bg-fuchsia-200 flex justify-center items-center">7</div>
        <div className="h-60 w-60 bg-sky-200 flex justify-center items-center">5</div>
        <div className="h-60 w-60 bg-violet-200 flex justify-center items-center">6</div>
        <div className="h-60 w-60 bg-fuchsia-200 flex justify-center items-center">7</div>
        <div className="grid grid-cols-4 gap-4">
          <div
            className="h-60 w-60 bg-red-200 flex justify-center items-center"
            style={{ transform: `translateY(-${offsetY * 0.1}px) translateX(-${offsetY * 0.05}px) rotate(-${offsetY * 0.01}deg)` }}
          >
            1
          </div>
          <div
            className="h-60 w-60 bg-orange-200 flex justify-center items-center"
            style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
          >
            2
          </div>
          <div
            className="h-60 w-60 bg-yellow-200 flex justify-center items-center"
            style={{ transform: `translateY(-${offsetY * 0.3}px) translateX(${offsetY * 0.05}px) rotate(${offsetY * 0.01}deg)` }}
          >
            3
          </div>
          <div className="h-60 w-60 bg-lime-200 flex justify-center items-center" style={{ opacity: `${1 - offsetY * 0.001}` }}>
            4
          </div>
        </div>
        <div className="h-60 w-60 bg-sky-200 flex justify-center items-center">5</div>
        <div className="h-60 w-60 bg-violet-200 flex justify-center items-center">6</div>
        <div className="h-60 w-60 bg-fuchsia-200 flex justify-center items-center">7</div>
        <div className="h-60 w-60 bg-sky-200 flex justify-center items-center">5</div>
        <div className="h-60 w-60 bg-violet-200 flex justify-center items-center">6</div>
        <div className="h-60 w-60 bg-fuchsia-200 flex justify-center items-center">7</div>
      </div>
    </>
  );
};

export default Parallax;
