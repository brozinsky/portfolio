import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import { projects } from "@/lib/projects";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={"projects"}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

