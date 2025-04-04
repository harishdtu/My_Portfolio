import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Full Stack Web Development Intern",
    company: "Business Web Solutions",
    period: "Jun 2023 - Aug 2023",
    description: "Worked on several modules during the internship and successfully Completed tasks and projects upon front-end and back-end technologies to ensure a seamless experience.Integrated REST APIs to streamline data exchange between client and server.Designed responsive UI components using React.js and Bootstrap."
  },
  
 
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Experience
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
              >
                <Briefcase className="w-4 h-4 text-white" />
              </motion.div>
              
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                  <p className="text-blue-600 font-semibold">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;