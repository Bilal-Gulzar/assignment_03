import React from 'react'
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { LuCookie } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { IoCodeSlash } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import Image from 'next/image';
import { FaRegHeart } from "react-icons/fa6";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="px-5 sm:px-10 max-w-[1000px] mx-auto pb-20 "
    >
      <div className="flex sm:flex-row gap-7 flex-col">
        <div className="md:pr-24  sm:px-0 px- flex flex-col gap-5 sm:order-1 order-2">
          <h3 className="text-gray-500 font-medium text-xs ">
            WELCOME TO MY WORLD
          </h3>
          <h2 className="text-4xl lg:text-5xl text-white">
            Hi, i 'm{" "}
            <span className="text-[#ff014f] font-semibold">Bilal Gul </span> a
            professional full stack Developer.
          </h2>
          <p className="text-white text-xs md:w-[60%] tracking-widest">
            i have been working since 2023 i am proficient in ui design user
            experince ,researcher,web develpment
          </p>
          <h5 className="text-white text-xs ">FIND WITH ME</h5>
          <div className="flex gap-5 justify-between">
            <div className="flex gap-5">
              <span className="p-2 custom-shadow rounded">
                <FiLinkedin className="text-white " />
              </span>
              <span className="p-2 custom-shadow rounded ">
                <FaInstagram className="text-white " />
              </span>
              <span className="p-2 custom-shadow rounded ">
                <LuGithub className="text-white " />
              </span>
            </div>
            <div className="flex gap-5 relative">
              <div className="text-white text-xs  absolute -top-8"> BEST KILL ON</div>
              <span className="p-2 custom-shadow rounded ">
                <SiNextdotjs className="text-white " />
              </span>
              <span className="p-2 custom-shadow rounded ">
                <TbBrandJavascript className="text-yellow-500 " />
              </span>
              <span className="p-2 custom-shadow rounded ">
                <SiMongodb className="text-green-500 " />
              </span>
            </div>
          </div>
        </div>
        <div className="w-72 mx-auto sm:mx-0 sm:min-w-72 h-72 custom-shadow sm:order-2 order-1 shadow-2xl p-3 flex justify-center relative">
          <Image
            src="/mainImg.png"
            width={200}
            className="object-cover absolute bottom-0"
            height={300}
            alt="myProfile"
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-10 border-b pb-16 border-black items-center mt-40">
        <div className="min-w-72 h-72 custom-shadow shadow-2xl p-3 flex justify-center relative">
          <Image
            src="/mainImg.png"
            width={200}
            className="object-cover absolute bottom-0"
            height={300}
            alt="myProfile"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start gap-5">
          <h2 className="text-white text-xl tracking-wider">Who i am?</h2>
          <p className="text-white text-sm leading-5 tracking-wider">
            Hi! I am a passionate web developer who loves creating engaging and
            user-friendly websites. My expertise lies in front-end technologies
            like HTML CSS and JavaScript as well as back-end development with
            frameworks like Node.js. I enjoy turning ideas into reality and I am
            always eager to learn new tools and techniques. Problem-solving is
            my forte and I like tackling challenges head-on. When I am not
            coding you can find me exploring the latest web trends or working on
            personal projects. Let us connect and build something amazing
            together!
          </p>
          <button className="w-[150px]  button-shadow-md hover:shadow-none transition-all duration-300 ease-in  tracking-wider rounded-md py-2 text-white font-medium bg-[#ff014f]">
            Download PDF
          </button>
        </div>
      </div>
      <div className="text-white mt-12">
        <div className="text-lg flex flex-col items-center pb-4 tracking-wide gap-0.5 text-center font-sans">
          What i Do
          <span className="w-10 h-0.5 flex rounded bg-[#ff014f]"></span>
        </div>
        <h2 className="text-2xl text-center font-sans tracking-wide">
          I am available for Hire
        </h2>
        <div className="md:flex sm:grid-cols-2 grid gap-8 mt-10">
          <div className="   max-w-72 py-12 custom-shadow-md flex mx-auto sm:mx-0 rounded-md justify-center gap-5 items-center flex-col">
            <div className="w-14 h-14 flex justify-center items-center rounded-full bg-white">
              <LuCookie className=" text-black rounded-full  size-9" />
            </div>
            <div className="bg-[#ff014f]   w-7 h-0.5 rounded-lg -mt-2 "></div>
            <div className="flex flex-col px-8 gap-2 ">
              <h2 className="text-lg  text-center">UI/UX Design</h2>
              <p className="text-sm text-center tracking-wider text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className=" max-w-72 py-12 custom-shadow-md flex  mx-auto sm:mx-0  rounded-md justify-center gap-5 items-center flex-col">
            <div className="w-14 h-14 flex justify-center items-center rounded-full bg-white">
              <RiComputerLine className=" text-black rounded-full  size-9" />
            </div>
            <div className="bg-[#ff014f]   w-7 h-0.5 rounded-lg -mt-2 "></div>
            <div className="flex flex-col px-8  gap-2">
              <h2 className="text-lg  text-center">Web Design</h2>
              <p className="text-sm text-center text-gray-500 tracking-wider">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className=" max-w-72 py-12 mx-auto sm:mx-0  custom-shadow-md flex  rounded-md justify-center gap-5 items-center flex-col">
            <div className="w-14 h-14 flex justify-center items-center rounded-full bg-white">
              <IoCodeSlash className=" text-black rounded-full  size-9" />
            </div>
            <div className="bg-[#ff014f]   w-7 h-0.5 rounded-lg -mt-2 "></div>
            <div className="flex flex-col px-8 gap-2 ">
              <h2 className="text-lg  text-center">Web Development</h2>
              <p className="text-sm text-center text-gray-500 tracking-wider">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y flex flex-wrap  md:flex-nowrap px-5 justify-between gap-10 md:gap-4  border-black py-10 mt-20 ">
        <div className="flex  h-12 gap-4 mx-auto items-center justify-between">
          <div>
            <BsCalendar2Date className="size-7" />
          </div>
          <p className="text-[#7e7f82] text-xl font-medium">
            Year OF
            <br /> Experience
          </p>
          <div className="text-white text-xl font-semibold">10 +</div>
        </div>
        <div className="flex h-12 mx-auto  gap-4 items-center justify-between">
          <div>
            <BsCalendar2Date className="size-7" />
          </div>
          <p className="text-[#7e7f82] text-xl font-medium">
            Year OF
            <br /> Experience
          </p>
          <div className="text-white text-xl font-semibold">10 +</div>
        </div>
        <div className="flex mx-auto gap-4 h-12  items-center justify-between">
          <div>
            <BsCalendar2Date className="size-7" />
          </div>
          <p className="text-[#7e7f82] text-xl font-medium">
            Year OF
            <br /> Experience
          </p>
          <div className="text-white text-xl font-semibold">10 +</div>
        </div>
      </div>
      <div>
        <div className="flex justify-center  items-center mt-10 gap-5 flex-col">
          <h2 className="text-white text-lg tracking-wider">My Porfolio</h2>
          <div className="w-8 h-0.5 rounded-lg -mt-4 bg-[#ff014f]"></div>
          <h3 className=" tracking-wider text-[#7e7f82]">
            Visit My Portfolio & keep Your Feedback
          </h3>
        </div>
        <div className="lg:grid  flex flex-wrap justify-center lg:grid-cols-3 mt-10 gap-8 lg:gap-5">
          <div className="w-72 flex p-5 bg-[#34383b] rounded-md custom-shadow-md flex-col gap-5">
            <div className="h-60  relative w-full">
              <Image
                src="/img1.jpg"
                fill
                className="h-full w-full rounded-md"
                alt="img1"
              />
            </div>
            <div className="flex justify-between">
              <h3 className="text-[#ff014f] text-xs">FIGMA</h3>
              <div className=" text-xs flex  items-center gap-1 text-[#7e7f82]">
                <FaRegHeart />
                480
              </div>
            </div>
            <p className="text-white text-xl">
              Mobile app landing design & service
            </p>
          </div>
          <div className="w-72 flex p-5 bg-[#34383b] rounded-md custom-shadow-md flex-col gap-5">
            <div className="h-60  relative w-full">
              <Image
                src="/img3.jpg"
                fill
                className="h-full w-full rounded-md"
                alt="img1"
              />
            </div>
            <div className="flex justify-between">
              <h3 className="text-[#ff014f] text-xs">FIGMA</h3>
              <div className=" text-xs flex  items-center gap-1 text-[#7e7f82]">
                <FaRegHeart />
                480
              </div>
            </div>
            <p className="text-white text-xl">
              Mobile app landing design & service
            </p>
          </div>
          <div className="w-72 flex p-5 bg-[#34383b] rounded-md custom-shadow-md flex-col gap-5">
            <div className="h-60  relative w-full">
              <Image
                src="/img2.jpg"
                fill
                className="h-full w-full rounded-md"
                alt="img1"
              />
            </div>
            <div className="flex justify-between">
              <h3 className="text-[#ff014f] text-xs">FIGMA</h3>
              <div className=" text-xs flex  items-center gap-1 text-[#7e7f82]">
                <FaRegHeart />
                480
              </div>
            </div>
            <p className="text-white text-xl">
              Mobile app landing design & service
            </p>
          </div>
          <div className="w-72 flex p-5 bg-[#34383b] rounded-md custom-shadow-md flex-col gap-5">
            <div className="h-60  relative w-full">
              <Image
                src="/img1.jpg"
                fill
                className="h-full w-full rounded-md"
                alt="img1"
              />
            </div>
            <div className="flex justify-between">
              <h3 className="text-[#ff014f] text-xs">FIGMA</h3>
              <div className=" text-xs flex  items-center gap-1 text-[#7e7f82]">
                <FaRegHeart />
                480
              </div>
            </div>
            <p className="text-white text-xl">
              Mobile app landing design & service
            </p>
          </div>
          <div className="w-72 flex p-5 bg-[#34383b] rounded-md custom-shadow-md flex-col gap-5">
            <div className="h-60  relative w-full">
              <Image
                src="/img3.jpg"
                fill
                className="h-full w-full rounded-md"
                alt="img1"
              />
            </div>
            <div className="flex justify-between">
              <h3 className="text-[#ff014f] text-xs">FIGMA</h3>
              <div className=" text-xs flex  items-center gap-1 text-[#7e7f82]">
                <FaRegHeart />
                480
              </div>
            </div>
            <p className="text-white text-xl">
              Mobile app landing design & service
            </p>
          </div>
          <div className="w-72 flex p-5 bg-[#34383b] rounded-md custom-shadow-md flex-col gap-5">
            <div className="h-60  relative w-full">
              <Image
                src="/img2.jpg"
                fill
                className="h-full w-full rounded-md"
                alt="img1"
              />
            </div>
            <div className="flex justify-between">
              <h3 className="text-[#ff014f] text-xs">FIGMA</h3>
              <div className=" text-xs flex  items-center gap-1 text-[#7e7f82]">
                <FaRegHeart />
                480
              </div>
            </div>
            <p className="text-white text-xl">
              Mobile app landing design & service
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 border-y mt-28  border-black  ">
        <div className="flex justify-center items-center gap-5 flex-col ">
          <h2 className="text-white text-lg tracking-wider">Testimonials</h2>
          <div className="w-10 h-0.5 rounde-lg bg-[#ff014f] -mt-3"></div>
          <h3 className="text-[#c6c7c8] text-2xl">What They says</h3>{" "}
        </div>
        <div className="flex gap-8 mt-10 hide-scrollbar overflow-x-auto p-2 ">
          <div className="min-w-72 min-h-72 custom-shadow-md flex  rounded-md justify-center gap-5 items-center flex-col">
            <Image
              src="/person1.jpg"
              className="rounded-full"
              width={70}
              height={70}
              alt="person1"
            />
            <div className="bg-[#ff014f]   w-7 h-0.5 rounded-lg -mt-2 "></div>
            <div className="flex flex-col px-8 gap-2 ">
              <h2 className=" -mt-2 text-[#ff014f] tracking-wider text-center">
                Joe Bid.Microsoft
              </h2>
              <p className="text-sm text-center text-gray-500 tracking-wider">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="min-w-72 min-h-72 custom-shadow-md flex  rounded-md justify-center gap-5 items-center flex-col">
            <div className="w-16 h-16 rounded-full relative">
              <Image
                src="/person2.jpg"
                className="rounded-full"
                fill
                alt="person1"
              />
            </div>
            <div className="bg-[#ff014f]   w-7 h-0.5 rounded-lg -mt-2 "></div>
            <div className="flex flex-col px-8 gap-2 ">
              <h2 className=" -mt-2 text-[#ff014f] tracking-wider text-center">
                Sara Nil. Samsung
              </h2>
              <p className="text-sm text-center text-gray-500 tracking-wider">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="min-w-72 min-h-72 custom-shadow-md flex  rounded-md justify-center gap-5 items-center flex-col">
            <div className="w-16 h-16 relative ">
              <Image
                src="/person3.jpg"
                className="rounded-full"
                fill
                alt="person1"
              />
            </div>
            <div className="bg-[#ff014f]  w-7 h-0.5 rounded-lg -mt-2 "></div>
            <div className="flex flex-col px-8 gap-2 ">
              <h2 className=" -mt-2 text-[#ff014f] tracking-wider text-center">
                jey Uso.Google
              </h2>
              <p className="text-sm text-center text-gray-500 tracking-wider">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
