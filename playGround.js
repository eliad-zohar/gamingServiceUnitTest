const { makeBet } = require('./makeBet');
const { commitBet } = require('./commitBet');
const { rollbackBet } = require('./rollbackBet');
const { winBet } = require('./winBet');
const { refundBet } = require('./refundBet');

async function runBetTestFlow() {
  try {
    // Start balance - 10

    const bet = await makeBet(0.1); // 10 

    const commit = await commitBet(bet.id);

    const win = await winBet(0.2, bet.id, bet.transactionId, bet.betslipId); // 20 

    // const bet2 = await makeBet(7.5);

    // const commit2 = await commitBet(bet2.id);

    const rollback = await rollbackBet(0.2, bet.id, win.id, bet.betslipId); // 20

    const win2 = await winBet(0.2, bet.id, bet.transactionId, bet.betslipId); // 20

    const rollback2 = await rollbackBet(0.2, bet.id, win2.id, bet.betslipId); // 20

    const refund = await refundBet(0.1, bet.id, rollback.transactionId, bet.betslipId); // 10
  

  } catch (error) {
    console.error('Error in Bet Test Flow:', error);
  }
}

// Run the flow
runBetTestFlow();