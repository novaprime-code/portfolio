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

import React from 'react';
import { portfolioConfig } from '@/app/config';

const Footer: React.FC = () => {
  const { copyright, tagline } = portfolioConfig.footer;

  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <p className="text-gray-300 text-sm">{copyright}</p>
        <p className="text-gray-400 text-xs mt-2">{tagline}</p>
      </div>
    </footer>
  );
};

export { Footer };
