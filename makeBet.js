const { sendPostRequest } = require('./utils');

async function makeBet() {
  const payload = {
    amount: 500,
    currency: 'TRY',
    transaction: {
      id: '1718916465915',
      timestamp: 1718916465.782417558,
      amount: 500,
      currency: 'TRY',
      operation: 'bet',
      betslip_id: '23f399992d404e26adc39ed9a6353609',
      player_id: '2376504177640738822',
      operator_id: '2223097160642207744',
      operator_brand_id: '2223097831193976832',
      ext_player_id: '104048',
      cross_rate_euro: '1'
    },
    betslip: {
      id: '23f399992d404e26adc39ed9a6353609',
      timestamp: 1718916465.782399517,
      currency: 'TRY',
      sum: 500,
      type: '1/1',
      bets: [
        {
          id: '8db3d45b535c45559b026483d98f0f45',
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
    session_id: '2045f5b5-47ba-47c3-86a6-ec76e00272c8',
    potential_win: 15,
    potential_comboboost_win: 0
  };

  const endpoint = '/4/18/bet/make';
  const response = await sendPostRequest(endpoint, payload);
  return response.betId;  // Assuming the response contains a `betId`
}

module.exports = { makeBet };