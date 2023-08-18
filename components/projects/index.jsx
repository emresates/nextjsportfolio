import Link from "next/link";
import HoverImageContainer from "./hoverImageContainer";

export default function Projects() {
  return (
    <div className="mx-auto w-[84%] pt-28">
      <div className="mb-6 gap-6 xl:flex">
        <div className="mb-6 flex sm:h-[300px] h-[200px] md:h-[400px] w-full flex-col items-center justify-center tracking-widest xl:mb-0 xl:w-3/5">
          <p className="text-5xl uppercase">
            <span className="text-stroke">prominent </span>projects
          </p>
          <p className="hidden xl:block mt-10 text-2xl uppercase">
            To view other images, <span className="text-stroke">hover </span>
            over.
          </p>
        </div>
        <div className="relative sm:h-[300px] h-[200px] md:h-[400px] w-full overflow-hidden xl:w-2/5">
          <Link
            href="https://github.com/emresates/movieappnext"
            target="_blank"
            id="movie-app"
          >
            <HoverImageContainer
              imgLeft="./projects/nextmovies/nextmovies2.webp"
              imgCenter="./projects/nextmovies/nextmovies4.webp"
              imgRight="./projects/nextmovies/nextmovies5.webp"
              imgThumb="./projects/nextmovies/nextmoviesthumb.png"
            />
          </Link>
        </div>
      </div>
      <div className="mb-6 flex-row-reverse gap-6 xl:flex ">
        <div className="relative mb-6 sm:h-[300px] h-[200px] md:h-[400px] w-full xl:mb-0 xl:w-3/5">
          <Link
            href="https://github.com/emresates/React-travel-agency-project"
            target="_blank"
            id="travel-agency"
          >
            <HoverImageContainer
              imgLeft="./projects/trippy/agency1.webp"
              imgCenter="./projects/trippy/agency2.webp"
              imgRight="./projects/trippy/agency3.webp"
              imgThumb="./projects/trippy/agencythumb.png"
            />
          </Link>
        </div>
        <div className="relative sm:h-[300px] h-[200px] md:h-[400px] w-full xl:w-2/5">
          <Link
            href="https://github.com/emresates/React-Photo-Studio"
            target="_blank"
            id="photo-studio"
          >
            <HoverImageContainer
              imgCenter="./projects/photo/pho1.webp"
              imgLeft="./projects/photo/pho2.webp"
              imgRight="./projects/photo/pho3.webp"
              imgThumb="./projects/photo/photothumb.png"
            />
          </Link>
        </div>
      </div>
      <div className="mb-6 gap-6 xl:flex ">
        <div className="relative mb-6 sm:h-[300px] h-[200px] md:h-[400px] w-full xl:mb-0 xl:w-3/5">
          <Link
            href="https://github.com/emresates/React-Music-app"
            target="_blank"
            id="music-app"
          >
            <HoverImageContainer
              imgLeft="./projects/musicapp/music1.webp"
              imgCenter="./projects/musicapp/music2.webp"
              imgRight="./projects/musicapp/music3.webp"
              imgThumb="./projects/musicapp/musicthumb.png"
            />
          </Link>
        </div>
        <div className="relative sm:h-[300px] h-[200px] md:h-[400px] w-full xl:w-2/5">
          <Link
            href="https://github.com/emresates/React-Photo-Studio"
            target="_blank"
            id="photo-studio"
          >
            <HoverImageContainer
              imgCenter="./projects/coffeeshop/coffee1.webp"
              imgLeft="./projects/coffeeshop/coffee2.webp"
              imgRight="./projects/coffeeshop/coffee3.webp"
              imgThumb="./projects/coffeeshop/coffeethumb.png"
            />
          </Link>
        </div>
      </div>
      <div className="mb-6 flex flex-col-reverse gap-6 xl:flex-row-reverse ">
        <div className="mb-6 flex sm:h-[300px] h-[200px] md:h-[400px] w-full flex-col items-center justify-center px-4 xl:px-40 text-center tracking-widest xl:mb-0 xl:w-3/5">
          <p className="mt-2 text-2xl md:text-4xl uppercase">
            You can click on the photos
            <span className="text-stroke"> for more </span>
            details.
          </p>
          <p className="mt-10 text-xl md:text-2xl uppercase">
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
        <div className="relative sm:h-[300px] h-[200px] md:h-[400px] w-full xl:w-2/5">
          <Link
            href="https://github.com/emresates"
            target="_blank"
            id="github-profile"
          >
            <HoverImageContainer
              imgThumb="./projects/html/thumb.png"
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
