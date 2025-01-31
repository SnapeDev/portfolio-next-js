import Nav from "../components/Nav"; // Import the Nav component

const Projects = () => {
  return (
    <div className="bg-white text-black">
      {/* Use the Nav component */}
      <Nav />

      {/* Projects Section */}
      <section className="py-10 transform scale-80 origin-top-center">
        <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center">
          <span className="text-blue-600 mr-2">&#9632;</span> My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 font-sans">
          {/* Project 2 */}
          <div className="bg-white w-full shadow-lg p-5 flex items-center gap-10 relative">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-700 mb-2 pl-4 ml-[-1.2rem] relative">
                Weather App
                <span className="absolute left-0 top-[-0.5rem] bottom-[-0.5rem] w-9 border-l-8 border-black-600"></span>
              </h3>
              <p className="text-black-600 font-sans font-extralight text-base mb-20">
                Designed a weather app, built with Next.js, React, and
                JavaScript, connects to an API to provide real-time weather
                data, offering a fast and interactive user experience.
              </p>
              <a
                href="https://weatherapi-steel.vercel.app/"
                target="_blank"
                className="inline-block bg-blue-600 text-white text-sm rounded-full px-5 py-1 hover:bg-blue-700"
              >
                Live
              </a>
            </div>
            <div className="w-1/2 flex-shrink-0">
              <img
                src="/images/weather.png"
                alt="Weather Api"
                className="w-auto h-auto"
              />
            </div>
          </div>

          {/* Project 1 */}
          <div className="bg-white w-full shadow-lg p-5 flex items-center gap-10 relative">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-700 mb-2 pl-4 ml-[-1.2rem] relative">
                Friend Ferry
                <span className="absolute left-0 top-[-0.5rem] bottom-[-0.5rem] w-9 border-l-8 border-black-600"></span>
              </h3>
              <p className="text-black-600 font-sans font-extralight text-base mb-20">
                Developed a website that allows users to find and book
                companions to accompany them to social events. Front-end was
                built using Figma, HTML, CSS, and JavaScript while the back-end
                was put together with Supabase.
              </p>
              <a
                href="https://friendferry.com/"
                target="_blank"
                className="inline-block bg-blue-600 text-white text-sm rounded-full px-5 py-1 hover:bg-blue-700"
              >
                Live
              </a>
            </div>
            <div className="w-1/2 flex-shrink-0">
              <img
                src="/images/friend.png"
                alt="Friend Ferry"
                className="w-auto h-auto"
              />
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-white w-full shadow-lg p-5 flex items-center gap-10 flex-row-reverse relative">
            <div className="w-1/2 flex-shrink-0">
              <img
                src="/images/grows.png"
                alt="Calculator Project"
                className="w-auto h-auto"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-700 mb-2 pl-4 ml-[-1.2rem] relative">
                Grow
                <span className="absolute left-0 top-[-0.5rem] bottom-[-0.5rem] w-9 border-l-8 border-black-600"></span>
              </h3>
              <p className="text-black-600 font-sans font-extralight text-base mb-20">
                Grow is a plant care tracker built with Next.js, React, and Node
                express + Mongo DB for the backend. It helps you monitor
                watering schedules and keeps your plants thriving.
              </p>
              <a
                href="https://plant-app-git-main-snapedevs-projects.vercel.app/"
                target="_blank"
                className="inline-block bg-blue-600 text-white text-sm rounded-full px-5 py-1 hover:bg-blue-700"
              >
                Live
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white w-full shadow-lg p-5 flex items-center gap-10 flex-row-reverse relative">
            <div className="w-1/2 flex-shrink-0">
              <img
                src="/images/todo.png"
                alt="Todo Project"
                className="w-auto h-auto"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-700 mb-2 pl-4 ml-[-1.2rem] relative">
                Task Tracker
                <span className="absolute left-0 top-[-0.5rem] bottom-[-0.5rem] w-9 border-l-8 border-black-600"></span>
              </h3>
              <p className="text-black-600 font-sans font-extralight text-base mb-20">
                A simple yet effective task tracker that allows the users to
                assign themselves multiple tasks for completion. The user can
                then select which ones have been completed and strike them off
                accordingly. Built using HTML, CSS + JavaScript.
              </p>
              <a
                href="http://snapetasktrack.netlify.app"
                target="_blank"
                className="inline-block bg-blue-600 text-white text-sm rounded-full px-5 py-1 hover:bg-blue-700"
              >
                Live
              </a>
            </div>
          </div>

          {/* Project 5 */}
          <div className="bg-white w-full shadow-lg p-5 flex items-center gap-10 flex-row-reverse relative">
            <div className="w-1/2 flex-shrink-0">
              <img
                src="/images/oop.png"
                alt="OOP Project"
                className="w-auto h-auto"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-700 mb-2 pl-4 ml-[-1.2rem] relative">
                Rabbit Game
                <span className="absolute left-0 top-[-0.5rem] bottom-[-0.5rem] w-9 border-l-8 border-black-600"></span>
              </h3>
              <p className="text-black-600 font-sans font-extralight text-base mb-20">
                A fun web-based game where the player helps a rabbit collect
                carrots. Built using object-oriented programming (OOP)
                principles, the game features interactive navigation.
              </p>
              <a
                href="https://snapedev.github.io/OOP/"
                target="_blank"
                className="inline-block bg-blue-600 text-white text-sm rounded-full px-5 py-1 hover:bg-blue-700"
              >
                Live
              </a>
            </div>
          </div>

          {/* Project 6 */}
          <div className="bg-white w-full shadow-lg p-5 flex items-center gap-10 relative">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-700 mb-2 pl-4 ml-[-1.2rem] relative">
                Hobby Site
                <span className="absolute left-0 top-[-0.5rem] bottom-[-0.5rem] w-9 border-l-8 border-black-600"></span>
              </h3>
              <p className="text-black-600 font-sans font-extralight text-base mb-20">
                A personal hobby site built using HTML and CSS. The site
                showcases various activities and interests, with a clean and
                simple layout to enhance user experience.
              </p>
              <a
                href="https://snapedev.github.io/hobbie-website/"
                target="_blank"
                className="inline-block bg-blue-600 text-white text-sm rounded-full px-5 py-1 hover:bg-blue-700"
              >
                Live
              </a>
            </div>
            <div className="w-1/2 flex-shrink-0">
              <img
                src="/images/hobby.png"
                alt="Hobby Site"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
