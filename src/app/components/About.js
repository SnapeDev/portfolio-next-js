import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const techs = [
    {
      src: "https://static.wixstatic.com/media/348221_54f0d21956184662a004de36dd258827~mv2.png/v1/fill/w_50,h_50,al_c,q_85,enc_avif,quality_auto/icons8-html-50.png",
      alt: "HTML",
    },
    {
      src: "https://static.wixstatic.com/media/348221_81983f56e55044abb46e6cdc1b1d58c1~mv2.png/v1/fill/w_61,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/icons8-css-100.png",
      alt: "CSS",
    },
    {
      src: "https://static.wixstatic.com/media/348221_dcdeb526400b4c4a8244155fa534a47d~mv2.png/v1/fill/w_50,h_53,al_c,lg_1,q_85,enc_avif,quality_auto/icons8-javascript-50.png",
      alt: "JavaScript",
    },
    {
      src: "https://static.wixstatic.com/media/348221_b2f10e04f4604e0bb4e7dc0289da9630~mv2.png/v1/fill/w_50,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/icons8-node-js-64.png",
      alt: "Node.js",
    },
    {
      src: "https://static.wixstatic.com/media/348221_4692b31ff79e48c28e5dfdb4a79822f0~mv2.png/v1/fill/w_61,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/icons8-node-js-64.png",
      alt: "React.js",
    },
    {
      src: "https://static.wixstatic.com/media/348221_086cc3c255e946a4912c3bfefe8b0dd6~mv2.png/v1/fill/w_50,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/icons8-sql-100.png",
      alt: "SQL",
    },
    {
      src: "https://static.wixstatic.com/media/348221_e9cfb384a50e4861bf1e8a91097b9bc8~mv2.png/v1/fill/w_44,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/icons8-express-js-96.png",
      alt: "Express.js",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      alt: "GitHub",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-center items-center h-screen px-4 sm:px-10 transform md:scale-110 sm:scale-100 scale-90">
        {/* Left Section */}
        <div className="flex-[2_2_50%] flex justify-center items-center mb-10 md:mb-0 md:ml-10">
          <div className="bg-white shadow-[-8px_4px_10px_rgba(0,0,0,0.15)] rounded p-8 w-full max-w-[340px] min-w-[310px] md:h-[450px] md:ml-20 lg:mb-[150px] md:mb-[150px] sm:mb-[0px] text-center lg:ml-[350px]">
            <h2 className="text-xl font-bold mt-10 sm:mt-20 mb-2">Snape Dev</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500 mb-6 text-sm">
              SOFTWARE DEVELOPER AND PHOTOGRAPHER
            </p>
            <div className="flex justify-center gap-5 pt-4 border-t mb-20">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <Image
                  src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png"
                  alt="LinkedIn"
                  width={26}
                  height={28}
                />
              </a>
              <a
                href="https://github.com/SnapeDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500"
              >
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub"
                  width={27}
                  height={27}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-[1_1_50%] flex flex-col mb-20 justify-center items-center md:items-start mt-10 sm:mt-0 md:mt-0 md:mr-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hey, I'm <br />
            <span className="block text-blue-600">Snape</span> Dev
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            Full-Stack Software Developer + Photographer
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start gap-5">
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 rounded-full"
            >
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className="border border-black px-4 py-2 rounded hover:bg-gray-100 rounded-full"
            >
              CONTACT ME
            </Link>
          </div>

          {/* Tech Stack Section */}
          <div className="mt-12 ml-auto pr-8 w-full max-w-[500px] mr-20">
            <p className="text-blue-600 text-md mb-5 text-right">
              I work with.
            </p>
            <div className="flex gap-5 flex-wrap justify-end">
              {techs.map((tech, index) => (
                <Image
                  key={index}
                  src={tech.src}
                  alt={tech.alt}
                  width={35}
                  height={45}
                  className="h-8"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
