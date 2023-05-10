// users("bittu") ==> {details, amount, credit, debit, history} 
// bittu.details ==> 

const createUsers = function(name) {
  let accountBalance = 0;
  const log = [];

  const details = function() {
    return name; 
  };

  const balance = function() {
    return accountBalance;
  };

  const credit = function(amount) {
    accountBalance += amount;
    log.push(`credited: ${amount}`);
  }

  const debit = function(amount) {
    accountBalance -= amount;
    log.push(`debited: ${amount}`);
  }

  const history = function() {
    console.table(log);
  }

  return {credit, debit, history, details, balance};
};

exports.createUsers = createUsers;
