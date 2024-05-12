import Image from "next/image";
import VideoCart from "./videocart";

export default function LatestVideo2() {
  const posts = [
    {
      name: "dance",
      src: "05.jpg",
      title:
        "How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)",
      text: "You’ve read all your free member-only stories, become a member to get unlimited access. Your membership fee supports the voices you want to hear more from.",
    },
    {
      name: "sport",
      src: "02.jpg",
      title: "5 reasons why you should wrap your hands when boxing",
      text: "So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it’s recommended to wrap your hands before putting on the gloves. But there are times when you just don’t feel like wrapping them and you wonder why you even need them. Well, this blog is going to explain the benefits of wrapping your hands.",
    },
    {
      name: "music",
      src: "07.jpg",
      title: "Music Genre Classification with Python",
      text: "A Guide to analyzing Audio/Music signals in Python — Music is like a mirror, and it tells people a lot about who you are and what you care about, whether you like it or not. You’ve read all your free memberonly stories, become a member to get unlimited access. Your membership fee supports the voices you want to hear more from.",
    },
    {
      name: "food",
      src: "06.jpg",
      title: "Becoming a Self-Driving Car & Machine Learning Engineer",
      text: "How I left my full-time job, studied at Udacity, and landed a job at BMW The past year has been quite a journey for me. A year ago I left my full-time",
    },
    {
      name: "technology",
      src: "03.jpg",
      title: "How to Become a Master Designer",
      text: "Many outsiders believe that designers are unicorns, gifted or special in some way. We have an innate ability to create gorgeous interfaces, a natural talent for matching complementary colors, an unexplainable intuition…",
    },
  ];
  return (
    <div className=" bg-Gray py-1">
      <div className="my-16 w-10/12 mx-auto relative">
        <div className="flex flex-row justify-between my-6 items-center">
          <h4 className="popualrtitle relative before:bg-Primary">
            Latest Videos
          </h4>
          <div className="flex flex-row">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-10 bg-Black5 mx-2 fill-Black50 p-4 py-3 rounded-xl"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-10 bg-Black5 mx-1 p-4 py-3 rounded-xl"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative h-80 box-border whitespace-nowrap overflow-x-scroll">
          <div className="flex flex-row absolute w-full h-full gap-4">
            <div className="w-1/2 relative">
              <Image
                src={`/${posts[0].name}/${posts[0].src}`}
                alt="technology"
                fill
                className="rounded-xl object-cover"
              />
              <div className="bg-White75 h-3/4 rounded-xl p-3">
                <h4 className="text-xl mb-2">{posts[0].title}</h4>
                <p className="overflow-hidden text-ellipsis line-clamp-2 text-sm text-Dark75">
                  {posts[0].text}
                </p>
              </div>
            </div>
            <div className="w-video">
              <div className="grid grid-cols-3 gap-5 h-full w-video">
                {posts.map(
                  (post, index) =>
                    index !== 0 && <VideoCart data={post} key={index} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
