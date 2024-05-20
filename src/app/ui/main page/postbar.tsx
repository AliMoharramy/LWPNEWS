import { post } from "@/lib/definition";
import PostCart from "./postcart";
import SectionHead from "./sectionhead";

export default function PostBar({
  title,
  posts,
}: {
  title: string;
  posts: Array<post>;
}) {
  return (
    <div className="w-10/12 mx-auto my-16">
      <SectionHead title={title} />
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post, index) => (
          <PostCart data={post} key={index} />
        ))}
      </div>
    </div>
  );
}
