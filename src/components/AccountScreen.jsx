"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import {
  CameraIcon,
  EditIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

function AccountScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto"
      >
        <div className="glass-card !bg-white/30 rounded-3xl overflow-hidden relative">
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-900 p-6 text-white">
            <h1 className="text-2xl font-bold">Account Settings</h1>
          </div>

          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute -bottom-1 -right-1 bg-purple-600 text-white p-1.5 rounded-full shadow-lg hover:bg-purple-700 transition-colors">
                  <CameraIcon className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  User Name
                </h2>
                <p className="text-purple-600 dark:text-purple-400">
                  user@example.com
                </p>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-9 w-9"
              >
                <EditIcon className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Your account provides access to all PopX features and services.
                Manage your profile, subscription, and preferences from this
                dashboard.
              </p>

              <div className="space-y-2 pt-4">
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <UserIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Personal Information
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Update your profile details
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <SettingsIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Account Settings
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Manage your account preferences
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <LogOutIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Sign Out
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Log out of your account
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AccountScreen;
