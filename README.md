# Payment-Wallet

Q1). What is payment-wallet?

  - It is a payment platform, where we create our account
  and perform some basic task,like transfer money, view balance etc.

Q2). How we interact with platform?
 
  - First we need to create account.
  - New account hold zero balance, in initial state.
  - Then we add money to our wallet.
  - And perform some basic functions.

Q3). What is basic functions?

  - View user detail.
  - View balance.
  - Add money.
  - Transfer money.
  - View history.

Q4). where the data is sotred.

  - Firt in the text file.
  - Then I upgrade to some where else.

Q5). How the data structure look like?

  - Single user data structure.

  ```
 
  {
    detail: { name: 'Bittu', age: 19 },
    balance: 100,
    history: [ "1st detail", "2nd detail", "3rd detail" ]
  }
  ```

  - Whole payment-wallet data structure.
  
  ```

  {
  users: {
    bittu: { detail: [Object], balance: 100, history: [Array] },
    govind: { detail: [Object], balance: 300, history: [Array] }
    }
  }
  ```
Q5). How  pseudocode look look like?

  - bittu = new CreateAcount(name, age, password);
  - bittu.balance();
  - bittu.add(100);
  - bittu.transfer(100, govind, password);
  - bittu.history();

