const { sendPostRequest } = require('./utils');
require('dotenv').config();

function generateId() {
    return Date.now().toString() + Math.floor(Math.random() * 1000000).toString();
}

async function winBet(amount, betTransactionId, parentTransactionId, betslipId) {
    const transactionId = generateId();
    const selectionId = generateId();

    console.log('Transaction ID:', transactionId);
    console.log('Selection ID:', selectionId);

    const payload = {
        payload: {
            amount: amount * 100,
            currency: 'TRY',
            transaction: {
                id: transactionId,
                timestamp: Date.now() / 1000,
                amount: 1000,
                currency: 'TRY',
                operation: 'win',
                betslip_id: betslipId,
                player_id: '2376504177640738822',
                operator_id: '2223097160642207744',
                operator_brand_id: '2223097831193976832',
                ext_player_id: '104048',
                cross_rate_euro: '1',
                parent_transaction_id: parentTransactionId
            },
            selections: [
                {
                    id: selectionId,
                    status: 'won',
                    odds: '2',
                    event_id: '2305732325675240000'
                }
            ],
            odds: '2',
            bet_transaction_id: betTransactionId,
            is_cashout: false,
            is_snr_lost: false
        }
    };

    const endpoint = '/bet/win';
    const response = await sendPostRequest(endpoint, payload);
    return response;
}

module.exports = { winBet };