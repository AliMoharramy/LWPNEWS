"use client";
import Image from "next/image";
import { useState } from "react";

export default function CommentCard({ reply = false }: { reply?: boolean }) {
  function replycommentwidht(e: HTMLDivElement | null) {
    e && setReplyHeight(e.scrollHeight);
  }
  const [replyHeight, setReplyHeight] = useState(reply ? 148 : 15);
  return (
    <div
      className="bg-Gray rounded-xl p-3 relative"
      style={{
        marginBottom: replyHeight,
        paddingBottom: reply ? replyHeight / 4 : replyHeight,
      }}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-2">
          <div className="relative w-16 h-16">
            <Image
              src="/avatar/06.jpg"
              alt="avatar"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p>Jon Kantner</p>
            <div className="flex flex-row gap-2 items-center text-xs text-Black75">
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
              <p>2022 04 July</p>
            </div>
          </div>
        </div>
        <button className="text-Black75 flex flex-row gap-1 items-center text-sm bg-Black5 p-2 px-3 rounded-xl h-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-3"
          >
            <path
              fill="rgba(62, 50, 50, 0.5)"
              d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
            />
          </svg>
          <p>Reply</p>
        </button>
      </div>
      <div className="px-1 pt-5 text-sm text-Black75">
        <p>
          When you are ready to indulge your sense of excitement, check out the
          range of water- sports opportunities at the resort’s on-site
          water-sports center. Want to leave your stress on the water? The
          resort has kayaks, paddleboards, or the low-key pedal boats.
        </p>
      </div>
      {reply && (
        <div
          className="absolute bg-White w-11/12 abscenter p-3 rounded-xl -bottom-20 shadowbox"
          ref={(e) => replycommentwidht(e)}
          style={{ bottom: -replyHeight + 15 }}
        >
          <div className="mb-4">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-2">
                <div className="relative w-16 h-16">
                  <Image
                    src="/avatar/03.jpg"
                    alt="avatar"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Mary</p>
                  <div className="flex flex-row gap-2 items-center text-xs text-Black75">
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
                    <p>2022 04 July</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-1 pt-5 text-sm text-Black75">
              <p>
                a river or a lake island may be called an eyot or ait, and a
                small island off the coast may be called a holm. Sedimentary
                islands in the Ganges delta are called chars. A grouping of
                geographically or geologically related islands, such as the
                Philippines, is referred to as an archipelago.
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-2">
                <div className="relative w-16 h-16">
                  <Image
                    src="/avatar/08.jpg"
                    alt="avatar"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Amad</p>
                  <div className="flex flex-row gap-2 items-center text-xs text-Black75">
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
                    <p>2022 04 July</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-1 pt-5 text-sm text-Black75">
              <p>
                a river or a lake island may be called an eyot or ait, and a
                small island off the coast may be called a holm. Sedimentary
                islands in the Ganges delta are called chars. A grouping of
                geographically or geologically related islands, such as the
                Philippines, is referred to as an archipelago. a river or a lake
                island may be called an eyot or ait, and a small island off the
                coast may be called a holm. Sedimentary islands in the Ganges
                delta are called chars. A grouping of geographically or
                geologically related islands, such as the Philippines, is
                referred to as an archipelago.
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-2">
                <div className="relative w-16 h-16">
                  <Image
                    src="/avatar/03.jpg"
                    alt="avatar"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Mary</p>
                  <div className="flex flex-row gap-2 items-center text-xs text-Black75">
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
                    <p>2022 04 July</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-1 pt-5 text-sm text-Black75">
              <p>
                a river or a lake island may be called an eyot or ait, and a
                small island off the coast may be called a holm. Sedimentary
                islands in the Ganges delta are called chars. A grouping of
                geographically or geologically related islands, such as the
                Philippines, is referred to as an archipelago.
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-2">
                <div className="relative w-16 h-16">
                  <Image
                    src="/avatar/08.jpg"
                    alt="avatar"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Amad</p>
                  <div className="flex flex-row gap-2 items-center text-xs text-Black75">
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
                    <p>2022 04 July</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-1 pt-5 text-sm text-Black75">
              <p>
                a river or a lake island may be called an eyot or ait, and a
                small island off the coast may be called a holm. Sedimentary
                islands in the Ganges delta are called chars. A grouping of
                geographically or geologically related islands, such as the
                Philippines, is referred to as an archipelago. a river or a lake
                island may be called an eyot or ait, and a small island off the
                coast may be called a holm. Sedimentary islands in the Ganges
                delta are called chars. A grouping of geographically or
                geologically related islands, such as the Philippines, is
                referred to as an archipelago.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
