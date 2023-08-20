import Link from "next/link";
import HoverImageContainer from "./hoverImageContainer";

export default function Projects() {
  return (
    <div className="mx-auto w-[84%] pt-28">
      <div className="mb-6 gap-6 xl:flex">
        <div className="mb-6 flex h-[200px] w-full flex-col items-center justify-center tracking-widest sm:h-[300px] md:h-[500px] xl:mb-0 xl:w-3/5">
          <p className="text-5xl uppercase">
            <span className="text-stroke">prominent </span>projects
          </p>
          <p className="mt-10 hidden text-2xl uppercase xl:block">
            To view other images, <span className="text-stroke">hover </span>
            over.
          </p>
        </div>
        <div className="relative h-[200px] w-full overflow-hidden sm:h-[300px] md:h-[500px] xl:w-2/5">
          <Link
            href="https://movieappnext.vercel.app"
            target="_blank"
            id="movie-app"
          >
            <HoverImageContainer
              imgLeft="./projects/nextmovies/movies1.webp"
              imgCenter="./projects/nextmovies/movies2.webp"
              imgRight="./projects/nextmovies/movies3.webp"
              imgThumb="./projects/nextmovies/nextmoviesthumb.webp"
            />
          </Link>
        </div>
      </div>
      <div className="mb-6 flex-row-reverse gap-6 xl:flex ">
        <div className="relative mb-6 h-[200px] w-full sm:h-[300px] md:h-[500px] xl:mb-0 xl:w-3/5">
          <Link
            href="https://travelwithtrippy.vercel.app"
            target="_blank"
            id="travel-agency"
          >
            <HoverImageContainer
              imgLeft="./projects/trippy/agency1.webp"
              imgCenter="./projects/trippy/agency2.webp"
              imgRight="./projects/trippy/agency3.webp"
              imgThumb="./projects/trippy/agencythumb.webp"
            />
          </Link>
        </div>
        <div className="relative h-[200px] w-full sm:h-[300px] md:h-[500px] xl:w-2/5">
          <Link
            href="https://corestudio.netlify.app"
            target="_blank"
            id="photo-studio"
          >
            <HoverImageContainer
              imgCenter="./projects/photo/pho1.webp"
              imgLeft="./projects/photo/pho2.webp"
              imgRight="./projects/photo/pho3.webp"
              imgThumb="./projects/photo/photothumb.webp"
            />
          </Link>
        </div>
      </div>
      <div className="mb-6 gap-6 xl:flex ">
        <div className="relative mb-6 h-[200px] w-full sm:h-[300px] md:h-[500px] xl:mb-0 xl:w-3/5">
          <Link
            href="https://secenory-music.netlify.app"
            target="_blank"
            id="music-app"
          >
            <HoverImageContainer
              imgLeft="./projects/musicapp/music1.webp"
              imgCenter="./projects/musicapp/music2.webp"
              imgRight="./projects/musicapp/music3.webp"
              imgThumb="./projects/musicapp/musicthumb.webp"
            />
          </Link>
        </div>
        <div className="relative h-[200px] w-full sm:h-[300px] md:h-[500px] xl:w-2/5">
          <Link
            href="https://emrescoffee-shop.netlify.app"
            target="_blank"
            id="photo-studio"
          >
            <HoverImageContainer
              imgCenter="./projects/coffeeshop/coffee1.webp"
              imgLeft="./projects/coffeeshop/coffee2.webp"
              imgRight="./projects/coffeeshop/coffee3.webp"
              imgThumb="./projects/coffeeshop/coffeethumb.webp"
            />
          </Link>
        </div>
      </div>
      <div className="mb-6 flex flex-col-reverse gap-6 xl:flex-row-reverse ">
        <div className="mb-6 flex h-[200px] w-full flex-col items-center justify-center px-4 text-center tracking-widest sm:h-[300px] md:h-[500px] xl:mb-0 xl:w-3/5 xl:px-40">
          <p className="mt-2 text-2xl uppercase md:text-4xl">
            You can click on the photos
            <span className="text-stroke"> to explore </span>
            the websites in more detail.
          </p>
          <p className="mt-10 text-xl uppercase md:text-2xl">
            To view project details, you can visit my
            <Link
              href="https://www.linkedin.com/in/emresates/"
              target="_blank"
              id="linkedin"
              className="social text-stroke tracking-widest"
            >
              {" "}
              LinkedIn{" "}
            </Link>
            or
            <Link
              href="https://github.com/emresates"
              target="_blank"
              id="github"
              className="social text-stroke tracking-widest"
            >
              {" "}
              Github{" "}
            </Link>
            profiles.
          </p>
        </div>
        <div className="relative h-[200px] w-full sm:h-[300px] md:h-[500px] xl:w-2/5">
          <Link
            href="https://reindeer-home.netlify.app"
            target="_blank"
            id="github-profile"
          >
            <HoverImageContainer
              imgThumb="./projects/html/thumb.webp"
              imgCenter="./projects/html/photo1.webp"
              imgLeft="./projects/html/photo2.webp"
              imgRight="./projects/html/photo3.webp"
              imgLeft2="./projects/html/photo4.webp"
              imgCenter2="./projects/html/photo5.webp"
              imgRight2="./projects/html/photo6.webp"
              html={true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
