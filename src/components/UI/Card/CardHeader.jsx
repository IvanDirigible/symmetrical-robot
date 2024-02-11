import PortfolioTeaser from '../PortfolioSections/PortfolioTeaser';

export default function CardHeader({ project }) {
  return (
    <div className="card-header">
      <PortfolioTeaser project={project} />
      <a href={`tel:${project.phone}`} className="ms-2 me-auto">
        {project.phone}
      </a>
    </div>
  );
}
