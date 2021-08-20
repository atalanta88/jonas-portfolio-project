import React from "react";
import { useState, useEffect } from "react";

import { API_PROJECTS } from "../../../constants/api";
import ProjectItems from "./ProjectItems";
import ErrorMessage from "../../common/ErrorMessage";
import LoaderComponent from "../../common/Loading";

function ProjectsList() {
  const [project, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API_PROJECTS);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setProjectsList(json);
        } else {
          setError("A server error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorMessage message={`Error: ${error}`} />;
  }

  return (
    <>
      <section id="projects-section" className=" dark:bg-gray-800 py-20">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 ">
            {project.map(function (project) {
              const {
                id,
                project_name,
                project_grade,
                description,
                project_cover,
                technology_list,
                github_url,
                website_url,
                project_created_date,
              } = project;

              return (
                <ProjectItems
                  id={id}
                  project_name={project_name}
                  project_grade={project_grade}
                  description={description}
                  project_cover={project_cover}
                  technology_list={technology_list}
                  github_url={github_url}
                  website_url={website_url}
                  project_created_date={project_created_date}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsList;
