import axios from "axios";

class Api {
  static async getWeather(cityName) {
    const getWeather = new Address(
      (
        await axios.get(
          `https://api.hgbrasil.com/weather?key=fe0bb0cb&city_name=${cityName}fe0bb0cb`
        )
      ).data.results
    );
    return getWeather;
  }
}

class Address {
  constructor({ temp, date, description, currently, city, humidity }) {
    (this.temp = temp),
      (this.date = date),
      (this.description = description),
      (this.currently = currently),
      (this.city = city),
      (this.humidity = humidity);
  }
}

Api.getWeather("Pelotas,RS").then((v) => {
  console.log(v);
});
