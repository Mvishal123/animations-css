import React from "react";

const Footer = () => {
  return (
    <div className="bg-black/90 pt-40 pb-12">
      <div className="px-12 md:px-40">
        <div>
          <p className="text-7xl flex items-center font-light">
            <span className="inline-block h-[4rem] w-[4rem] mr-6 bg-white rounded-full" />
            Let's work
          </p>
          <p className="text-7xl  font-light">together</p>
        </div>
        <div className="relative h-[5rem] mt-16 flex flex-col justify-center">
          <div className="h-[1px] bg-white/40"></div>
          <button className="rounded-full bg-blue-700 border border-white/40 absolute right-32 p-12 aspect-square flex items-center text-xl font-light">
            get in touch
          </button>
        </div>
        <div>
          <div className="space-x-6 mt-8">
            <button className="border py-6 px-10 rounded-full">
              vishal.official@gmail.com
            </button>
            <button className="border py-6 px-10 rounded-full">
              +91 9xxxxx-xxxxx
            </button>
          </div>
        </div>
      </div>
      <div className="mt-48 px-12 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="w-32 flex flex-col items-start gap-2.5">
            <p className="text-slate-500">Version</p>
            <p className="text-slate-200">2024 &copy; Edition</p>
          </div>
          <div className="w-32 flex flex-col items-start gap-2.5">
            <p className="text-slate-500">Version</p>
            <p className="text-slate-200">2024 &copy; Edition</p>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-slate-500">Socials</p>

          <ul className="flex items-center gap-2  [&_a]:text-slate-200">
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
