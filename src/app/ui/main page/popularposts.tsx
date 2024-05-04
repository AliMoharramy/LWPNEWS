import PostCart from "./postcart";

export default function Popularposts() {
  const posts = [
    {
      name: "sport",
      src: "05.jpg",
      title: "Opening Day of Boating Season, Seattle WA",
      text: "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
    },
    {
      name: "technology",
      src: "07.jpg",
      title: "How to choose the right laptop for programming",
      text: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
    },
    {
      name: "car",
      src: "02.jpg",
      title: "How we built the first real self-driving car",
      text: "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
    },
    {
      name: "food",
      src: "07.jpg",
      title: "How to Persuade Your Parents to Buy Fast Food",
      text: "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
    },
  ];
  return (
    <div className="my-16">
      <h5 className="popualrtitle relative my-6 before:bg-Primary">
        Popular Posts
      </h5>
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post, index) => (
          <PostCart data={post} key={index} />
        ))}
      </div>
    </div>
  );
}
