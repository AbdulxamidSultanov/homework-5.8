
let vazifa1 = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
})
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Hatolik");
    }
  })
  .then((data) => {
    data.forEach((data) => {
      let firItem = data.title;
      let secondItem = data.body;
      
      console.log(`Title: ${firItem},

Body: ${secondItem}

`);
    });
  })

  .catch((error) => {
    console.log(error);
  });


async function getRandomUser() {
    const api = 'https://randomuser.me/api/';
    try {
        const response = await fetch(api);

        if (response.status !== 200) {
            throw new Error("hatolik");
        }

        const data = await response.json();
        const user = data.results[0];
        console.log(`2-masala:`);
        console.log(`Ismi: ${user.name.first} ${user.name.last}`);
        console.log(`Ismi: ${user.email}`);
        console.log(`Ismi: ${user.location.street.name}`);
    } catch (error) {
        console.log(error.message);
    }
}

getRandomUser();
async function getCovidStatistic() {
    const api = "https://disease.sh/v3/covid-19/all"
    try {
        const response = await fetch(api)
        if(response.status !== 200){
            throw new Error("Xatolik")
        }
        const data = await response.json()
        
        const covid = data
        
        console.log(`Jami kasallanganlar (cases): ${covid.cases}`)
        console.log(`Jami vafot etganlar (deaths): ${covid.deaths} `)
        console.log(`Jami tuzalganlar (recovered): ${covid.recovered}`)
    }catch(error) {
        console.log(error)
    }
}

getCovidStatistic()


async function getBtcPrice() {
    const api = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    try{
        const response = await fetch(api)

        if(response.status !== 200){
            throw new Error('hatolik')
        }

        const data = await response.json()
        const price = data

        console.log(`BTC price (USD): ${price.bpi.USD.rate}`)
        console.log(`BTC price (GBP): ${price.bpi.GBP.rate}`)
        console.log(`BTC price (EUR): ${price.bpi.EUR.rate}`)
    }catch(error){
        console.log(error.message)
    }
}

getBtcPrice()

async function getWeatherForecast() {
    const api = 'https://goweather.herokuapp.com/weather/ferghana'

    try{
        const response = await fetch(api)

        if(response.status !== 200){
            throw new Error('hatolik')
        }

        const data = await response.json()

        console.log(`Havo harorati: ${data.temperature}`)
    }catch(error){
        console.log(error.message)
    }
}

getWeatherForecast()