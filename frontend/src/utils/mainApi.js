const URL = 'http://localhost:3000/';

export default function getWeather() {
  return fetch(URL).then((res) => res.json());
}
