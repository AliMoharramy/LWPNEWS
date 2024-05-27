import Image from "next/image";
import TopTags from "./ui/main page/topTags";
import SingleContent from "./ui/main page/singlecon";
import SportWidget from "./ui/main page/sportwidget";
import NewPosts from "./ui/main page/newposts";
import LatestVideo from "./ui/main page/latestvideos";
import Weather from "./ui/main page/weather";
import PostSlide from "./ui/main page/postSlide";
import { posts } from "./../lib/posts.json";
import Menubar from "./ui/main page/menubar";

export default function Home() {
  return (
    <div>
      <TopTags />\
      <SingleContent />
      <PostSlide
        useclass={"popularPosts"}
        title={"Popular Posts"}
        posts={posts.filter((item, index) => index >= 0 && index < 5)}
      />
      <SportWidget />
      <NewPosts />
      <LatestVideo />
      <PostSlide
        useclass={"trendyPosts"}
        title={"Trendy Posts"}
        posts={posts.filter((item, index) => index >= 4 && index < 8)}
      />
      <Weather />
      <PostSlide
        useclass={"topPosts"}
        title={"Top Posts"}
        posts={posts.filter((item, index) => index >= 8 && index < 12)}
      />
    </div>
  );
}
