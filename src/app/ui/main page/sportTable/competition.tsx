import Image from "next/image";

export default function Competition() {
  return (
    <div className="z-50 bg-White p-4 rounded-xl flex flex-col items-center justify-between">
      <div className="text-center">
        <p>The Final Round</p>
      </div>
      <div className="grid grid-cols-3">
        <div className="relative w-full">
          <Image src="/team/09.png" alt="team" fill className="object-cover" />
        </div>
        <div className="text-center mt-8">
          <p className="gradivs text-5xl font-bold">VS</p>
          <p className="text-xs mt-4">Tuesday, May 13th</p>
        </div>
        <div className="relative w-full">
          <Image src="/team/05.png" alt="team" fill className="object-cover" />
        </div>
      </div>
      <div className="flex flex-row gap-1 mt-8">
        <p className="bg-Blue text-White py-2 px-6 rounded-l-xl">
          Manchester City
        </p>
        <p className="bg-Black text-White py-2 px-3 rounded-l-xl">00</p>
        <p className="bg-Black text-White py-2 px-3 rounded-r-xl">00</p>
        <p className="bg-Red text-White py-2 px-6 rounded-r-xl">
          Tottenham Hotspur
        </p>
      </div>
    </div>
  );
}
