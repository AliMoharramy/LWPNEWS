import Image from "next/image";
import Calender from "./sportTable/calender";
import ClubTable from "./sportTable/clubtable";
import Competition from "./sportTable/competition";

export default function SportWidget() {
  return (
    <div className="relative py-16">
      <Image
        src="/sport/06.jpg"
        alt="sport"
        fill
        className="-z-50 blur-sm object-cover"
      />
      <div className="w-10/12 mx-auto flex flex-row gap-1">
        <Calender />
        <ClubTable />
        <Competition />
      </div>
    </div>
  );
}
