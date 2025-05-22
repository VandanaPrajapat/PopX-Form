"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

function WelcomeScreen() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto"
      >
        <div className="glass-card !bg-white/30 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden p-8 relative">
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-800 flex items-center justify-center animated-gradient"
            >
              <span className="text-white text-3xl font-bold">PopX</span>
            </motion.div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
                Welcome to PopX
              </h1>
              <p className="!text-gray-600 dark:text-gray-300">
                Your gateway to the future of digital experiences.
              </p>
            </div>

            <div className="space-y-4 w-full pt-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/register" className="block w-full">
                  <Button
                    className="w-full py-6 text-lg font-medium rounded-xl glass-button"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    Create Account
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/login" className="block w-full">
                  <Button
                    variant="outline"
                    className="w-full py-6 text-lg font-medium !bg-white !text-[#8200db] rounded-xl glass-button"
                  >
                    Already Registered? Login
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default WelcomeScreen;
