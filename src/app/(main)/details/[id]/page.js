"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Play, ExternalLink, Github, Globe } from "lucide-react";
import { projects } from "../../../../config/index";

export default function Page({ params: asyncParams }) {
  const [showVideo, setShowVideo] = useState(false);
  const mainDisplayRef = useRef(null);
  const router = useRouter();
  const params = use(asyncParams);

  // Debug logging to see what we're getting

  // Get project data based on ID - handle both string and number IDs
  const projectId = parseInt(params.id) - 1; // Convert to 0-based index
  console.log("Calculated projectId:", projectId);

  const projectData = projects[projectId];
  console.log("Selected project data:", projectData);

  // Handle case where project doesn't exist
  if (!projectData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The project you are looking for doesnt exist.
            <br />
            <span className="text-sm">
              Looking for project ID: {params.id} (Index: {projectId})
            </span>
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Projects</span>
          </button>

          {/* Debug info - remove this in production */}
          <div className="text-xs text-gray-500">
            Project {params.id} of {projects.length}
          </div>
        </div>
      </motion.header>

      <motion.div
        className="max-w-7xl mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4"
            variants={itemVariants}
          >
            {projectData.title || "Untitled Project"}
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {projectData.working || "No detailed description available"}
          </motion.p>
        </motion.div>

        {/* Video/Main Display Section */}
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="max-w-5xl mx-auto">
            {/* Main Display - Screen Recording */}
            <div ref={mainDisplayRef} className="mb-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {showVideo && projectData.recordings ? (
                  <video controls className="w-full h-full object-contain">
                    <source src={projectData.recordings} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <Image
                      src={
                        projectData.screenshots?.[0]?.url ||
                        projectData.cover ||
                        projectData.img ||
                        "/api/placeholder/1200/800"
                      }
                      alt={
                        projectData.screenshots?.[0]?.alt ||
                        projectData.title ||
                        "Project screenshot"
                      }
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                )}

                <div className="p-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {showVideo && projectData.videoUrl
                        ? "Demo Video"
                        : "Project Overview"}
                    </h3>
                    {projectData.recordings && (
                      <button
                        onClick={() => setShowVideo(!showVideo)}
                        className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Play size={16} />
                        <span>
                          {showVideo ? "View Screenshots" : "Watch Demo"}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshots Gallery */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Screenshots
              </h3>
              {projectData.screenshots && projectData.screenshots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectData.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div
                        className={`relative bg-gradient-to-br from-gray-100 to-gray-200 ${
                          screenshot.alt?.toLowerCase().includes("mobile") ||
                          screenshot.alt?.toLowerCase().includes("phone")
                            ? "aspect-[9/16]"
                            : "aspect-video"
                        }`}
                      >
                        <Image
                          src={screenshot.url || "/api/placeholder/800/600"}
                          alt={screenshot.alt || `Screenshot ${index + 1}`}
                          fill
                          className="object-contain p-4"
                        />
                        {/* Device Type Badge */}
                        <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                          {screenshot.alt?.toLowerCase().includes("mobile") ||
                          screenshot.alt?.toLowerCase().includes("phone")
                            ? "📱"
                            : "💻"}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {screenshot.alt || `Screenshot ${index + 1}`}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>No screenshots available for this project.</p>
                  {/* Show main project image if available */}
                  {(projectData.img || projectData.cover) && (
                    <div className="mt-6 max-w-2xl mx-auto">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                          <Image
                            src={projectData.img || projectData.cover}
                            alt={projectData.title || "Project image"}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {projectData.title || "Project Preview"}
                          </h4>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Detailed Description */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About This Project
              </h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                  {projectData.longDescription ||
                    projectData.description ||
                    projectData.desc ||
                    "No detailed description available for this project."}
                </p>

                {projectData.features && projectData.features.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {projectData.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tech Stack
              </h2>
              {projectData.techStack && projectData.techStack.length > 0 ? (
                <div className="space-y-3">
                  {projectData.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="font-medium text-gray-800">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  Tech stack information not available.
                </p>
              )}
            </div>

            {/* Project Links */}
            {(projectData.liveUrl || projectData.githubUrl) && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Project Links
                </h2>
                <div className="space-y-3">
                  {projectData.liveUrl && (
                    <a
                      href={projectData.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Globe size={20} className="text-blue-600" />
                      <span className="font-medium text-blue-800">
                        Live Demo
                      </span>
                      <ExternalLink
                        size={16}
                        className="text-blue-600 ml-auto"
                      />
                    </a>
                  )}
                  {projectData.githubUrl && (
                    <a
                      href={projectData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Github size={20} className="text-gray-700" />
                      <span className="font-medium text-gray-800">
                        Source Code
                      </span>
                      <ExternalLink
                        size={16}
                        className="text-gray-600 ml-auto"
                      />
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-4">
            Interested in This Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Lets discuss how we can work together on your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open("mailto:your-email@example.com", "_blank")
              }
              className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </button>
            <button
              onClick={() => router.push("/")}
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View More Projects
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
