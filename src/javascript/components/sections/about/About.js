import portraitImage from "../../../../media/jonas-portrait.jpg";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const gitHubUrl = "www.github.com/atalanta88";
const linkedIn = "www.linkedin.com/in/jonas-olden-0500b0191";

export default function AboutSection() {
  return (
    <>
      {" "}
      <section
        id="about-section"
        className=" bg-gray-100 text-gray-600 body-font mt-18 pb-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Om meg
              <br className="hidden lg:inline-block"></br>
            </h1>
            <p className="mb-8 leading-relaxed">
              Jeg heter Jonas, er 32 år og bor i Sandefjord. Jeg har nylig
              avsluttet utdanning I Front-end utvikling ved Noroff. Etter en
              yrkesskade i min tidligere jobb som taktekker, fikk jeg en
              mulighet til å velge en annen retning. Jeg kom fort frem til at
              jeg ville jobbe Innen IT. Jeg har alltid hatt interesse for
              teknologi og blitt tiltrukket av det å løse problemer, så
              Front-end ble en attraktiv og naturlig yrkesretning for meg å søke
              mot.
            </p>
            <p className="mb-8 leading-relaxed">
              Tiden på Noroff har vært veldig lærerik, men jeg merker jeg ivrer
              etter å lære mer og utvikle meg innenfor faget i arbeid. Andre
              omtaler meg gjerne som arbeidsom, holdningssterk og med god
              avtalelojalitet – påstander jeg kjenner meg igjen i. Jeg er også
              nysgjerrig av natur, så jeg ser frem med spenning på å ta stegene
              ut i arbeidslivet på ny til fordel for skolebenken.
            </p>
            <div className="pt-8 flex border-t border-gray-200 w-20 text-gray-500 justify-between">
              <a
                className="cursor-pointer"
                onClick={() => openInNewTab(`//${gitHubUrl}`)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                </svg>
              </a>
              <a
                className="cursor-pointer"
                onClick={() => openInNewTab(`//${linkedIn}`)}
              >
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-full"
              alt="hero"
              src={portraitImage}
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}
