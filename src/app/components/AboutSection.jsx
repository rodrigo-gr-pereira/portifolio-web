"use client"
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from './TabButton';
import { Content } from "next/font/google";

const TAB_DATA =
[
    {
        title: "Skills",
        id: "skills",
        content:(
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostegreSQL</li>
                <li>Sequelize</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Formações",
        id: "formacoes",
        content:(
            <ul className="list-disc pl-2">
                <li>Tecnico em telecomincacaras</li>
                <li>Express</li>
                <li>PostegreSQL</li>
                <li>Sequelize</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Certificações",
        id: "certificacoes",
        content:(
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>Express</li>
                <li>PostegreSQL</li>
                <li>Sequelize</li>
                <li>React</li>
            </ul>
        ),
    },  
]


const AboutSection = () =>{
    const [tab, setTab] = useState("skills");
    const [ isPending,startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id);
        });
    }   
     return(
        <section className="text-white">
            <div className="md:grid md:grip-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.png" width={500} height={500} alt="image-about"/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quisquam ipsa deleniti unde consequuntur, ullam, repellat optio dignissimos voluptatem 
                    id perferendis aspernatur voluptas quia quod modi iure, repellendus illum sint?
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active ={tab === "skills"}
                        >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("formacoes")}
                        active={tab === " formacoes"}
                        >
                        {" "}
                        Formações{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("certificacoes")}
                        active={tab=== "certificacoes"}>
                        {" "}
                        Certificações{" "}
                   </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
         </div>
     </section>
    )
};

export default AboutSection;