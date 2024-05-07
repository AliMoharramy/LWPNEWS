import Image from "next/image";
import Header from "./ui/main page/header";
import TopTags from "./ui/main page/topTags";
import SingleContent from "./ui/main page/singlecon";
import Popularposts from "./ui/main page/popularposts";
import SportWidget from "./ui/main page/sportwidget";

export default function Home() {
  return (
    <div>
      <Header />
      <TopTags />
      <SingleContent />
      <Popularposts />
      <SportWidget />
    </div>
  );
}
