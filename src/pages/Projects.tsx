import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Personal Website",
    description: "Built with React, TypeScript, and Tailwind.",
    link: "https://github.com/alejandro/personal-website",
  },
  {
    title: "Voceteo",
    description: "Video Essay",
    link: "https://hackingfromthesouth.mit.edu/2021/05/23/voceteo/",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;