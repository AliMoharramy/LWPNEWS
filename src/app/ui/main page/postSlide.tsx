"use client";
import { post } from "@/lib/definition";
import PostCart from "./postcart";
import SectionHead from "./sectionhead";
import { useState } from "react";

export default function PostSlide({
  title,
  posts,
  useclass,
}: {
  title: string;
  posts: Array<post>;
  useclass: string;
}) {
  const isSmallDevice = window.screen.width < 640 ? true : false;
  const [max, setMax] = useState(isSmallDevice ? 1 : 4);
  const [min, setMin] = useState(0);
  function gonext() {
    if (max < posts.length) {
      setMin(min + 1);
      setMax(max + 1);
    }
  }
  function goback() {
    if (min > 0) {
      setMax(max - 1);
      setMin(min - 1);
    }
  }
  return (
    <div className={`w-10/12 mx-auto my-16 ${useclass}`}>
      <SectionHead title={title} gonext={gonext} goback={goback} />
      <div
        className={`grid ${
          isSmallDevice ? "grid-cols-1" : "grid-cols-4"
        } gap-4`}
      >
        {posts.map(
          (post, index) =>
            index >= min && index < max && <PostCart data={post} key={index} />
        )}
      </div>
    </div>
  );
}
