import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CustomButton = ({ option, handleOptionClick, currentSlide, randomPosition, apaTuhSize }) => {
  return (
    <motion.div
      key={option}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={
        option === "kyknya engga dulu dik"
          ? { position: "relative", top: randomPosition.top, left: randomPosition.left }
          : {}
      }
    >
      <Button
        className="w-full bg-pink-400 hover:bg-pink-500"
        style={option === "apa tuh?" && currentSlide === "7" ? { transform: `scale(${apaTuhSize})` } : {}}
        onClick={() => handleOptionClick(option)}
      >
        {option}
      </Button>
    </motion.div>
  );
};

export default CustomButton;
