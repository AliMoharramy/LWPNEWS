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

export default function Home() {
  return (
    <div>
      <Header />
      <TopTags />
      <SingleContent />
      <PostBar
        title={"Popular Posts"}
        posts={posts.filter((item, index) => index >= 0 && index < 4)}
      />
      <SportWidget />
      <NewPosts />
      <LatestVideo />
      <PostBar
        title={"Trendy Posts"}
        posts={posts.filter((item, index) => index >= 4 && index < 8)}
      />
      <Weather />
      <PostBar
        title={"Top Posts"}
        posts={posts.filter((item, index) => index >= 8 && index < 12)}
      />
    </div>
  );
}
