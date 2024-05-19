import weatherdata from "@/lib/weather";
import CardLineChart from "./weatherwidget/chart";
import LineChart from "./weatherwidget/chart";
import Image from "next/image";
import CityWidget from "./weatherwidget/citywidget";

export default async function Weather() {
  return (
    <div className="bg-Gray">
      <div className="w-10/12 mx-auto my-16 grid grid-cols-2 py-12">
        <div>
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
        <div className="grid grid-cols-2 gap-5 text-White">
          <CityWidget cityName="Ankara" src="/weather/04.jpg" />
          <CityWidget cityName="Alaska" src="/city/03.jpg" />
          <CityWidget cityName="Berlin" src="/weather/12.jpg" />
          <CityWidget cityName="Paris" src="/city/01.jpg" />
        </div>
      </div>
    </div>
  );
}
