/*
 * Copyright 2025 Jay S. Patel
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Lightbulb, BarChart3 } from 'lucide-react';
import { portfolioConfig } from '@/app/config';
import { isMinimal } from '@/app/utils';

const About = () => {
  const config = portfolioConfig.sections.about;

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Rocket: <Rocket size={24} />,
      Code: <Code size={24} />,
      Lightbulb: <Lightbulb size={24} />,
      BarChart3: <BarChart3 size={24} />,
    };

    return icons[iconName] || <Rocket size={24} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = isMinimal
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      };

  return (
    <section id="about" className="py-24 relative" aria-labelledby="about-title">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute -left-20 top-40 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -right-20 bottom-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-white">
            {config.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              {config.subtitle}
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main content area - 50/50 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* About me text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full"
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-xl h-full relative overflow-hidden">
              <h3 className="text-2xl font-semibold text-white mb-6 relative">My Journey</h3>

              {/* Bio paragraphs */}
              <div className="space-y-4 relative">
                {config.bio.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Location and experience pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {config.details.map((detail, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-700/50 text-gray-300 border border-gray-600/50"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                    {detail.value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* My qualities grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="h-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {config.qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden relative h-full group hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="p-6 relative">
                    {/* Gradient circle behind icon */}
                    <div
                      className={`absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r ${quality.gradient} opacity-10 blur-lg`}
                    />

                    {/* Icon with gradient background */}
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${quality.gradient} flex items-center justify-center text-white mb-4`}
                    >
                      {getIconComponent(quality.icon)}
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-2">{quality.title}</h4>
                    <p className="text-gray-300 text-sm">{quality.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { About };
