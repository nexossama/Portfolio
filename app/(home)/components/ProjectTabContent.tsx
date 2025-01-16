"use client";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import { FiExternalLink } from "react-icons/fi";
import { useRef, useState, useEffect } from 'react';

// Define the types based on the original Projects.tsx
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

export default function ProjectTabContent({ 
    projects, 
    selectedProject, 
    setSelectedProject, 
    Contributors 
}: { 
    projects: Project[], 
    selectedProject: Project | null, 
    setSelectedProject: (project: Project | null) => void,
    Contributors: Record<string, ContributorInfo>
}) {
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());

    useEffect(() => {
        const observers = projectRefs.current.map((ref, index) => {
            if (!ref) return null;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleProjects(prev => new Set(prev.add(index)));
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { 
                    threshold: 0.2, 
                }
            );

            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer?.disconnect());
        };
    }, [projects.length]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
                <div 
                    key={`project-${idx}`}
                    ref={(el) => {
                        projectRefs.current[idx] = el;
                    }}
                >
                    <Dialog>
                        <DialogTrigger asChild>
                            <div 
                                className={cn(
                                    "p-5 rounded-md cursor-pointer relative overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                                    "bg-gradient-to-br",
                                    project.gradient,
                                    // "text-white" // Ensure text is visible on gradient background
                                                                )}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative overflow-hidden rounded-md group">
                                    <Image 
                                        src={project.cover} 
                                        alt={project.title} 
                                        width={500} 
                                        height={300} 
                                        className={cn(
                                            "w-full h-64 object-cover rounded-md transition-transform duration-700 ease-out",
                                            visibleProjects.has(idx) 
                                                ? "group-hover:scale-110" 
                                                : "opacity-0 translate-y-10"
                                        )}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
                                        <h1 className="font-bold text-lg text-white">{project.title}</h1>
                                        <div className="flex items-center gap-3 mt-1">
                                            {project.tech.map((Icon, idx) => (
                                                <Icon key={idx} className="w-5 h-5 text-white"/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogTrigger>
                        {selectedProject && selectedProject.title === project.title && (
                            <DialogContent className="md:min-w-[800px] md:max-w-[1200px] w-[90vw]">
                                <DialogHeader>
                                    <DialogTitle>{selectedProject.title}</DialogTitle>
                                    <DialogDescription>
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <Image
                                                src={selectedProject.cover}
                                                alt={`${selectedProject.title} project thumbnail`}
                                                width={800}
                                                height={500}
                                                className="
                                                    w-full 
                                                    md:w-1/2 
                                                    rounded-lg 
                                                    object-contain
                                                    max-h-[500px]
                                                "
                                            />
                                            <div className="space-y-4 text-left">
                                                <div>
                                                    <h3 className="font-semibold">Description:</h3>
                                                    <div 
                                                        className="prose dark:prose-invert"
                                                        dangerouslySetInnerHTML={{ __html: selectedProject.description }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">Tech Stack:</h3>
                                                    <ul className="flex items-center gap-3 mt-2 list-none pl-0">
                                                        {selectedProject.tech.map((Icon, idx) => (
                                                            <li key={idx}>
                                                                <Icon className="w-6 h-6"/>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">Contributors:</h3>
                                                    <ul className="list-disc pl-5">
                                                        {selectedProject.contributors.map((contributorName, idx) => {
                                                            const contributor = Contributors[contributorName];
                                                            return contributor ? (
                                                                <li key={idx}>
                                                                    <Link 
                                                                        href={contributor.profileLink} 
                                                                        target="_blank" 
                                                                        rel="noopener noreferrer"
                                                                        className="
                                                                            text-muted-foreground 
                                                                            hover:text-green-600 
                                                                            transition-colors 
                                                                            duration-300 
                                                                            hover:underline 
                                                                            flex 
                                                                            items-center 
                                                                            gap-1
                                                                            font-medium
                                                                            group
                                                                            focus:outline-none 
                                                                            focus:ring-2 
                                                                            focus:ring-green-600/30 
                                                                            rounded-sm
                                                                        "
                                                                    >
                                                                        {contributor.name}
                                                                        <FiExternalLink className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                                                                    </Link>
                                                                </li>
                                                            ) : null;
                                                        })}
                                                    </ul>
                                                </div>
                                                <div className="mt-4">
                                                    <Link 
                                                        href={selectedProject.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="
                                                            inline-flex 
                                                            items-center 
                                                            gap-2 
                                                            px-4 
                                                            py-2 
                                                            bg-green-600 
                                                            text-white 
                                                            rounded-md 
                                                            hover:bg-green-700 
                                                            transition-colors
                                                        "
                                                    >
                                                        View Project
                                                        <FiExternalLink />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        )}
                    </Dialog>
                </div>
            ))}
        </div>
    );
}
