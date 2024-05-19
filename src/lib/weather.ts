const key = "d03fc2b1a10cbea9c6be9edb5f873524";
async function findloc(city: string) {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`
  );
  return res.json();
}
export default async function weatherdata(city: string) {
  const loc = await findloc(city);
  const getWeatherdata = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${loc[0].lat}&lon=${loc[0].lon}&appid=${key}`
    );
    return res.json();
  };
  const data = await getWeatherdata();
  return data;
}
