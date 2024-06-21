const { sendPostRequest } = require('./utils');
require('dotenv').config();

function generateId() {
    return Date.now().toString() + Math.floor(Math.random() * 1000000).toString();
}

async function refundBet(betTransactionId, parentTransactionId, betslipId) {
    const transactionId = generateId();

    console.log('Transaction ID:', transactionId);

    const payload = {
        payload: {
            reason: "Manual bet cancel",
            transaction: {
                id: transactionId,
                timestamp: Date.now() / 1000,
                amount: 10,
                currency: 'TRY',
                operation: 'refund',
                betslip_id: betslipId,
                player_id: '2376504177640738822',
                operator_id: '2223097160642207744',
                operator_brand_id: '2223097831193976832',
                ext_player_id: '104048',
                cross_rate_euro: '1',
                parent_transaction_id: parentTransactionId
            },
            bet_transaction_id: betTransactionId
        }
    };

    const endpoint = '/bet/refund';
    const response = await sendPostRequest(endpoint, payload);
    return response;
}

module.exports = { refundBet };