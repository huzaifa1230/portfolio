"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Code,
  Database,
  Globe,
  Palette,
  Phone,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { projects } from "../../../config/index.js";

export default function About() {
  const router = useRouter();

  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      techs: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      icon: <Code className="w-6 h-6" />,
      techs: ["Node.js", "Express.js", "REST APIs"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      techs: ["MongoDB", "PostgreSQL", "Prisma"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Tools & More",
      icon: <Palette className="w-6 h-6" />,
      techs: ["Git", "VS Code", "Responsive Design"],
      color: "from-orange-500 to-red-500",
    },
  ];

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      {/* Back button */}
      <motion.button
        className="absolute top-8 left-8 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full font-medium text-sm hover:bg-white transition-all duration-300 shadow-lg border border-gray-200"
        onClick={() => router.back()}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Portfolio
      </motion.button>

      <div className="relative z-10 container mx-auto px-8 py-20">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              MH
            </motion.div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Muhammad Huzaifa Irshad
            </h1>
            <div className="text-2xl text-gray-600 mb-6">
              MERN Stack Developer
            </div>
            <div className="text-lg text-gray-500">
              1+ Years of Experience • Building Digital Solutions
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Passionate MERN stack developer with over a year of hands-on
                experience building modern web applications. I specialize in
                creating seamless user experiences with React.js and Next.js,
                while architecting robust backend solutions with Node.js and
                Express.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                My journey in web development has led me to work on multiple
                projects showcased on this portfolio, where I've honed my skills
                in both frontend and backend technologies. I'm always eager to
                learn new technologies and tackle challenging problems.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg`}
                    >
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Highlight */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Experience Highlights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    {projects?.length || "Multiple"}+
                  </div>
                  <div className="text-blue-100">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-blue-100">Technologies</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Get In Touch
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <motion.a
                    href="tel:+923264550981"
                    className="flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-300 shadow-md group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-3 rounded-full bg-green-100 text-green-600 group-hover:bg-green-200 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">+92 326 455 0981</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:huzaifairshad173@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-300 shadow-md group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">
                        huzaifairshad173@gmail.com
                      </div>
                    </div>
                  </motion.a>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <motion.a
                    href="https://github.com/huzaifa1230/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-300 shadow-md group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-3 rounded-full bg-gray-100 text-gray-800 group-hover:bg-gray-200 transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">GitHub</div>
                      <div className="text-gray-600">View my repositories</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/huzaifa-irshad01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-300 shadow-md group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-3 rounded-full bg-linkedin-blue bg-blue-600 text-white group-hover:bg-blue-700 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">LinkedIn</div>
                      <div className="text-gray-600">Connect with me</div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Ready to bring your ideas to life with modern web technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg border border-gray-200"
                onClick={() => router.back()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
