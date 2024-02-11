import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Portfolio from '../components/UI/PortfolioSections/PortfolioTeaser';
import ListItem from '../components/UI/ListItem';

import API from '../utils/API';

export default function AboutMePage() {
  // Prior to the return statement, our about page uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    const { data } = await API.getProjects();

    setProjects(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Iterate over each mock project to display their abridged portfolio data and a link to their page
  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        {projects.map((project) => (
          <ListItem key={project.id}>
            <Portfolio project={project} />
            {/* Link elements are anchors under-the-hood, but they allow the routing behavior to be controlled by the client rather than the server */}
            <Link
              to={`/portfolio/${project.id}`}
              className="badge bg-primary rounded-pill"
            >
              See More
            </Link>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
