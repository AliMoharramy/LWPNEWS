import Image from "next/image";

export default function SingleContent() {
  return (
    <div className="grid grid-col-4 gap-4 overflow-hidden h-128  w-10/12 mx-auto">
      <div className="relative">
        <Image
          src="/car/05.jpg"
          alt="car"
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute bottom-2 left-2 right-2 bg-White75 h-1/4 rounded-xl p-3">
          <h4 className="text-xl mb-2">How to Drive a Car Safely</h4>
          <p className="overflow-hidden text-ellipsis line-clamp-2 text-sm text-Dark75">
            Ah, the joy of the open road—it’s a good feeling.But if you’re new
            to driving, you may feel a little nervous about getting behind the
            wheel. Don’t worry. While it’s true that accidents can happen to
            anybody, there are things you can do to drive safely and do your
            best to avoid them.
          </p>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/music/08.jpg"
          alt="music"
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute bottom-2 left-2 right-2 bg-White75 h-1/4 rounded-xl p-3">
          <h4 className="text-xl mb-2">How to Make Dance Music</h4>
          <p className="overflow-hidden text-ellipsis line-clamp-2 text-sm text-Dark75">
            Download torrents from verified or trusted uploaders. If you&apos;re
            a BitTorrent user looking for safety tips, use this method. Both of
            the big-name BitTorrent indexers (The Pirate Bay and
            KickAssTorrents) use symbols to highlight torrents uploaded by
            verified users.
          </p>
        </div>
      </div>
      <div className="col-span-2 col-start-3 relative">
        <Image
          src="/technology/01.jpg"
          alt="technology"
          fill
          className="rounded-xl"
        />
        <div className="absolute bottom-2 left-2 right-2 bg-White75 h-1/4 rounded-xl p-3">
          <h4 className="text-xl mb-2">Why I Stopped Using Multiple Monitor</h4>
          <p className="overflow-hidden text-ellipsis line-clamp-2 text-sm text-Dark75">
            A Single Monitor Manifesto — Many developers believe multiple
            monitors improve productivity. Studies have proven it, right? Well,
            keep in mind, many of those studies are commissioned from monitor
            manufacturers like
          </p>
        </div>
      </div>
    </div>
  );
}
