// Will adjust later
import axios from 'axios';

const getProjects = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users/');
};

const getSingleProject = (paramId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${paramId}`);
};

export default {
  getProjects,
  getSingleProject,
};
