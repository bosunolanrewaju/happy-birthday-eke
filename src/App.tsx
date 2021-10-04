import React, { useRef } from 'react';
import seyi from './assets/seyi.jpg';
import CommentsStory from './components/CommentsStory';
import VideoStory from './components/VideoStory';
import Play from './icons/Play';
import './styles/index.css';

function App() {
  const parentContainerRef = useRef<HTMLDivElement>(null);

  const goToNextVideo = () => {
    if (parentContainerRef.current) {
      parentContainerRef.current.scrollTo({
        top: parentContainerRef.current.scrollTop + window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="text-center h-screen max-w-lg mx-auto scroll-snap overflow-y-auto"
      ref={parentContainerRef}>
      <section className="h-screen flex flex-col items-center snap">
        <h1 className="text-[3.5rem] max-w-[9ch] leading-[3.25rem] mt-12">
          Congratulations Dipo & Seyi!
        </h1>
        <hr className="w-14 h-[0.125rem] gradient mt-7" />
        <div className="flex items-center space-x-3 mt-6">
          <span className="text-base">
            Your family and friends put together some messages for you both, enjoy!
          </span>
        </div>
        <img
          src={seyi}
          alt="Seyi at the baby shower"
          width={211}
          height={209}
          className="mt-[4.875rem] rounded-[.625rem]"
        />
        <button
          className="h-14 flex items-center space-x-[.625rem] rounded-[3.125rem] mt-[4.75rem] gradient px-8"
          onClick={goToNextVideo}>
          <Play className="text-lg" />
          <span className="text-lg">Play Videos</span>
        </button>
      </section>
      {showerWishes.map((wish) => {
        if (wish.type === 'video' && wish.url) {
          return (
            <VideoStory key={wish.url} goToNextVideo={goToNextVideo} url={wish.url} />
          );
        }
        if (wish.type === 'image' && wish.comment) {
          return (
            <CommentsStory
              key={wish.comment.name}
              goToNextSection={goToNextVideo}
              comment={wish.comment}
            />
          );
        }
      })}
      <section className="comments h-screen px-5 snap flex flex-col py-[6.6875rem]">
        <p className="text-[3.5rem] leading-[3.25rem] font-medium whitespace-pre-wrap text-left">
          <span className="text-[#455463]">Here&apos;s to celebrating</span> a new life, a
          new adventure,
          <br />
          <span className="text-[#455463]">and</span> many firsts!
          <br />
          Congratulations!
        </p>
        <hr className="mt-auto" />
        <p className="mt-4 text-[#667B8F]">Courtesy: Family & Friends</p>
        <p className="text-[#667B8F]">&copy; 2021</p>
      </section>
    </div>
  );
}

const showerWishes = [
  {
    type: 'video',
    url: 'https://elmagnifico.s3.eu-west-2.amazonaws.com/debbie.MP4',
  },
  {
    type: 'video',
    url: 'https://elmagnifico.s3.eu-west-2.amazonaws.com/busayo.MP4',
  },
  {
    type: 'image',
    comment: {
      name: 'Tosin',
      comment: `
      Congratulations dearest Sisi, I know that you'll be an amazing mum.
      Would have given you tips but I know that you are a pro (Aunty of the year) on the subject matter.
      May the lord bless and keep your family. Lots oflove from your "fish".
      `,
    },
  },
  {
    type: 'video',
    url: 'https://elmagnifico.s3.eu-west-2.amazonaws.com/lara.MP4',
  },
  {
    type: 'video',
    url: 'https://elmagnifico.s3.eu-west-2.amazonaws.com/Ibukun.MP4',
  },
  {
    type: 'image',
    comment: {
      name: 'Kenny & Bosun',
      comment: `We can't express enough how thrilled we are for the both of you,
      And how excited we are to meet the little bundle of joy. She's going to be one lucky baby because she's going to have amazing parents.
      May  this little miracle make your world more beautiful and joyful.
      Congratulations!!!.
      `,
    },
  },
  {
    type: 'video',
    url: 'https://elmagnifico.s3.eu-west-2.amazonaws.com/bunmi.mp4',
  },
  {
    type: 'video',
    url: 'https://elmagnifico.s3.eu-west-2.amazonaws.com/yinka.MP4',
  },
  {
    type: 'image',
    comment: {
      name: 'Toyosi',
      comment: `
      Congratulations on your baby girl Oremi.
      I can't wait to meet her. Wishing you a safe delivery.
      `,
    },
  },
  {
    type: 'video',
    url: 'https://elmagnifico.s3.eu-west-2.amazonaws.com/bolanle.MP4',
  },
  {
    type: 'video',
    url: 'https://elmagnifico.s3.eu-west-2.amazonaws.com/dina.MP4',
  },
  {
    type: 'image',
    comment: {
      name: 'Mariam',
      comment: `
      My Seyi baby is having a baby. Congratulations my darling.
      God bless and keep her. May she always be a source of joy and lightto you and Dipo and the world at large.
      May her Arrival come with plenty new blessings for your family.
      Congratulations again Seyi and Dipo.
      All my love.
      `,
    },
  },
  {
    type: 'video',
    url: 'https://elmagnifico.s3.eu-west-2.amazonaws.com/susan.MP4',
  },
];

export default App;
