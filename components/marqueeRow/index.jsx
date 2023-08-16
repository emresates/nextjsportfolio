import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeRow() {
  return (
    <div className="xl:px-28 px-6 my-10">
      <h1 className="flex items-center justify-center pb-12 text-4xl font-medium uppercase leading-tight tracking-widest md:justify-start">
        Recents
      </h1>
      <Marquee>
        <div className="text-stroke overflow-hidden text-4xl font-bold uppercase tracking-widest md:text-6xl">
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7090704166355939328/"
            target="_blank"
            className="ml-48 cursor-pointer"
          >
            Nextjs Movie App
          </a>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7018976096612167681/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7018976096612167681%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
            target="_blank"
            className="ml-48 cursor-pointer"
          >
            Fullstack Blog
          </a>
        </div>
      </Marquee>
      <Marquee direction="right">
        <div className="h-full overflow-hidden px-20 text-4xl font-bold uppercase tracking-widest md:text-6xl">
          <a
            href="https://www.linkedin.com/posts/emresates_mongodb-postgresql-nodejs-activity-7013172288338464768-Fl1b?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="ml-48 cursor-pointer"
          >
            Coffee Shop
          </a>
          <a
            href="https://www.linkedin.com/posts/emresates_react-tailwindcss-activity-7004473325527658496-VxER?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="ml-48 cursor-pointer"
          >
            Music App
          </a>
          <a
            href="https://www.linkedin.com/posts/emresates_react-scss-jobsearch-activity-7001930309038444544-qYrG?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="ml-48 cursor-pointer"
          >
            Photo Studio Page
          </a>
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeRow;
