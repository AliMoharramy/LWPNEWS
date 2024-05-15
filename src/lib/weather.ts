const key = "d03fc2b1a10cbea9c6be9edb5f873524";
async function findloc() {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=Tabriz&limit=5&appid=${key}`
  );
  return res.json();
}
export default async function weatherdata() {
  const loc = await findloc();
  const getWeatherdata = async () => {
    const res = await fetch(
      //"https://api.openweathermap.org/data/2.5/weather?lat=35.6892523&lon=51.3896004&appid=d03fc2b1a10cbea9c6be9edb5f873524"
      //`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${loc[0].lat}&lon=${loc[0].lon}&appid=${key}`
      `https://api.openweathermap.org/data/2.5/weather?lat=${loc[0].lat}&lon=${loc[0].lon}&appid=${key}`
    );
    return res.json();
  };
  const data = await getWeatherdata();
  return data;
}
