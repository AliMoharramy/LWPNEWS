import Image from "next/image";
import { post } from "@/lib/definition";

export default function VideoCart({ data }: { data: post }) {
  return (
    <div className="p-2 rounded-xl shadowbox grid grid-cols-2">
      <div className="relative w-full">
        <Image
          src={`/${data.name}/${data.src}`}
          alt={data.name}
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div className="ml-3">
        <h4 className="text-sm text-Black font-bold my-4 overflow-hidden text-ellipsis line-clamp-1 block">
          {data.title}
        </h4>
        <p className=" text-sm text-Black75 block w-full">{data.text}</p>
      </div>
    </div>
  );
}
