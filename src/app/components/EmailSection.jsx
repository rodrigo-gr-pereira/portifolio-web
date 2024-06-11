import React from "react";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";


const EmailSection =() => {
  return <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
    <div>
        <h5 className="text-xl font-bold text-white my-2">Lest conecotoafa</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-wd">
            {""}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eius illo ad cupiditate repudiandae ex architecto molestiae debitis, libero, placeat quas. Eos, veniam ad praesentium iste excepturi beatae. 
            Aliquid, rem.
        </p>
        <div className="socials  flex flex-row gp-2">
            <Link href="github.com">
                <Image src={GithubIcon} alt="Github Icon"/>
            </Link>
            <Link  href="linkendin.con">
                <Image src={LinkedinIcon} 
                  width={30}
                  height={30}
                 alt="Linkendin Icon" />
            </Link>
        </div>
    </div>
    <div>
        <form className="flex flex-col gap-4">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium"> Your email</label>
            <input
                type="email"
                id="email"
                required 
                placeholder="rodrigo@gmail.com"
            />
        </form>
    </div>
  </section>  
};

export default EmailSection;