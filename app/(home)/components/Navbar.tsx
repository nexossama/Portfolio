import { cn } from "@/lib/utils";
import { constants } from "buffer";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar({className}:{className?:string}) {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/ossama-outmani/",
      Label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      Link: "https://github.com/nexossama",
      Label: "Github",
      Icon: SiGithub,
    },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center",className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Outmani Ossama 👨🏻‍💻
      </h1>
      <div className="flex items-center gap-2">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link
              href={social.Link}
              key={index}
              aria-label={social.Label}
            >
              <Icon className="w-5 h-5 hover:scale-125 transition" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
