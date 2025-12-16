import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface VideoSectionProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
    videoUrl: string;
  };
}

export const VideoSection: React.FC<VideoSectionProps> = ({ content }) => {
  // If no video URL is present, do not render the section
  if (!content.videoUrl) return null;

  // Simple check to see if the URL is from YouTube
  const isYoutube = content.videoUrl.includes('youtube.com') || content.videoUrl.includes('youtu.be');

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amplia-green/10 via-black to-black opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-amplia-green font-normal tracking-widest uppercase text-sm mb-2">{content.title}</h2>
            <h3 className="text-4xl md:text-5xl font-max font-normal mb-4">
              {content.subtitle}
            </h3>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg font-normal">
              {content.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-amplia-green/20 border border-white/10 group bg-neutral-900 aspect-video">
             
             {isYoutube ? (
               /* YouTube Player */
               <iframe
                 className="w-full h-full object-cover"
                 src={content.videoUrl}
                 title="Amplia Technology Video"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowFullScreen
                 style={{ border: 0 }}
               ></iframe>
             ) : (
               /* Native HTML5 Video Player (Direct MP4) - No errors, cleaner look */
               <video
                 className="w-full h-full object-cover"
                 autoPlay
                 muted
                 loop
                 playsInline
                 src={content.videoUrl}
               ></video>
             )}
             
             {/* Overlay to blend borders */}
             <div className="absolute inset-0 pointer-events-none border-0 ring-1 ring-white/10 rounded-3xl"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};