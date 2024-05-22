import Image from "next/image";

export default function Footer() {
  return (
    <div className="my-16 w-10/12 mx-auto grid grid-cols-2 gap-5">
      <div className="grid bg-Gray rounded-r-xl relative footergray p-8 pl-1">
        <div className="grid grid-cols-2 w-full gap-8 justify-between">
          <div>
            <h4 className="popualrtitle relative before:bg-Primary">
              Mega News
            </h4>
            <p className="text-xs mt-4  text-justify text-Black75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin
            </p>
          </div>
          <div className="ml-20">
            <h4 className="popualrtitle relative before:bg-Primary">
              Categories
            </h4>
            <div className="text-xs flex flex-col gap-2 my-4 text-Black75">
              <p>Culture</p>
              <p>Fashion</p>
              <p>Featured</p>
              <p>Food</p>
              <p>Healthy Living</p>
              <p>Technology</p>
            </div>
          </div>
          <div>
            <h4 className="popualrtitle relative before:bg-Primary">
              Newsletters
            </h4>
            <div className="flex flex-row my-4">
              <input
                type="text"
                placeholder="write your email"
                className="p-2 rounded-l-xl pl-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-10 bg-White p-2 rounded-r-xl pr-4 cursor-pointer"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </div>
          </div>
          <div className="ml-20">
            <h4 className="popualrtitle relative before:bg-Primary">
              Social Network
            </h4>
            <div className="flex flex-row gap-2 my-4">
              <button className="flex flex-row instabtn p-2 px-4 rounded-xl text-White">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 mr-1"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
                instagram
              </button>
              <button className="p-2 rounded-xl px-3 twitbtn w-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#ffffff"
                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-Black5 flex justify-between text-xs text-Black75 rounded-r-xl p-4 pl-1 pr-6 relative lineleft">
          <p>privacy policy | terms & conditions</p>
          <p>all copyright (c) 2022 reserved</p>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-8">
        <div>
          <h4 className="popualrtitle relative before:bg-Primary ml-2">
            New Comments
          </h4>
          <div className="text-Black75 bg-Gray rounded-xl p-4 my-2">
            <p className="text-sm text-Black">ellsmartx</p>
            <p className="text-xs">
              how nice does this look 😍 I feel it should be delicious, thank
              you
            </p>
          </div>
          <div className="text-Black75 bg-Gray rounded-xl p-4 my-2">
            <p className="text-sm text-Black">cassia</p>
            <p className="text-xs">
              Take a rest, i&apos;ll be cheer up you again in 2 next game go go
              go
            </p>
          </div>
          <div className="text-Black75 bg-Gray rounded-xl p-4 my-2">
            <p className="text-sm text-Black">amanda</p>
            <p className="text-xs">
              you were stunning today, jan! 💗 great match 👍🏽👍🏽
            </p>
          </div>
          <div className="text-Black75 bg-Gray rounded-xl p-4 my-2">
            <p className="text-sm text-Black">Denis Simonassi</p>
            <p className="text-xs">
              It was a great match today Janzi! You did great😉🇩🇪
            </p>
          </div>
        </div>
        <div className="ml-5">
          <h4 className="popualrtitle relative before:bg-Primary ml-2">
            Follow On Instagram
          </h4>
          <div className="grid grid-cols-3 h-5/6 gap-3 mt-5">
            <div className="relative">
              <Image
                alt="car"
                src="/car/02.jpg"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative">
              <Image
                alt="animal"
                src="/animal/10.jpg"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative">
              <Image
                alt="technology"
                src="/technology/02.jpg"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative">
              <Image
                alt="food"
                src="/food/07.jpg"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative">
              <Image
                alt="music"
                src="/music/01.jpg"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative">
              <Image
                alt="dance"
                src="/dance/03.jpg"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative">
              <Image
                alt="animal"
                src="/animal/07.jpg"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative rounded-xl">
              <Image
                alt="dance"
                src="/dance/01.jpg"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative">
              <Image
                alt="sport"
                src="/sport/02.jpg"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
