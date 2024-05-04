import Image from "next/image";
import { post } from "@/lib/definition";

export default function PostCart({ data }: { data: post }) {
  return (
    <div className="bg-White p-2 rounded-xl shadow-3xl">
      <div className="relative h-40">
        <Image
          src={`/${data.name}/${data.src}`}
          alt={data.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="bottom-2 left-2 right-2 bg-White75 h-1/4 rounded-xl p-3">
        <h4 className="text-xl mb-2">{data.title}</h4>
        <p className="overflow-hidden text-ellipsis line-clamp-2 text-sm text-Dark75">
          {data.text}
        </p>
      </div>
      <div className="user">user</div>
    </div>
  );
}
