const axios = require('axios');

module.exports = async function getUser() {
  try {
    const response = await axios.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a79974272a5f474d98a7fc69d3670297&pageSize=5');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}