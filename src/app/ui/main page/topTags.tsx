import Image from "next/image";

const toptags = [
  { name: "food", tag: "Food", src: "01.jpg" },
  { name: "animal", tag: "Animal", src: "10.jpg" },
  { name: "car", tag: "Car", src: "04.jpg" },
  { name: "sport", tag: "Sport", src: "06.jpg" },
  { name: "music", tag: "Music", src: "06.png" },
  { name: "technology", tag: "Technology", src: "01.jpg" },
  { name: "abstract", tag: "Abstract", src: "07.jpg" },
  { name: "food", tag: "Food", src: "06.jpg" },
];

export default function TopTags() {
  return (
    <div className="lg:flex flex-row justify-end my-12 relative bg-Gray p-2 rounded-xl overflow-hidden w-10/12 mx-auto hidden">
      <div
        id="tagtop"
        className="absolute left-2 z-0 h-full top-0 py-2 flex flex-row gap-5 w-full"
      >
        {toptags.map((tag, index) => (
          <button className="relative flex items-center w-full" key={index}>
            <Image
              src={`/${tag.name}/${tag.src}`}
              alt="tagimg"
              fill
              className="rounded-xl blur-xs object-cover h-5/6 absolute"
            />
            <p className="absolute text-White text-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {`#${tag.tag}`}
            </p>
          </button>
        ))}
      </div>
      <button className="z-50 items-start bg-Gray tagshadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="w-6 p-1 mx-1 h-full"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </button>
    </div>
  );
}
