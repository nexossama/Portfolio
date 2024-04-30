import { link } from "fs";
import { Covered_By_Your_Grace } from "next/font/google";
import { title } from "process";
import React from "react";
import {
	SiMysql,
	SiNumpy,
	SiPandas,
	SiPython,
	SiStreamlit,
	SiTensorflow,
} from "react-icons/si";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";

export default function Projects() {
	const Projects = [
		{
			title: "Fooling AI image classifier",
			tech: [SiPython, SiTensorflow],
			link: "https://www.linkedin.com/posts/ossama-outmani_adversarial-examples-on-image-classifiers-activity-7183191847349997568-BvL3?utm_source=share&utm_medium=member_desktop",
			cover: "/Fooling_screen.png",
			background: "bg-indigo-500",
		},
		{
			title: "Titanic survival prediction",
			tech: [SiPython, SiNumpy, SiPandas, SiStreamlit],
			link: "https://www.linkedin.com/posts/aymane-maghouti_application-innovation-collaboration-activity-7086787315267723264-ILS0?utm_source=share&utm_medium=member_desktop",
			cover: "/titanic_survivor.png",
			background: "bg-green-500",
		},
		{
			title: "Desktop Student management system",
			tech: [SiPython, SiMysql],
			link: "https://www.linkedin.com/posts/aymane-maghouti_application-innovation-collaboration-activity-7086787315267723264-ILS0?utm_source=share&utm_medium=member_desktop",
			cover: "/E-student.png",
			background: "bg-green-500",
		},
		{
			title: "Desktop Student management system",
			tech: [SiPython, SiMysql],
			link: "https://www.linkedin.com/posts/aymane-maghouti_application-innovation-collaboration-activity-7086787315267723264-ILS0?utm_source=share&utm_medium=member_desktop",
			cover: "/E-student.png",
			background: "bg-indigo-500",
		},
	];

	return (
		<div>
			<div className="flex justify-center rotate-6 relative">
				<Title
					className="flex justify-center "
					text="Projects 🧩"
					width="w-40"
				/>
			</div>
			<div className="gap-5 grid grid-cols-1 md:grid-cols-2 pt-10">
				{Projects.map((project, idx) => {
					
					return (
						<Link
							key={idx}
							href={project.link}
						>
                            <div className={cn("p-5 rounded-md", project.background)}>
                                <DirectionAwareHover imageUrl={project.cover} className="w-full md:h-80 space-y-5 cursor-pointer">
									<h1 className="font-bold">{project.title}</h1>
									<div className="flex items-center gap-3" >
										{project.tech.map((Icon,idx)=>{
											return <Icon key={idx} className="w-5 h-5"/>
										})}
									</div>
								</DirectionAwareHover>
                            </div>
                        </Link>
					);
				})}
			</div>
		</div>
	);
}
