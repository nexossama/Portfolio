"use client";

import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import Title from "./Title";

interface EducationDetail {
    title: string;
    institution: string;
    period: string;
    description: string[];
    location: string;
}

const educationHistory: EducationDetail[] = [
    {
        title: "3rd year Data Engineering student",
        institution: "National School of Applied Science of Al Hoceima (ENSAH)",
        period: "2022 - Present",
        description: [
            "Acquiring fundamental skills in Data Engineering , Machine Learning and Business Intelligence",
            "Developing comprehensive skills in data-driven technologies"
        ],
        location: "Al Hoceima, Morocco"
    },
    {
        title: "Preparatory Classes in Mathematics and Physics",
        institution: "National School of Applied Science of Al Hoceima (ENSAH)",
        period: "2020 - 2022",
        description: [
            "Acquisition of basic theoretical skills for an engineer",
        ],
        location: "Al Hoceima, Morocco"
    },
    {
        title: "High School Diploma in Mathematical Sciences",
        institution: "High School",
        period: "2017 - 2020",
        description: [
            "Developed foundational scientific knowledge",
            "Specialized in Mathematical Sciences"
        ],
        location: "Tetouan, Morocco"
    }
];

export default function Education() {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
            <div className="flex justify-center -rotate-6 relative mb-12">
                <Title
                    className="flex justify-center"
                    text="Educational Journey 🎓"
                    width="w-72"
                />
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-700 dark:to-blue-900 h-full" />

                <div className="space-y-8 relative">
                    {educationHistory.map((education, index) => (
                        <div 
                            key={`education-${index}`}
                            className={cn(
                                "flex items-center w-full",
                                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                            )}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 z-10" 
                                 style={{ top: `${index * 33.33}%` }} 
                            />

                            {/* Content */}
                            <div className="w-1/2 px-4">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">
                                        {education.title}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {education.institution}
                                    </p>
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-2">
                                        <Calendar size={16} className="text-blue-500" />
                                        <span>{education.period}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-2">
                                        <MapPin size={16} className="text-blue-500" />
                                        <span>{education.location}</span>
                                    </div>
                                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 mt-2">
                                        {education.description.map((desc, descIndex) => (
                                            <li key={`desc-${descIndex}`}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}