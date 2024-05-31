import React from "react";
import Image from "next/image";

const AboutSection = () =>{
    return(
        <section className="text-white">
            <div className="md:grid md:grip-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.png" width={1000} height={300} alt="image-about"/>
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quisquam ipsa deleniti unde consequuntur, ullam, repellat optio dignissimos voluptatem 
                    id perferendis aspernatur voluptas quia quod modi iure, repellendus illum sint?
                </p>
                <div className="flex flex-row mt-8">
                    <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">Skills</span>
                    <span>Education</span>
                    <span>Experience</span>
                </div>
            </div>
            </div>

    
        </section>
    )
};

export default AboutSection;