import { ExpressIcon } from "@/components/icons/express";
import { GitHubIcon } from "@/components/icons/github";
import { JavascriptIcon } from "@/components/icons/javascript";
import { NestIcon } from "@/components/icons/nest";
import { NextIcon } from "@/components/icons/next";
import { NodeIcon } from "@/components/icons/node";
import { NuxtIcon } from "@/components/icons/nuxt";
import { ReactIcon } from "@/components/icons/react";
import { ReactRouterIcon } from "@/components/icons/react-router";
import { TypescriptIcon } from "@/components/icons/typescript";
import { VueIcon } from "@/components/icons/vue";
import { Code, Terminal } from "lucide-react";
import { motion } from "motion/react";

export default function HeroElements() {
  const orbitIcons = [
    { Icon: ReactIcon, color: "text-cyan-400" },
    { Icon: NextIcon, color: "text-white" },
    { Icon: ReactRouterIcon, color: "text-red-500" },
    { Icon: NuxtIcon, color: "text-green-400" },
    { Icon: VueIcon, color: "text-green-500" },
    { Icon: NestIcon, color: "text-red-600" },
    { Icon: ExpressIcon, color: "text-gray-300" },
  ];

  const planetIcons = [
    { Icon: JavascriptIcon, color: "text-yellow-400" },
    { Icon: TypescriptIcon, color: "text-blue-400" },
    { Icon: Code, color: "text-purple-400" },
    { Icon: Terminal, color: "text-green-400" },
    { Icon: NodeIcon, color: "text-green-500" },
    { Icon: GitHubIcon, color: "text-gray-300" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative flex items-center justify-center xl:justify-end my-32 md:my-16 xl:my-8"
    >
      {/* Main Visual Container */}
      <div className="relative w-full max-w-md lg:max-w-lg">
        {/* Central Programming Planet */}
        <div className="relative aspect-square flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-slate-600/50 backdrop-blur-sm shadow-2xl overflow-hidden"
          >
            {/* Planet atmosphere effect */}
            <div className="absolute z-50 inset-1 rounded-full bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-green-900/10 opacity-50" />

            {/* Tech Icons moving inside planet */}
            {planetIcons.map(({ Icon, color }, index) => (
              <motion.div
                key={index}
                animate={{
                  x: [0, Math.sin(index) * 25, Math.cos(index) * 20, Math.sin(index + 1) * 15, 0],
                  y: [0, Math.cos(index) * 10, Math.sin(index) * 15, Math.cos(index + 1) * 18, 0],
                  rotate: [0, 15 * (index % 2 === 0 ? 1 : -1), -10 * (index % 2 === 0 ? 1 : -1), 5, 0],
                }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.8,
                }}
                className="absolute"
                style={{
                  top: `${20 + (index % 3) * 25}%`,
                  left: `${15 + (index % 4) * 20}%`,
                }}
              >
                <Icon className={`h-4 w-4 ${color} opacity-80`} />
              </motion.div>
            ))}

            {/* Planet surface details */}
            <div className="absolute top-4 right-6 w-2 h-2 rounded-full bg-blue-400/30 opacity-50" />
            <div className="absolute bottom-6 left-4 w-3 h-3 rounded-full bg-purple-400/20 opacity-50" />
            <div className="absolute top-8 left-10 w-1 h-1 rounded-full bg-green-400/40 opacity-50" />
          </motion.div>

          {/* 7 Orbital Rings with Framework Icons */}
          {orbitIcons.map(({ Icon, color }, index) => {
            const radius = 100 + index * 28; // Orbit radius
            const duration = 12 + index * 3; // Speed
            const direction = index % 2 === 0 ? 360 : -360; // Direction

            return (
              <motion.div
                key={index}
                animate={{ rotate: direction }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border border-gray-600/10"
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  top: "50%",
                  left: "50%",
                  marginTop: `-${radius}px`,
                  marginLeft: `-${radius}px`,
                }}
              >
                <motion.div
                  animate={{ rotate: -direction }}
                  transition={{ duration, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="w-6 h-6 rounded-full bg-gray-900/70 backdrop-blur-sm border border-gray-600/40 flex items-center justify-center shadow-lg"
                  >
                    <Icon className={`w-3 h-3 ${color}`} />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Glow effect for the planet */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-green-900/10 blur-xl z-10 opacity-80" />
        </div>
      </div>
    </motion.div>
  );
}
