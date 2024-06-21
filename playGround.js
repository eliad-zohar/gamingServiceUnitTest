const { makeBet } = require('./makeBet');
const { commitBet } = require('./commitBet');
const { rollbackBet } = require('./rollbackBet');
const { winBet } = require('./winBet');

async function runBetTestFlow() {
  try {
    // Start balance - 1000

    const bet = await makeBet(0.1); // 10 | balance - 990

    const commit = await commitBet(bet.id);

    const win = await winBet(0.2, bet.id, bet.transactionId, bet.betslipId); // 20 | balance - 1010

    // const bet2 = await makeBet(7.5);

    // const commit2 = await commitBet(bet2.id);

    const rollback = await rollbackBet(0.2, bet.id, win.id, bet.betslipId); // 10 | balance - 990

    const win2 = await winBet(0.2, bet.id, bet.transactionId, bet.betslipId); // 20 | balance - 1010

    const rollback2 = await rollbackBet(0.2, bet.id, win2.id, bet.betslipId); // 10 | balance - 990
  

  } catch (error) {
    console.error('Error in Bet Test Flow:', error);
  }
}

// Run the flow
runBetTestFlow();