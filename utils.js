const jwt = require('jsonwebtoken');
const axios = require('axios');
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
const baseUrl = process.env.BASE_URL;

function createSignedJWT(payload) {
  return jwt.sign({ payload }, privateKey, { algorithm: 'RS256', expiresIn: '1h' });
}

async function sendPostRequest(endpoint, payload) {
  const token = createSignedJWT(payload);
  try {
    const response = await axios.post(`${baseUrl}${endpoint}`, { payload: token });
    return response.data;
  } catch (error) {
    console.error('Error sending POST request:', error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = { createSignedJWT, sendPostRequest };