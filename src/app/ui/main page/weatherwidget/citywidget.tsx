import Image from "next/image";
import weatherdata, { timezone } from "@/lib/weather";

export default async function CityWidget({
  continent,
  cityName,
  src,
}: {
  continent: string;
  cityName: string;
  src: string;
}) {
  const data = await weatherdata(cityName);
  const time = await timezone(cityName, continent);
  return (
    <div
      className={`relative myimage ${cityName} rounded-xl overflow-hidden h-60`}
    >
      <Image
        src={src}
        alt="city"
        fill
        className="object-cover z-10 rounded-xl"
      />

      <div className="grid grid-cols-2 w-full justify-between absolute z-20 rounded-xl p-4 h-full">
        <div className="text-xs">
          <p>Precipitation: 0%</p>
          <p className="py-1">{`Humidity: ${data.main.humidity}%`}</p>
          <p>{`Wind: ${data.wind.speed} Km/H`}</p>
        </div>
        <div className="flex flex-col items-end">
          <h5 className="text-xl">{cityName}</h5>
          <p className="text-xs py-2">{`Tuesday ${time.time || "00:00"}`}</p>
        </div>
        <div className="z-40 col-span-2 flex justify-center">
          <div className="relative w-4/12">
            <Image
              alt="icon"
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              fill
              className="object-cover"
            />
          </div>
          <p className="flex items-center text-3xl">
            {Math.round(data.main.temp - 273.15)}°
          </p>
        </div>
      </div>
    </div>
  );
}
