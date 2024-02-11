import Portfolio from '../components/UI/Portfolio/Portfolio';
import CardView from '../components/UI/Portfolio/CardView';
import ProjectData from '../ProjectData';

export default function PortfolioPage() {
  const projects = [
    {
      image: {
        link: "./src/assets/images/Kitten-Yarn.jpg",
        altText: "It's a kitten"
      },
      text: {
        title: "Kitten App",
        module: "React",
      },
      link: {
        repo: "https://github.com/IvanDirigible",
        deployed: "https://cdn.shopify.com/s/files/1/0997/4496/articles/Do_kittens_shed_f9917858-b52f-4192-bf8e-4f46ed98e9aa.jpg?v=1698540349"
      }
    }
  ];
  return (
    <>
      {projects.map((project, index) => (
        <CardView key={index}>
          {project.text.title ? <Portfolio project={project} /> : <p>Loading...</p>}
        </CardView>
      ))}
    </>
  );
}
