type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-2 inline-block">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;