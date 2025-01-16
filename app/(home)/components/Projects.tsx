"use client";
import { useState } from "react";
import Link from "next/link";
import { link } from "fs";
import { Covered_By_Your_Grace } from "next/font/google";
import { title } from "process";
import React from "react";
import ProjectTabContent from './ProjectTabContent';
import {
	SiApachehadoop,
	SiApachespark,
	SiFastapi,
	SiGooglegemini,
	SiHtml5,
	SiJavascript,
	SiMysql,
	SiNumpy,
	SiPandas,
	SiPowerbi,
	SiPython,
	SiPytorch,
	SiStreamlit,
	SiTailwindcss,
	SiTensorflow,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs"

interface Project {
  title: string;
  tech: any[]; 
  link: string;
  cover: string;
  gradient: string;
  description: string;
  contributors: string[];
}

type ContributorInfo = {
    name: string;
    profileLink: string;
};

// Define contributors with name and profile link
const Contributors: Record<string, ContributorInfo> = {
	"Ossama Outmani": {
		name: "Ossama Outmani",
		profileLink: "https://www.linkedin.com/in/ossama-outmani/",
	},
	"Aymane Maghouti": {
		name: "Aymane Maghouti", 
		profileLink: "https://www.linkedin.com/in/aymane-maghouti/",
	},
	"Abdelghafor Elgharbaoui": {
		name: "Abdelghafor Elgharbaoui",
		profileLink: "https://www.linkedin.com/in/abdelghafor-elgharbaoui/",
	},
	"Hamza Motassim": {
		name: "Hamza Motassim", 
		profileLink: "https://www.linkedin.com/in/hamza-motassim-a56801219/",
	},

};

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const Projects = {
		"AI and ML": [
			{
				title: "Image Captioning with Attention",
				tech: [SiPytorch, SiFastapi, SiGooglegemini,SiTailwindcss],
				link: "https://github.com/nexossama/Image-Captioning-with-Attention-Mechanism",
				cover: "/Image_captioning.png",
				gradient: "from-green-500 via-green-600 to-green-700",
				description: "This project is an innovative AI-powered storytelling application that transforms your images into captivating narratives. The application works through a two-step process: Generating caption with our trained Pytorch model and then using Gemini API to generate a story based on the caption.",
				contributors: ["Aymane Maghouti","Ossama Outmani"],
			},
			{
				title: "Fooling AI image classifier",
				tech: [SiPython, SiTensorflow],
				link: "https://www.linkedin.com/posts/ossama-outmani_adversarial-examples-on-image-classifiers-activity-7183191847349997568-BvL3?utm_source=share&utm_medium=member_desktop",
				cover: "/Fooling_screen.png",
				gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
				description: "A project exploring adversarial machine learning by creating images that fool AI image classifiers.",
				contributors: ["Ossama Outmani"],
			},
			{
				title: "Titanic survival prediction",
				tech: [SiPython, SiNumpy, SiPandas, SiStreamlit],
				link: "https://www.linkedin.com/posts/aymane-maghouti_application-innovation-collaboration-activity-7086787315267723264-ILS0?utm_source=share&utm_medium=member_desktop",
				cover: "/titanic_survivor.png",
				gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
				description: "A project predicting the survival of passengers in the Titanic disaster using machine learning.",
				contributors: ["Aymane Maghouti","Ossama Outmani"],
			},

		],
		"Data Engineering and BI": [
			{
				title: "Moroccan Universities Scopus Analysis",
				tech: [SiPython, SiPowerbi],
				link: "https://www.linkedin.com/posts/abdelghafor-elgharbaoui_moroccan-universities-scopus-analysis-report-activity-7281267545708363776-LUGi?utm_source=share&utm_medium=member_desktop",
				cover: "/moroccan scorpus university.png",
				gradient: "from-green-500 via-green-600 to-green-700",
				description: "Moroccan-Universities-Scopus-Analysis is a data-driven project focused on analyzing academic publications affiliated with Moroccan universities and institutes . The data is sourced from Scopus , covering various document types such as articles, book series, and conference papers, spanning all years up to the present.<br>I participated in building a pipeline that processes 100K+ rows of scientific publications and built a relevant Power BI solution to visualize and analyze the state of scientific research across the 12 public Moroccan universities.",
				contributors: ["Abdelghafor Elgharbaoui","Aymane Maghouti","Hamza Motassim","Ossama Outmani"],
			},
			{
				title: "Patent-Analysis",
				tech: [SiPython, SiApachehadoop,SiApachespark,SiPowerbi],
				link: "https://github.com/nexossama/Patent-Analysis",
				cover: "/E-patent.png",
				gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
				description: "E-Patent is a comprehensive project aimed at analyzing patents related to Artificial Intelligence (AI) in education. Our project involves data collection, storage, transformation, and visualization using various big data technologies and frameworks. The primary goal is to provide personalized and general analyses of patents through a user-friendly web application.<br>During this project, I participated in collecting data from the European Patent Office (EPO) via the Open Patent Service (OPS) API, transforming it using PySpark, and conducting analysis and visualization with Power BI.",
				contributors: ["Abdelghafor Elgharbaoui","Aymane Maghouti","Hamza Motassim","Ossama Outmani"],
			}
		],
		"Other": [
			{
				title: "Desktop Student management system",
				tech: [SiPython, SiMysql],
				link: "https://www.linkedin.com/posts/ossama-outmani_application-innovation-collaboration-activity-7086790148985606144-07U9?utm_source=share&utm_medium=member_desktop",
				cover: "/E-student.png",
				gradient: "from-green-500 via-green-600 to-green-700",
				description: "We developed a Python desktop application for managing students as part of an academic project. Despite the constraint of using only Tkinter for the UI, which resulted in a visually outdated interface, we overcame this challenge by creating custom widgets to enhance the user experience.<br>I was responsible for designing and developing the user interface. To address the limitations of Tkinter, I designed custom widgets using Photopea for their various states (hovered, clicked, etc.) and implemented them using object-oriented programming. This approach allowed us to create a more modern and functional UI while maintaining efficiency and reducing redundancy.",
				contributors: ["Aymane Maghouti","Ossama Outmani"],
			}
		]
	};

	return (
		<section id="projects" className="container mx-auto px-4 py-12">
			<div className="flex justify-center -rotate-6 relative mb-12">
				<Title
					className="flex justify-center "
					text="Projects 🚀"
					width="w-32"
				/>
			</div>
			<Tabs defaultValue="aiml" className="w-full">
				<TabsList className="grid w-full h-auto grid-cols-3 mb-6 gap-2 sm:grid-cols-3">
					<TabsTrigger value="aiml" className="text-xs sm:text-sm whitespace-normal h-full py-2">AI and ML</TabsTrigger>
					<TabsTrigger value="dataeng" className="text-xs sm:text-sm whitespace-normal h-full py-2">Data Engineering and BI</TabsTrigger>
					<TabsTrigger value="other" className="text-xs sm:text-sm whitespace-normal h-full py-2">Other</TabsTrigger>
				</TabsList>
				
				<TabsContent value="aiml">
					<ProjectTabContent 
						projects={Projects["AI and ML"]} 
						selectedProject={selectedProject}
						setSelectedProject={setSelectedProject}
						Contributors={Contributors}
					/>
				</TabsContent>
				
				<TabsContent value="dataeng">
					<ProjectTabContent 
						projects={Projects["Data Engineering and BI"]} 
						selectedProject={selectedProject}
						setSelectedProject={setSelectedProject}
						Contributors={Contributors}
					/>
				</TabsContent>
				
				<TabsContent value="other">
					<ProjectTabContent 
						projects={Projects["Other"]} 
						selectedProject={selectedProject}
						setSelectedProject={setSelectedProject}
						Contributors={Contributors}
					/>
				</TabsContent>
			</Tabs>
		</section>
	);
}
