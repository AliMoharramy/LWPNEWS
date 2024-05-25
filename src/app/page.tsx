import Image from "next/image";
import Header from "./ui/main page/header";
import TopTags from "./ui/main page/topTags";
import SingleContent from "./ui/main page/singlecon";
import SportWidget from "./ui/main page/sportwidget";
import NewPosts from "./ui/main page/newposts";
import LatestVideo from "./ui/main page/latestvideos";
import Weather from "./ui/main page/weather";
import PostBar from "./ui/main page/postbar";
import { posts } from "./../lib/posts.json";
import Menubar from "./ui/main page/menubar";

export default function Home() {
  return (
    <div>
      <Header />
      <TopTags />
      <SingleContent />
      <PostBar
        useclass={"popularPosts"}
        title={"Popular Posts"}
        posts={posts.filter((item, index) => index >= 0 && index < 5)}
      />
      <SportWidget />
      <NewPosts />
      <LatestVideo />
      <PostBar
        useclass={"trendyPosts"}
        title={"Trendy Posts"}
        posts={posts.filter((item, index) => index >= 4 && index < 8)}
      />
      <Weather />
      <PostBar
        useclass={"topPosts"}
        title={"Top Posts"}
        posts={posts.filter((item, index) => index >= 8 && index < 12)}
      />
    </div>
  );
}
