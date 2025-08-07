'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ThreeDPhotoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const ThreeDPhoto: React.FC<ThreeDPhotoProps> = ({
  src,
  alt,
  width = 300,
  height = 400,
  className = '',
}) => {
  return (
    <div className={`3d-photo-container ${className}`}>
      <motion.div
        className="3d-photo-wrapper"
        whileHover={{
          rotateY: 15,
          rotateX: 5,
          scale: 1.05,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Main photo */}
        <div className="photo-front">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-2xl shadow-2xl"
            unoptimized
          />
        </div>

        {/* Shadow/depth layer */}
        <div
          className="photo-shadow"
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, rgba(74, 222, 128, 0.3), rgba(59, 130, 246, 0.3))',
            borderRadius: '1rem',
            zIndex: -1,
            transform: 'translateZ(-20px)',
          }}
        />
      </motion.div>
    </div>
  );
};
