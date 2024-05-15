import weatherdata from "@/lib/weather";
import CardLineChart from "./weatherwidget/chart";
import LineChart from "./weatherwidget/chart";
import Image from "next/image";

export default async function Weather() {
  const data = await weatherdata();
  console.log(data);
  return (
    <div className="bg-Gray">
      <div className="w-10/12 mx-auto my-16">
        <LineChart />
        <div className="relative bg-Black">
          {/* <Image
            alt="icon"
            src={`https://openweathermap.org/img/wn/02d@2x.png`}
            width={50}
            height={50}
          /> */}
        </div>
      </div>
    </div>
  );
}
