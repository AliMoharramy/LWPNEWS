import PostCart from "./postcart";
import SectionHead from "./sectionhead";

export default function TrendyPosts() {
  const posts = [
    {
      name: "car",
      src: "08.jpg",
      title: "How to build a self-driving car in one month",
      text: "Can I learn the necessary computer science to build the software part of a self-driving car in one month?",
      userimage: "02.jpg",
      username: "Mary",
      date: "July 14 , 2022",
    },
    {
      name: "sport",
      src: "10.jpg",
      title: "Self-Improvement Has Become An Extreme Sport",
      text: "What we’re told we must do each day to develop and be successful has gone out of control. We have endless lists of habits that we’re supposed to do",
      userimage: "12.jpg",
      username: "James",
      date: "July 14 , 2022",
    },
    {
      name: "food",
      src: "06.jpg",
      title: "10 Cooking Lessons to Use in Everyday Life",
      text: "I recently stumbled upon this quote by Paul Theroux: “Cooking requires confident guesswork and improvisation ",
      userimage: "10.jpg",
      username: "Jon Kantner",
      date: "July 14 , 2022",
    },
    {
      name: "technology",
      src: "06.jpg",
      title:
        "Typography can make or break your design: a process for choosing type",
      text: "One of the most important skills you can learn as a designer is how to choose type. This is because text is one of the primary ways designers can communicate with users. Typography can make or break a design. There’s a beauty and complexity to typography. Some people devote their…",
      userimage: "01.jpg",
      username: "Robert",
      date: "July 14 , 2022",
    },
  ];
  return (
    <div className="w-10/12 mx-auto my-16">
      <SectionHead title="Trendy Posts" />
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post, index) => (
          <PostCart data={post} key={index} />
        ))}
      </div>
    </div>
  );
}
