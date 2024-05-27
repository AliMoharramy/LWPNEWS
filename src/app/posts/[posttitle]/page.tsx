import { posts } from "./../../../lib/posts.json";

export default async function PostPage({ params }) {
  const data = posts.find(
    (item) => item.title === params.posttitle.split("-").join(" ")
  );
  console.log(data);
  return (
    <div>
      <p className="m-5">{data?.title}</p>
      <p className="m-5">{data?.text}</p>
    </div>
  );
}
