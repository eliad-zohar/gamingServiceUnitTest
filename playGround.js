const { makeBet } = require('./makeBet');
const { commitBet } = require('./commitBet');
const { rollbackBet } = require('./rollbackBet');
const { winBet } = require('./winBet');

async function runBetTestFlow() {
  try {
    // Start balance - 10

    const bet = await makeBet(5);

    const commit = await commitBet(bet.id);

    const win = await winBet(10, bet.id, bet.transactionId, bet.betslipId);

    const bet2 = await makeBet(7.5);

    const commit2 = await commitBet(bet2.id);

    const rollback = await rollbackBet(10, bet.id, win.id, bet.betslipId);

    const win2 = await winBet(10, bet.id, bet.transactionId, bet.betslipId);

    const rollback2 = await rollbackBet(10, bet.id, win2.id, bet.betslipId);
  

  } catch (error) {
    console.error('Error in Bet Test Flow:', error);
  }
}

// Run the flow
runBetTestFlow();