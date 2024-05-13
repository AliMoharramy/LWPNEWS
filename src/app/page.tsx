import Image from "next/image";
import Header from "./ui/main page/header";
import TopTags from "./ui/main page/topTags";
import SingleContent from "./ui/main page/singlecon";
import Popularposts from "./ui/main page/popularposts";
import SportWidget from "./ui/main page/sportwidget";
import NewPosts from "./ui/main page/newposts";
import LatestVideo from "./ui/main page/latestvideos";
import TrendyPosts from "./ui/main page/trendyposts";

export default function Home() {
  return (
    <div>
      <Header />
      <TopTags />
      <SingleContent />
      <Popularposts />
      <SportWidget />
      <NewPosts />
      <LatestVideo />
      <TrendyPosts />
    </div>
  );
}
