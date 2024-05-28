import { post } from "@/lib/definition";
import Image from "next/image";

export default function SideBar({ data }: { data: post }) {
  const posts = [
    {
      img: "/car/03.jpg",
    },
    {
      img: "/animal/04.jpg",
    },
    {
      img: "/dance/06.jpg",
    },
    {
      img: "/food/04.jpg",
    },
    {
      img: "/sport/03.jpg",
    },
  ];
  return (
    <div className="col-span-2">
      <div className="grid grid-cols-3 gap-5 text-xs text-Black75">
        <button className="flex flex-row gap-2 bg-Gray rounded-xl p-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-3"
          >
            <path
              fill="rgba(62, 50, 50, 0.75)"
              d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"
            />
          </svg>
          <p>Share</p>
        </button>
        <button className="flex flex-row gap-2 bg-Gray rounded-xl p-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-2"
          >
            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
          </svg>
          <p>Marking</p>
        </button>
        <button className="flex flex-row gap-1 bg-Gray rounded-xl p-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-3"
          >
            <path
              fill="rgba(62, 50, 50, 0.75)"
              d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"
            />
          </svg>
          <p>Comment</p>
        </button>
      </div>
      <div className="bg-Gray my-6 rounded-xl flex flex-row p-2">
        <div className="relative w-28 h-20">
          <Image
            src={`/avatar/${data.userimage}`}
            alt="avatar"
            fill
            className="object-cover h-full rounded-xl"
          />
        </div>
        <div className="flex flex-col w-full p-2">
          <div className="flex flex-row justify-between items-center">
            <p>{data.username}</p>
            <p className="text-xs text-Black75">35 Posts</p>
          </div>
          <button className="bg-Primary75 rounded-xl px-4 p-1 text-White w-1/2 mt-2">
            + Follow
          </button>
        </div>
      </div>
      <div className="bg-Gray p-4 rounded-xl">
        <div className="flex flex-row justify-between ml-2 items-center">
          <h4 className="popualrtitle relative before:bg-Primary">Tags</h4>
        </div>
        <div className="grid grid-cols-3 text-xs mt-3 gap-1 gap-y-2 text-Black75 [&>p]:cursor-pointer">
          <p>Montenegro</p>
          <p>Visit Croatia</p>
          <p>Luxury Travel</p>
          <p>Travel Log</p>
          <p>Paradise Island</p>
          <p>Travel Info</p>
        </div>
      </div>
      <div className="bg-Gray p-4 rounded-xl my-6">
        <div className="flex flex-row justify-between ml-2 items-center">
          <h4 className="popualrtitle relative before:bg-Primary">Top Posts</h4>
        </div>
        <div className="grid gap-4 mt-5">
          {Array.from({ length: posts.length }, (_, i) => (
            <div key={i} className="flex flex-row cursor-pointer">
              <div className="relative h-20 w-36">
                <Image
                  src={posts[i].img}
                  alt="post"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="text-xs flex justify-center flex-col pl-2">
                <p>
                  How to Spend the Perfect Day on Croatia’s Most Magical Island
                </p>
                <p className="text-Black75 text-xs mt-1">subhead</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="relative w-full h-40 overflow-hidden rounded-xl">
          <Image
            src="/abstract/05.jpg"
            alt="abs"
            fill
            className="object-cover rounded-xl blur-sm"
          />
          <p className="absolute fullabscenter top-1/3 text-White text-xl">
            Advertising
          </p>
        </div>
        <div className="relative w-full h-40 overflow-hidden rounded-xl">
          <Image
            src="/abstract/02.jpg"
            alt="abs"
            fill
            className="object-cover rounded-xl blur-sm"
          />
          <p className="absolute fullabscenter text-White text-xl">
            Advertising
          </p>
        </div>
      </div>
    </div>
  );
}
