import Image from "next/image";
import SectionHead from "../main page/sectionhead";
import CommentCard from "./commentcard";

export default function Comments() {
  return (
    <div className="my-16">
      <div className="flex flex-row justify-between my-6 items-center">
        <h4 className="popualrtitle relative before:bg-Primary">Comments</h4>
      </div>
      <div className="flex flex-col gap-3">
        <CommentCard reply={true} />
        <CommentCard />
      </div>
    </div>
  );
}
