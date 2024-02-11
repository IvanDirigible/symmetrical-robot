import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';

export default function PortfolioDetailed({ project }) {
  return (
    <div className="card">
      <CardHeader project={project} />
      <CardBody company={project.company} address={project.address} />
    </div>
  );
}
