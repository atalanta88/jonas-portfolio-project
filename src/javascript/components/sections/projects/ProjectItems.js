import React from "react";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function ProjectItems({
  id,
  project_name,
  description,
  project_grade,
  project_cover,
  website_url,
  github_url,
  technology_list,
  project_created_date,
}) {
  return (
    <>
      <div
        key={id}
        className="max-w-sm mx-auto overflow-hidden bg-gray-100 rounded-lg  dark:bg-gray-800"
      >
        <img
          className="object-cover object-center w-full h-56"
          src={project_cover.url}
          alt="avatar"
        ></img>

        <div className="flex  items-center px-6 py-3">
          <svg
            className="w-6 h-6 text-green-500 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8l4 4-4 4M8 12h7" />
          </svg>

          <h2 className="mx-3  text-lg font-semibold text-gray-600">
            Karakter/Status: {project_grade}
          </h2>
        </div>

        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {project_name}
          </h2>

          <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 bg-gray-100 dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-gray-600">
                Teknologi
              </h4>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
              {technology_list.map((item) => (
                <>
                  <li className="mt-1 md:mt-3">
                    <div className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-300 text-white dark:text-white dark:bg-transparent">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                        {item.technology_item}
                      </span>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </div>
          <div className="container mx-auto">
            <div className="flex items-center mt-8 ">
              <h4 className="flex-shrink-0 pr-4 bg-gray-100 dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-gray-600">
                Se mer
              </h4>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
              <div>
                {" "}
                <button
                  onClick={() => openInNewTab(`//${website_url}`)}
                  type="button"
                  className="py-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-600 focus:ring-green-600 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                >
                  Nettside
                </button>
              </div>
              <div>
                {" "}
                <button
                  onClick={() => openInNewTab(`//${github_url}`)}
                  type="button"
                  className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                  Se koden
                </button>
              </div>
            </div>{" "}
          </div>

          <div className="flex items-center mt-4 ">
            <p className="text-gray-400 dark:text-gray-300">
              År: {project_created_date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectItems;
