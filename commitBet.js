const { sendPostRequest } = require('./utils');
require('dotenv').config();

async function commitBet(betTransactionId) {
    const payload = {
        payload: {
            bet_transaction_id: betTransactionId
        }
    };

    const endpoint = '/bet/commit';
    const response = await sendPostRequest(endpoint, payload);
    return response;
}

module.exports = { commitBet };