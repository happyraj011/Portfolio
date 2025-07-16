import { TbBrandGithub } from "react-icons/tb";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import { BiLogoLinkedin } from "react-icons/bi";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/happyraj011" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor hover:bg-iconHover rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer group hover:-translate-y-1 transition-transform duration-300">
            <TbBrandGithub className="group-hover:scale-110" />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/happy-raj-543792257" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor hover:bg-iconHover rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer group hover:-translate-y-1 transition-transform duration-300">
            <BiLogoLinkedin className="group-hover:scale-110" />
          </span>
        </a>
       
        <a href="https://www.codechef.com/users/happyraj001" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor hover:bg-iconHover rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer group hover:-translate-y-1 transition-transform duration-300">
            <SiCodechef className="group-hover:scale-110" />
          </span>
        </a>
        <a href="https://codeforces.com/profile/kingraj02" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor hover:bg-iconHover rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer group hover:-translate-y-1 transition-transform duration-300">
            <SiCodeforces className="group-hover:scale-110" />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-24 bg-textDark"></div>
    </div>
  );
}

export default LeftSide