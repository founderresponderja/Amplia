
import React, { useRef, useEffect } from 'react';
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
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!content.videoUrl) return null;

  const isYoutube = content.videoUrl.includes('youtube.com') || content.videoUrl.includes('youtu.be');

  // Logic to parse YouTube ID and add autoplay/loop parameters if needed
  const getProcessedUrl = (url: string) => {
    if (!isYoutube) return url;
    
    let embedUrl = url;
    if (url.includes('watch?v=')) {
      embedUrl = url.replace('watch?v=', 'embed/');
    } else if (url.includes('youtu.be/')) {
      const id = url.split('/').pop();
      embedUrl = `https://www.youtube.com/embed/${id}`;
    }

    const urlObj = new URL(embedUrl.includes('http') ? embedUrl : `https://${embedUrl}`);
    urlObj.searchParams.set('autoplay', '1');
    urlObj.searchParams.set('mute', '1');
    urlObj.searchParams.set('loop', '1');
    urlObj.searchParams.set('controls', '0');
    urlObj.searchParams.set('rel', '0');
    urlObj.searchParams.set('modestbranding', '1');
    urlObj.searchParams.set('showinfo', '0');
    
    const videoId = urlObj.pathname.split('/').pop();
    if (videoId) {
      urlObj.searchParams.set('playlist', videoId);
    }

    return urlObj.toString();
  };

  useEffect(() => {
    // Force play for native videos as some browsers block autoPlay on load
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay blocked or failed:", error);
      });
    }
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-amplia-dark relative overflow-hidden transition-colors duration-500">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-amplia-green/10 via-transparent to-transparent opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amplia-green/10 text-amplia-green rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              {content.title}
            </span>
            <h3 className="text-4xl md:text-6xl font-max dark:text-white transition-colors leading-tight">
              {content.subtitle}
            </h3>
            <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg font-normal mt-6 leading-relaxed">
              {content.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative w-full max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-white/5 bg-neutral-900 aspect-video group">
             
             {isYoutube ? (
               <div className="w-full h-full relative">
                 <iframe
                   className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] pointer-events-none"
                   src={getProcessedUrl(content.videoUrl)}
                   title="Amplia Technology Showcase"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   style={{ border: 0 }}
                 ></iframe>
               </div>
             ) : (
               <video
                 ref={videoRef}
                 className="w-full h-full object-cover"
                 autoPlay
                 muted
                 loop
                 playsInline
                 preload="auto"
                 src={content.videoUrl}
               ></video>
             )}
             
             {/* Glass Overlay for aesthetics */}
             <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-[3rem] shadow-[inset_0_0_80px_rgba(0,0,0,0.2)]"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
