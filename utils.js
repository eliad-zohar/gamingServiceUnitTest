const jwt = require('jsonwebtoken');
const axios = require('axios');
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
const baseUrl = process.env.BASE_URL;

function createSignedJWT(payload) {
  return jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: '1h' });
}

async function sendPostRequest(endpoint, payload) {
  const token = createSignedJWT(payload);
  const url = `${baseUrl}${endpoint}`;
  const requestBody = { payload: token };
  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Log request details
    console.log('Request URL:', url);
    console.log('Request Headers:', response.config.headers);
    console.log('Request Body:', requestBody);

    // Log response details
    console.log('Response Code:', response.status);
    console.log('Response Status:', response.statusText);
    console.log('Response Body:', response.data);

    return response.data;
  } catch (error) {
    if (error.response) {
      // Log request details on error
      console.log('Request URL:', error.config.url);
      console.log('Request Headers:', error.config.headers);
      console.log('Request Body:', requestBody);

      // Log response details on error
      console.log('Response Code:', error.response.status);
      console.log('Response Body:', error.response.data);

      console.error('Error sending POST request:', error.response.data);
    } else {
      console.error('Error sending POST request:', error);
    }
    // Optionally throw the error if needed
    // throw error;
  }
}

module.exports = { createSignedJWT, sendPostRequest };