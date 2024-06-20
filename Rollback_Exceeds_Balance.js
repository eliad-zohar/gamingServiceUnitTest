const { makeBet } = require('./makeBet');

async function runBetTestFlow() {
  try {
    const betId = await makeBet();
    //console.log('Bet ID:', betId);

    //const commitResponse = await commitBet(betId);
    //console.log('Commit Response:', commitResponse);

    //const rollbackId = await rollbackBet(betId);
    //console.log('Rollback ID:', rollbackId);
  } catch (error) {
    console.error('Error in Bet Test Flow:', error);
  }
}

// Run the flow
runBetTestFlow();