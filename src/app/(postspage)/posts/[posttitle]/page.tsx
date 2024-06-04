import { posts } from "./../../../../lib/posts.json";
import { params } from "@/lib/definition";
import SideBar from "../../../ui/posts/sidebar";
import Image from "next/image";
import Comments from "@/app/ui/posts/comments";
import AddComment from "@/app/ui/posts/addcomment";
import PostSlide from "@/app/ui/main page/postSlide";
import Link from "next/link";

export default async function PostPage({ params }: { params: params }) {
  const data = posts.find(
    (item) => item.id === decodeURIComponent(params.posttitle)
  );
  return (
    <main className="">
      <div className="flex flex-row gap-3 text-xs w-10/12 m-auto my-8">
        <Link href="/">Home</Link>
        <p>{">"}</p>
        <Link href="/posts">Posts</Link>
        <p>{">"}</p>
        <Link href={`/posts/${data?.id}`} className="text-Black75">
          {data?.id}
        </Link>
      </div>
      <div className="grid lg:grid-cols-8 w-10/12 m-auto gap-5">
        <div className="col-span-6">
          <div className="relative lg:bg-Gray rounded-xl h-138 mb-32 p-4">
            <h4 className="text-2xl mb-4">{data?.title}</h4>
            <div className="absolute h-138 w-19/20 m-auto abscenter">
              <Image
                src={`/${data?.name}/${data?.src}`}
                alt={"image"}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="text-xs text-Black75 flex flex-row justify-around w-6/12 m-auto absolute abscenter -bottom-24">
              <div className="flex flex-row gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-3"
                >
                  <path
                    fill="rgba(62, 50, 50, 0.75)"
                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"
                  />
                </svg>
                <p>July 14 , 2022</p>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-3"
                >
                  <path
                    fill="rgba(62, 50, 50, 0.75)"
                    d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"
                  />
                </svg>
                <p>Comments : 35</p>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-3"
                >
                  <path
                    fill="rgba(62, 50, 50, 0.75)"
                    d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"
                  />
                </svg>
                <p>Category : Sport</p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-xl my-4">
              Don’t wait. The purpose of our lives is to be happy!
            </h5>
            <p>
              Upon arrival, your senses will be rewarded with the pleasant scent
              of lemongrass oil used to clean the natural wood found throughout
              the room, creating a relaxing atmosphere within the space.
            </p>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite.
            </p>
            <div className="relative h-96 rounded-xl m-12">
              <Image
                src="/sport/01.jpg"
                alt="sport"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h5 className="text-xl my-4">
              Not how long, but how well you have lived is the main thing.
            </h5>
            <p>
              When you are ready to indulge your sense of excitement, check out
              the range of water- sports opportunities at the resort’s on-site
              water-sports center. Want to leave your stress on the water? The
              resort has kayaks, paddleboards, or the low-key pedal boats.
              Snorkeling equipment is available as well, so you can experience
              the ever-changing undersea environment.
            </p>
            <p>
              Not only do visitors to a bed and breakfast get a unique
              perspective on the place they are visiting, they have options for
              special packages not available in other hotel settings. Bed and
              breakfasts can partner easily with local businesses for a smoothly
              organized and highly personalized vacation experience. The Fife
              and Drum Inn offers options such as the Historic Triangle Package
              that includes three nights at the Inn, breakfasts, and admissions
              to historic Williamsburg, Jamestown, and Yorktown. Bed and
              breakfasts also lend themselves to romance.
            </p>
            <p>
              Part of the charm of a bed and breakfast is the uniqueness; art,
              décor, and food are integrated to create a complete experience.
              For example, the Fife and Drum retains the colonial feel of the
              area in all its guest rooms. Special features include antique
              furnishings, elegant four poster beds in some guest rooms, as well
              folk art and artifacts from the restoration period of the historic
              area available for guests to enjoy.
            </p>
          </div>
          <Comments />
          <AddComment />
        </div>
        {data && <SideBar data={data} />}
      </div>
      <PostSlide
        useclass={"relatedposts"}
        title={"related posts"}
        posts={posts.filter((item, index) => index >= 4 && index < 18)}
      />
    </main>
  );
}
