import RpostCart from "./rowpostcart";

export default function NewPosts() {
  const posts = [
    {
      name: "technology",
      src: "04.jpg",
      title: "12 Mobile UX Design Trends For 2018",
      text: "Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner",
      userimage: "10.jpg",
      username: "Jon Kantner",
      date: "July 14 ,2022",
    },
    {
      name: "sport",
      src: "01.jpg",
      title: "No boat bottomfish: Jetty fishing on the Washington Coast",
      text: "Cast from the rocks to bring home fresh fish tacos in this iconic spring and summer fishery. — Are you looking to go fishing and bring home deliciou",
      userimage: "01.jpg",
      username: "Louis Hobregts",
      date: "July 13 ,2022",
    },
    {
      name: "animal",
      src: "03.jpg",
      title: "What a Disabled Squirrel Taught Me About Life, Work, and Love",
      text: "Why it helps to know what it’s like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
      userimage: "12.jpg",
      username: "James",
      date: "May 2 ,2022",
    },
    {
      name: "car",
      src: "01.jpg",
      title: "Becoming a Self-Driving Car & Machine Learning Engineer",
      text: "How I left my full-time job, studied at Udacity, and landed a job at BMW The past year has been quite a journey for me. A year ago I left my full-time",
      userimage: "05.jpg",
      username: "Cassie Evans",
      date: "July 12 , 2022",
    },
    {
      name: "abstract",
      src: "06.jpg",
      title: "How to Become a Master Designer",
      text: "Many outsiders believe that designers are unicorns, gifted or special in some way. We have an innate ability to create gorgeous interfaces, a natural talent for matching complementary colors, an unexplainable intuition…",
      userimage: "03.jpg",
      username: "Linda",
      date: "July 10 ,2022",
    },
    {
      name: "music",
      src: "04.jpg",
      title:
        "This free course can teach you music programming basics in less than an hour",
      text: "A Berlin-based music software company, just released a free interactive music course that runs right in your browser. One thing that",
      userimage: "04.jpg",
      username: "Patricia",
      date: "July 09 , 2022",
    },
  ];
  return (
    <div className="my-16  w-10/12 mx-auto">
      <div className="flex flex-row justify-between my-6 items-center">
        <h4 className="popualrtitle relative before:bg-Primary">New Posts</h4>

        <button className="flex flex-row items-center bg-Gray  rounded-xl pl-4 text-Black text-sm">
          Show All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-10 mx-1 p-4 py-3"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-4">
        {posts.map((post, index) => (
          <RpostCart data={post} key={index} />
        ))}
      </div>
    </div>
  );
}
