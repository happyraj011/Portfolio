import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

interface companyProps {
  name: string;
  company: string;
  duration: string;
  points: string[];
}

const Company = ({ name, company, duration, points }: companyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="w-full"
    >
      <h3 className="flex flex-wrap items-center gap-2 text-lg sml:text-2xl  text-white font-sans">
        {name}
        <span className="text-textGreen tracking-wide">@{company}</span>
      </h3>

      <p className="text-xs sml:text-sm mt-2 text-textDark font-medium italic">
        {duration}
      </p>

      <ul className="mt-6 flex flex-col gap-4">
        {points.map((point, index) => (
          <li
            key={index}
            className="text-sm sm:text-base flex items-start gap-3 text-textLight leading-relaxed"
          >
            <span className="text-textGreen mt-1">
              <TiArrowForward size={18} />
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Company;
