const MY_API_KEY = 'AIzaSyD_X5m2yFM4jp6kpxDoUD-ORamVzv6ydCc';
const fetchConfig = {
  method: 'POST',
  mode: 'cors',
};

const fetchData = (origin, destinations, callback) =>
 fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURI(origin)}&destinations=${encodeURI(destinations)}&key=${MY_API_KEY}`, fetchConfig)
  .then(response => response.json())
  .then(({ destination_addresses, origin_addresses, rows}) => {
    const currentDate = new Date();
    const distance = rows[0].elements[0].distance.text;
    const day = `${currentDate.getMonth()+1}/${currentDate.getDate()}`;
    const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    const result = `${day} ${time} ${origin_addresses} - ${destination_addresses} = ${distance}`;
    callback(result);
  })
  .catch(err => {
    const currentDate = new Date();
    const day = `${currentDate.getMonth()+1}/${currentDate.getDate()}`;
    const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    callback(`${day} ${time} : ${err}`)
  });

export default fetchData;
