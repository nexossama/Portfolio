"use client";

import { Briefcase, MapPin, Calendar, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import Title from "./Title";

interface InternshipDetail {
	company: string;
	role: string;
	title: string;
	description: string;
	responsibilities: string[];
	technologies: string[];
	period: string;
	location: string;
}

const internships: InternshipDetail[] = [
	{
		company: "ISICOD Rabat",
		role: "Intern as Computer Vision Research Engineer",
		title:
			"Building a Deep Learning model for Fingerprint Classification and Ridge Counting",
		description: `
    <div>
        <div class="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Key challenges</h4>
            <ul class="list-disc list-inside space-y-1">
                <li>Lack of a labeled dataset for either classification or ridge counting.</li>
                <li>High variability in fingerprint appearance due to different acquisition methods and sensors used.</li>
            </ul>
        </div>
    </div>
`,
		responsibilities: [
			"Built a robust fingerprint labeling dataset pipeline that accounts for variations in images.",
			"Built and benchmark multiple CNN architectures adapted for both classification and regression.",
			"Justified and explain the model's behavior using Explainable AI (Grad-CAM).",
		],
		technologies: [
			"Python",
			"Pytorch"
		],
		period: "February 2025 - Now",
		location: "Remote",
	},
	{
		company: "Shiftbricks",
		role: "Intern as Fullstack and RAG Developer",
		title: "AI Multi-Service Platform for Moroccan Law Assistance",
		description: `
            <div>
                <div class="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <div><strong>Browser:</strong> Facilitates easy navigation and access to Moroccan law documents.</div>
                    <div><strong>Researcher:</strong> Semantic search engine for retrieving law-related information.</div>
                    <div><strong>AI Assistant:</strong> AI chatbot that interacts with users and answers questions about Moroccan law.</div>
                </div>
            </div>
        `,
		responsibilities: [
			"Designed a flexible database structure to store various types of law documents alongside their embedding vectors",
			"Developed a solution allowing seamless switching between different large language models (LLMs) and vector databases using the Factory Design Pattern",
		],
		technologies: [
			"FastAPI",
			"Next.js",
			"MongoDB",
			"Cohere",
			"Retrieval-Augmented Generation (RAG)",
			"Large Language Models",
		],
		period: "Summer 2024",
		location: "Remote",
	},
];

export default function Internships() {
	return (
		<div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
			<div className="flex justify-center -rotate-6 relative mb-12">
				<Title
					className="flex justify-center"
					text="Experiences 💼"
					width="w-48"
				/>
			</div>

			<div className="max-w-4xl mx-auto">
				{internships.map((internship, index) => (
					<div
						key={`internship-${index}`}
						className="border-l-4 border-blue-500 pl-6 py-6 relative group"
					>
						<div
							className="absolute -left-[calc(1rem+1px)] top-4
                            w-6 h-6 bg-blue-100 dark:bg-blue-900 
                            rounded-full flex items-center justify-center 
                            group-hover:bg-blue-200 dark:group-hover:bg-blue-800 
                            transition-all duration-300"
						>
							<Briefcase
								size={16}
								className="text-blue-500"
							/>
						</div>

						<div className="space-y-3">
							<div className="flex justify-between items-start">
								<div>
									<h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
										{internship.role}
									</h3>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-400">
										{internship.company}
									</p>
								</div>
								<div className="text-right">
									<div className="flex items-center text-xs text-gray-500 dark:text-gray-500 space-x-2">
										<Calendar
											size={14}
											className="text-blue-500"
										/>
										<span>{internship.period}</span>
									</div>
									<div className="flex items-center text-xs text-gray-500 dark:text-gray-500 space-x-2">
										<MapPin
											size={14}
											className="text-blue-500"
										/>
										<span>{internship.location}</span>
									</div>
								</div>
							</div>

							<div className="space-y-2">
								<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
									{internship.title}
								</h4>
								<div
									dangerouslySetInnerHTML={{ __html: internship.description }}
								/>
							</div>

							<div className="space-y-2">
								<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
									Key Responsibilities
								</h4>
								<ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
									{internship.responsibilities.map((resp, respIndex) => (
										<li key={`resp-${respIndex}`}>{resp}</li>
									))}
								</ul>
							</div>

							<div className="mt-3">
								<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
									Technologies Used
								</h4>
								<div className="flex flex-wrap gap-2">
									{internship.technologies.map((tech, techIndex) => (
										<span
											key={`tech-${techIndex}`}
											className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
