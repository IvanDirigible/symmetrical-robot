import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from 'react-router-dom';
import Portfolio from '../components/UI/PortfolioSections/PortfolioDetailed';
import { CardItem, Container } from '../components/UI/CardView';

import API from '../utils/API';

export default function PortfolioPage() {
  const [projects, setProjects] = useState({});

  // The useParams hook will yield an object. Its keys match the parameters defined on each route. Its values match the current URL value in those parameter locations
  const { id } = useParams();

  // const fetchData = async () => {
  //   const { data } = await API.getSingleProject(id);

  //   setProject(data);
  // };
  const fetchData = async () => {
    const { data } = await API.getProjects();

    setProjects(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        {projects.map((project) => (
          // <CardItem key={project.id}>
          <Container key={project.id}>
            {project.name ? <Portfolio project={project} /> : <p>Loading...</p>}
            </Container>
          // {/* </CardItem> */}
        ))}
      </ul>
    </div>
  );
}

  // return (
  //   <>
  //     <Container>
  //       {/* Conditionally render the full portfolio or a Loading string, depending on whether project data is available */}
  //       {project.name ? <Portfolio project={project} /> : <p>Loading...</p>}
  //     </Container>
  //     <footer className="portfolio-footer">
  //       {/* Link the project back to the about page. The to prop is used in place of an href */}
  //       <Link to="/">← Go Back</Link>
  //     </footer>
  //   </>
  // );
// }
