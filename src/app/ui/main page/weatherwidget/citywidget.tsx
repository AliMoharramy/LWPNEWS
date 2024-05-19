import Image from "next/image";
import weatherdata from "@/lib/weather";

export default async function CityWidget({
  cityName,
  src,
}: {
  cityName: string;
  src: string;
}) {
  const data = await weatherdata(cityName);
  const timezone = data.timezone * 1000;
  const date = new Date().getMilliseconds() + timezone;
  const times = new Date(date);
  return (
    <div className={`relative myimage ${cityName} rounded-xl overflow-hidden`}>
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
          <p className="text-xs py-2">{`Tuesday ${times.getHours()}:${times.getMinutes()} AM`}</p>
        </div>
        <div className="relative z-40 col-span-2 flex justify-center">
          <Image
            alt="icon"
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            width={80}
            height={80}
          />
          <p className="flex items-center text-3xl">
            {Math.round(data.main.temp - 273.15)}°
          </p>
        </div>
      </div>
    </div>
  );
}
