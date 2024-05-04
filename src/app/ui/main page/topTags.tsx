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
    <div className="flex flex-row my-12 relative bg-Gray px-2 py-1 rounded-xl">
      <div id="tagtop" className="flex flex-row gap-6 w-full">
        {toptags.map((tag, index) => (
          <button className="relative flex items-center w-full" key={index}>
            <Image
              src={`/${tag.name}/${tag.src}`}
              alt="tagimg"
              width={150}
              height={100}
              className="rounded-xl blur-xs object-cover h-5/6 absolute"
            />
            <p className="absolute text-White text-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {`#${tag.tag}`}
            </p>
          </button>
        ))}
      </div>
      <button className="p-2">{`>`}</button>
    </div>
  );
}
