import Image, { StaticImageData } from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

interface projectProps {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  github: string;
  link: string;
  tech: string[];
}

const ProjectCard = ({ id, name, description, image, github, link, tech }: projectProps) => {
  // Determine whether the card is odd or even to alternate the layout
  const isEven = id % 2 === 0;

  return (
    <div className={`flex flex-col lg:flex-row items-center justify-between gap-6 mt-10 ${isEven ? "lg:flex-row-reverse" : ""}`}>
      {/* Image on the left or right based on the card order */}
      <a
        href={link}
        target="_blank"
        className="hover:scale-[1.01] duration-700 ease-in-out w-full lg:w-1/2 hover:shadow-2xl h-auto relative group"
      >
        <div>
          <Image
            className="w-[600px] object-contain rounded-md shadow-lg"
            src={image}
            alt={name}
          />
          <div className="absolute w-full h-full bg-black opacity-20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-700"></div>
        </div>
      </a>

      {/* Content on the right or left based on the card order */}
      <div className="w-full lg:w-1/2 flex flex-col gap-3 lg:justify-between items-start text-left">
        <div>
          <p className="font-sans text-textGreen text-sm tracking-wide">Featured Project</p>
          <h3 className="text-2xl font-bold">{name}</h3>
        </div>
        <p className="bg-[#112240] text-sm shadow-lg md:text-base p-2 md:p-4 rounded-md">
          {description}
        </p>
        <ul className="text-xs md:text-sm font-sans gap-1 flex flex-wrap justify-between text-textDark">
          {tech.map((t, index) => (
            <li
              key={index}
              className="w-fit text-textLight bg-hoverColor hover:bg-[#64ffdb2f] duration-700 px-2 py-1 rounded-md cursor-pointer"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="text-2xl flex gap-4">
          <a
            href={github}
            target="_blank"
            className="hover:text-textGreen text-textDark duration-500 w-fit hover:scale-110"
          >
            <TbBrandGithub />
          </a>
          <a
            href={link}
            target="_blank"
            className="hover:text-textGreen text-textDark duration-500 w-fit hover:scale-110"
          >
            <RxOpenInNewWindow />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
