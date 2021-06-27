import React from "react";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function ProjectItems({
  id,
  project_name,
  description,
  project_type,
  project_cover,
  website_url,
  github_url,
  technology_list,
}) {
  return (
    <>
      <div
        key={id}
        className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
          <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
              {project_name}
            </h3>
            <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
              {description}
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                  What&#x27;s included
                </h4>
                <div className="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                {" "}
                {technology_list.map((item) => (
                  <>
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="6"
                          stroke="currentColor"
                          fill="#10b981"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        {item.technology_item}
                      </p>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p className="text-lg leading-6 font-bold text-gray-900 dark:text-white">
              Free
            </p>
            <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
              <span>$0/mo</span>
            </div>
            <p className="mt-4 text-sm leading-5">
              <span className="block font-medium text-gray-500 dark:text-gray-400">
                Card payments:
              </span>
              <span className=" inline-block font-medium text-gray-500 dark:text-gray-400">
                2.9% + 20p per transaction
              </span>
            </p>
            <div className="mt-6">
              <div className="rounded-md shadow">
                <button
                  type="button"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Create your store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectItems;
