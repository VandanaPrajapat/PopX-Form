"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Switch } from "./ui/Switch";
import { Label } from "./ui/Label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [isAgency, setIsAgency] = useState(true);
  const [userData, setUserData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate and pass state
    navigate("/register-display", {
      state: { userData, isAgency },
    });
  };

  return (
    <div className="flex min-h-screen  items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto"
      >
        <div className="glass-card !bg-white/30 rounded-3xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] overflow-hidden p-8 relative">
          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-3xl font-bold bg-clip-text !text-[#8200db] bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
                Create your
                <br />
                PopX account
              </h1>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2 relative group focus-within:text-purple-700 dark:focus-within:text-purple-300">
                <label htmlFor="fullName" className="block transition-colors">
                  Full Name*
                </label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                    onChange={(e) =>
                      setUserData({ ...userData, fullName: e.target.value })
                    }
                    required
                  />
                </motion.div>
              </div>

              <div className="space-y-2 relative group focus-within:text-purple-700 dark:focus-within:text-purple-300">
                <label htmlFor="phone" className="block transition-colors">
                  Phone number*
                </label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-xl !text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                    onChange={(e) =>
                      setUserData({ ...userData, phone: e.target.value })
                    }
                    required
                  />
                </motion.div>
              </div>

              <div className="space-y-2 relative group focus-within:text-purple-700 dark:focus-within:text-purple-300">
                <label htmlFor="email" className="block transition-colors">
                  Email address*
                </label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl !text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    required
                  />
                </motion.div>
              </div>

              <div className="space-y-2 relative group focus-within:text-purple-700 dark:focus-within:text-purple-300">
                <label htmlFor="password" className="block transition-colors">
                  Password*
                </label>
                <div className="relative">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="w-full px-4 py-3 rounded-xl !text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] pr-10"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(4px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                      onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                      }
                      required
                    />
                  </motion.div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 !text-gray-700 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2 relative group focus-within:text-purple-700 dark:focus-within:text-purple-300">
                <label htmlFor="company" className="block transition-colors">
                  Company name
                </label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Input
                    id="company"
                    type="text"
                    placeholder="Enter your company name"
                    className="w-full !bg-transparent px-4 py-3 rounded-xl !text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
                    style={{
                      backgroundColor: "#ffffff",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                    onChange={(e) =>
                      setUserData({ ...userData, company: e.target.value })
                    }
                    value={userData.company}
                  />
                </motion.div>
              </div>

              <div className="flex items-center justify-between py-2">
                <Label
                  htmlFor="agency-toggle"
                  className="!text-black font-medium dark:text-white"
                >
                  Are you an Agency?*
                </Label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="agency-toggle"
                      checked={isAgency}
                      onChange={setIsAgency}
                      className="focus:ring-2 focus:ring-[#7c3aed] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                    />
                    <Label
                      htmlFor="agency-toggle"
                      className="text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                      {isAgency ? "Yes" : "No"}
                    </Label>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <Button
                  type="submit"
                  className="w-full py-6 text-lg font-medium rounded-xl glass-button"
                >
                  Create Account
                </Button>
              </motion.div>

              <div className="text-center pt-2">
                <Link
                  to="/login"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm font-medium transition-colors"
                >
                  Already have an account? Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default RegisterScreen;
