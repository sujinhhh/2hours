import PortHeader from "./PortHeader";
import Portfolio01 from "./Portfolio01";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Portfolio01 />
    </motion.div>
  );
};

export default Portfolio;
