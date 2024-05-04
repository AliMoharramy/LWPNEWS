import Image from "next/image";
import Header from "./ui/main page/header";
import TopTags from "./ui/main page/topTags";
import SingleContent from "./ui/main page/singlecon";
import Popularposts from "./ui/main page/popularposts";

export default function Home() {
  return (
    <div className=" w-10/12 mx-auto">
      <Header />
      <TopTags />
      <SingleContent />
      <Popularposts />
    </div>
  );
}
