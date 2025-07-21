import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })}
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        <ChevronDown className="size-8 text-muted-foreground" />
      </motion.div>
    </motion.div>
  );
}
