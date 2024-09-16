const axios = require("axios");
const mapArrToStrings = require("../mapArrToStrings/mapArrToStrings");

const getData = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const ids = res.data.map((user) => user.id);
    return mapArrToStrings(ids);
  } catch (e) {}
};

module.exports = getData;
