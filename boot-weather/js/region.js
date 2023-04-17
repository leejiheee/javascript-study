//1. 전체 url 가져오기
const currentURL = location.href;
console.log(currentURL);

//2. 쿼리스트링 파라메터 가져오기
const urlObj = new URL(currentURL);

//파라메터에 대한 정보가 들어있다.
const params = urlObj.searchParams;
console.log(params);

//파라메터의 값을 구한다 => params.get("변수명");
const q = params.get("q");
const krcity = params.get("krcity");

console.log(q, krcity);

//3. ajax 이용해 전체 날씨정보 얻어오기 (index.js 에 있는 날씨정보 가져오기 참고)
function getCityWeather(q) {
  var temp = {};
  var urlAPI =
    "https://api.openweathermap.org/data/2.5/weather?appid=8886786042db573540e91b7ebc8bba46&units=metric&lang=kr";
  urlAPI += "&q=" + q;

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태 => ajax는 기본적으로 비동기다.
    success: function (data) {
      console.log(data);

      const celsius = data.main.temp;
      const icon = data.weather[0].icon;
      const description = data.weather[0].description;
      const feels = data.main.feels_like;
      const humidity = data.main.humidity;
      const wind = data.wind.speed;
      const cloud = data.clouds.all;

      temp.celsius = celsius.toFixed(0);
      temp.icon = icon;
      temp.description = description;
      temp.feels = feels.toFixed(0);
      temp.humidity = humidity;
      temp.wind = wind;
      temp.cloud = cloud;
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  return temp;
}
//4. 데이터 바인딩 작업
$(".region-title").text(`${krcity} 상세날씨`);
$(".card-header").text(`${krcity}`);

let temp = getCityWeather(q);

$(".region-weather").text(`${temp.celsius} ℃`);
var iconURL = "https://openweathermap.org/img/wn/" + temp.icon + ".png";

$(".region-icon").attr("src", iconURL);

$(".description").text(`날씨상태: ${temp.description}`);

$(".feels").text(`체감온도: ${temp.feels} ℃`);

$(".humidity").text(`습도: ${temp.humidity} %`);

$(".wind").text(`풍속: ${temp.wind} m/s`);

$(".cloud").text(`흐림정도: ${temp.cloud} %`);
