import React from "react";
import { useState, useEffect } from "react";

import { API_HOUSINGS } from "../../../constants/api";
import ProjectItems from "./ProjectItems";
import ErrorMessage from "../../common/ErrorMessage";
import LoaderComponent from "../../common/Loading";
import SortSelect from "./SortSelect";

function ProjectsList() {
  const [housing, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API_HOUSINGS);

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
      <section className="bg-white dark:bg-gray-800 py-10">
        <div class="container mx-auto ">
          <SortSelect />
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {housing.map(function (housing) {
              const { id, name, adress, description, price, type, imageone } =
                housing;

              return (
                <ProjectItems
                  key={id}
                  id={id}
                  name={name}
                  adress={adress}
                  description={description}
                  price={price}
                  type={type}
                  imageone={imageone}
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
