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
import portfolioConfig from '@/app/config';

const Logo: React.FC = () => {
  const { logo } = portfolioConfig.navigation;

  return (
    <motion.div
      className="flex items-center cursor-pointer space-x-1"
      whileHover={{ rotate: [0, 2, -2, 0], transition: { duration: 0.4 } }}
    >
      {/* Left code bracket */}
      <motion.span
        className="font-mono text-emerald-400 text-xl"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {'{'}
      </motion.span>

      {/* Initials */}
      <motion.span
        className="text-l font-bold"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {logo.text}
      </motion.span>

      {/* Right code bracket */}
      <motion.span
        className="font-mono text-emerald-400 text-xl"
        initial={{ x: 8, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {'}'}
      </motion.span>
    </motion.div>
  );
};

export { Logo };
