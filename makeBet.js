const { sendPostRequest } = require('./utils');
const { v4: uuidv4 } = require('uuid');  // For generating UUIDs
require('dotenv').config();

const sessionId = process.env.SESSION_ID;

function generateId() {
    return Date.now().toString() + Math.floor(Math.random() * 1000000).toString();
}

async function makeBet() {
  const transactionId = generateId();
  const betslipId = generateId();

  console.log('Transaction ID:', transactionId);
    console.log('Betslip ID:', betslipId);

  const payload = {
    amount: 500,
    currency: 'TRY',
    transaction: {
      id: transactionId,
      timestamp: Date.now() / 1000,
      amount: 500,
      currency: 'TRY',
      operation: 'bet',
      betslip_id: betslipId,
      player_id: '2376504177640738822',
      operator_id: '2223097160642207744',
      operator_brand_id: '2223097831193976832',
      ext_player_id: '104048',
      cross_rate_euro: '1'
    },
    betslip: {
      id: betslipId,
      timestamp: Date.now() / 1000,
      currency: 'TRY',
      sum: 500,
      type: '1/1',
      bets: [
        {
          id: generateId(),
          scheduled: 1752882000,
          odds: '1.5',
          live: false,
          tournament_name: 'CAF Champions League',
          competitor_name: ['Gaadiidka FC', 'Apr FC'],
          market_name: '1x2',
          event_id: '2306034533574770000',
          sport_name: 'Soccer',
          category_name: 'World',
          outcome_name: 'Gaadiidka FC',
          sport_id: '1',
          tournament_id: '1666080317376690000',
          category_id: '2298161925944640000'
        }
      ],
      ext_player_id: '104048',
      k: '1.5',
      is_quick_bet: false,
      accept_odds_change: false,
      player_id: '2376504177640738822',
      operator_id: '2223097160642207744',
      operator_brand_id: '2223097831193976832'
    },
    player_id: '104048',
    session_id: sessionId,
    potential_win: 15,
    potential_comboboost_win: 0
  };

  const endpoint = '/bet/make';
  const response = await sendPostRequest(endpoint, payload);
  return response;  // Assuming the response contains a `betId`
}

module.exports = { makeBet };