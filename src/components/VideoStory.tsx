import React, { useEffect, useRef, useState } from 'react';
import Play from '../icons/Play';
import ScrollIndicator from '../icons/ScrollIndicator';
import useIntersectionObserver from '../utils/useIntersectionObserver';

export default function VideoStory(props: { url: string; goToNextVideo?(): void }) {
  const parentContainerRef = useRef<HTMLElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const { isIntersecting } = useIntersectionObserver(videoElementRef, 0.5);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (videoElementRef.current) {
      if (isIntersecting) {
        videoElementRef.current?.play();
        setIsPlaying(true);
      } else {
        videoElementRef.current?.pause();
        setIsPlaying(false);
      }
    }
  }, [isIntersecting]);

  useEffect(() => {
    function updateProgress() {
      if (isPlaying) {
        const duration = videoElementRef.current?.duration;
        const currentTime = videoElementRef.current?.currentTime;

        if (duration !== undefined && currentTime !== undefined) {
          setProgress((currentTime / duration) * 100);
          requestAnimationFrame(updateProgress);
        }
      }
    }

    if (isPlaying) updateProgress();
  }, [isPlaying]);

  const togglePlayback = () => {
    if (videoElementRef.current?.paused) {
      videoElementRef.current.play();
      setIsPlaying(true);
    } else {
      videoElementRef.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={parentContainerRef}
      className="h-screen px-5 py-6 snap relative"
      role="button"
      tabIndex={0}
      onClick={togglePlayback}
      onKeyDown={(e) => {
        if (e.code === '32') togglePlayback();
      }}>
      <video
        className="absolute inset-0 min-h-full min-w-full object-cover z-[-1]"
        controls={false}
        ref={videoElementRef}
        onEnded={props.goToNextVideo}>
        <source src={props.url} type="video/mp4" />
      </video>
      <div className="bg-white/20 h-[0.125rem] relative">
        <div
          className="absolute left-0 h-[0.125rem] bg-white"
          style={{ width: `${progress}%` }}></div>
      </div>

      <div
        className={`flex items-center justify-center h-20 w-20 bg-[#111418] bg-opacity-20 ${
          isPlaying ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        } rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out`}>
        <Play className="text-lg" />
      </div>

      <ScrollIndicator
        onClick={props.goToNextVideo}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
      />
    </section>
  );
}
