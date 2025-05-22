"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Building, Mail, Phone, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RegisterDisplay() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  useEffect(() => {
    // Redirect to register screen if no state is passed
    if (!state) {
      navigate("/register");
    }
  }, [state, navigate]);

  if (!state) {
    return <p className="text-center mt-8 text-gray-500">Redirecting...</p>;
  }

  const { userData, isAgency } = state;

  //   console.log(userData, isAgency);
  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-2xl overflow-hidden backdrop-blur-lg bg-white/30 shadow-xl border border-white/20"
      >
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="h-20 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              {userData.fullName
                .split(" ")
                .map((name) => name[0])
                .join("") || "Alex"}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-center mb-6 text-gray-800"
          >
            Registration Complete
          </motion.h1>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center p-3 bg-white/80 rounded-lg shadow-sm"
            >
              <User className="h-5 w-5 text-purple-600 mr-3" />
              <div>
                <p className="text-xs text-gray-500">Full Name</p>
                <p className="font-medium text-gray-800">{userData.fullName}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center p-3 bg-white/80 rounded-lg shadow-sm"
            >
              <Mail className="h-5 w-5 text-purple-600 mr-3" />
              <div>
                <p className="text-xs text-gray-500">Email Address</p>
                <p className="font-medium text-gray-800">
                  {userData.email || "admin@gmail.com"}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center p-3 bg-white/80 rounded-lg shadow-sm"
            >
              <Phone className="h-5 w-5 text-purple-600 mr-3" />
              <div>
                <p className="text-xs text-gray-500">Phone Number</p>
                <p className="font-medium text-gray-800">
                  {userData.phoneNumber || "9234567890"}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center p-3 bg-white/80 rounded-lg shadow-sm"
            >
              <Building className="h-5 w-5 text-purple-600 mr-3" />
              <div>
                <p className="text-xs text-gray-500">Company Name</p>
                <p className="font-medium text-gray-800">
                  {userData.companyName || "Horizon Innovations"}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center p-3 bg-white/80 rounded-lg shadow-sm"
            >
              <BadgeCheck className="h-5 w-5 text-purple-600 mr-3" />
              <div>
                <p className="text-xs text-gray-500">Agency Status</p>
                <div className="flex items-center">
                  <span className="font-medium text-gray-800">
                    {userData.isAgency ? "Agency" : "Individual"}
                  </span>
                  {userData.isAgency && (
                    <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500">
              Thank you for registering with our service.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
