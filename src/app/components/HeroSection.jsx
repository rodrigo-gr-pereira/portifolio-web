"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return(
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:tex-left">  
                <h1 className="text-white mb-4 text-4xl  sm:text-4xl lg:text-6xl font-extrabold">
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"> Olá, eu sou {""}
                   </span>
                   <br></br>
                   <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Rodrigo',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Tecnico em Telecomunicações',
        1000,
        'Graduado em Sistemas de Informações',
        1000,
        'Tecnico IAT-Claro',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '0.9em', display: 'inline-block' }}
      repeat={Infinity}
    />
          </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quaerat ad, illum at reprehenderit, provident aliquam autem quas, nostrum maxime commodi.
                    Laborum sunt illo eius vel alias optio iure at?
                </p>
                <div className="place-self-center">
                    <button className=" px-6 py-3 w-full sm:w-fit rounded-full mr-4  bg-gradient-to-br from-blue-500 via-pink-500 to-pink-500 hover:bg-slate-200 text-white">Sobre mim</button>
                    <button className="px-1 py-1  w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-pink-500 to-pink-500 bg-transparent hover:bg-slate-200 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-2 py-2">Download CV</span>
                        </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[160px] h-[290px] lg:wt-[120px] lg:h-[300px] lg: relative mt-3">
                    <Image
                    src="/images/avatar.jpeg"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl"
                    width={500}
                    height={300}/>
                </div>
            </div>
        </div>
    </section>
   
    )
}

export default HeroSection;