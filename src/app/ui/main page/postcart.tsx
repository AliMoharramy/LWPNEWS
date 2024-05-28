"use client";
import Image from "next/image";
import { post } from "@/lib/definition";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function PostCart({ data }: { data: post }) {
  const router = useRouter();
  function postLink(e: React.MouseEvent) {
    e.preventDefault();
    router.push(`/posts/${data.id}`);
  }
  return (
    <div
      className="p-2 rounded-xl shadowbox cursor-pointer"
      onClick={(e) => postLink(e)}
    >
      <div className="relative h-40">
        <Image
          src={`/${data.name}/${data.src}`}
          alt={data.name}
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div className="rounded-xl">
        <h4 className="text-sm font-bold my-4 overflow-hidden text-ellipsis line-clamp-1">
          {data.title}
        </h4>
        <p className="overflow-hidden text-ellipsis line-clamp-2 text-sm text-Black75">
          {data.text}
        </p>
      </div>
      <div className="user mt-4 flex flex-row justify-between items-center bg-Gray rounded-xl p-3">
        <div className="flex flex-row items-center">
          <Image
            src={`/avatar/${data.userimage}`}
            width={40}
            height={0}
            alt="user"
            className="rounded-xl mr-2"
          />
          <div className="text-sm">
            <p>{data.username}</p>
            <p className="text-Black75">{data.date}</p>
          </div>
        </div>
        <div id="savebtn" className="p-3 rounded-xl ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-3 cursor-pointer fill-Black50"
          >
            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
