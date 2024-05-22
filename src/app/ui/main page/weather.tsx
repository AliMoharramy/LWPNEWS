import weatherdata, { timezone } from "@/lib/weather";
import CardLineChart from "./weatherwidget/chart";
import LineChart from "./weatherwidget/chart";
import Image from "next/image";
import CityWidget from "./weatherwidget/citywidget";

export default async function Weather() {
  const data = await weatherdata("New York");
  const time = await timezone("New York", "North American");

  return (
    <div className="bg-Gray">
      <div className="w-10/12 mx-auto my-16 grid grid-cols-2 py-16 gap-5">
        <div className="bg-White rounded-xl p-4">
          <div className="flex flex-row items-center justify-between">
            <div className="relative z-40 col-span-2 flex justify-center items-center">
              <Image
                alt="icon"
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                width={80}
                height={80}
              />
              <p className="flex items-center text-3xl">
                {Math.round(data.main.temp - 273.15)}°
              </p>
              <div className="text-xs ml-4">
                <p>Precipitation: 0%</p>
                <p className="py-1">{`Humidity: ${data.main.humidity}%`}</p>
                <p>{`Wind: ${data.wind.speed} Km/H`}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-end">
                <h5 className="text-xl">New York, NY</h5>
                <p className="text-xs py-2">{`Tuesday ${
                  time.time || "00:00"
                }`}</p>
              </div>
            </div>
          </div>
          <LineChart />
          <div className="relative">
            <Image
              alt="icon"
              src={`https://openweathermap.org/img/wn/02d@2x.png`}
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 text-White">
          <CityWidget
            cityName="Ankara"
            continent="Asia"
            src="/weather/04.jpg"
          />
          <CityWidget
            cityName="Alaska"
            continent="American"
            src="/city/03.jpg"
          />
          <CityWidget
            cityName="Berlin"
            continent="Europe"
            src="/weather/12.jpg"
          />
          <CityWidget cityName="Paris" continent="Europe" src="/city/01.jpg" />
        </div>
      </div>
    </div>
  );
}
