import { Section } from "lucide-react";
import Header from "../components/Header";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Header />
      <div className="flex flex-col px-2 md:flex-row min-h-screen max-w-6xl mx-auto py-10 gap-5">
        <div className="w-full flex flex-col gap-10 py-20">
          <h1 className="text-6xl text-yellow-400 font-bold">
            Meet the Founder!
          </h1>

          <p>
            I’m Dheeraj, a technologist from Delhi with expertise in React
            Development, Artificial Intelligence (AI), Data Analytics, AWS, and
            SaaS Consulting. I specialize in creating dynamic, user-centric web
            applications with React, leveraging AI and data insights to solve
            complex problems, and optimizing cloud infrastructure with AWS. With
            experience in SaaS consulting, I guide projects from ideation to
            successful deployment. Let’s connect to explore collaboration
            opportunities
          </p>
        </div>
        <div className="w-full  flex  px-4 py-10">
          <Image
            src="/dheerajnextjs.png"
            alt="about us"
            width={1000}
            height={1000}
            className="rounded-3xl  outline-pink-600/40"
          />
        </div>
      </div>
    </section>
  );
}
