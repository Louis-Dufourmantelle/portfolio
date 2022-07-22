import axios from "axios";
import { useEffect, useState } from "react";

export default function Project() {
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/project`
      )
      .then((response) => {
        setProjects(response.data);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div id="projets">
      <section>
        <h2>Projets</h2>
        {projects &&
          projects.map((project) => (
            <figure key={project.id}>
              <h3 className="p-2">{project.name}</h3>

              <figcaption>{project.description}</figcaption>
            </figure>
          ))}
      </section>
    </div>
  );
}
