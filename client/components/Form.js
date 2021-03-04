import React from 'react';

const Form = () => (
  <div>
    <h3>Let's take a snapshot of your finances:</h3>
    <div>
      <form method="POST" action="/snapshots">
        <div>
          <label for="date">Date </label>
          <input type="date" id="date" name="date" required />
        </div>
        <br></br>
        <div>
          <label for="checkings">Checking accounts </label>
          <input type="text" id="checkings" name="checkings" defaultValue="0" />
        </div>
        <div>
          <label for="savings">Saving accounts </label>
          <input type="text" id="savings" name="savings" defaultValue="0" />
        </div>
        <div>
          <label for="brokerage">Brokerage accounts </label>
          <input type="text" id="brokerage" name="brokerage" defaultValue="0" />
        </div>
        <div>
          <label for="ra401k">401(k) </label>
          <input type="text" id="ra401k" name="ra401k" defaultValue="0" />
        </div>
        <div>
          <label for="rothIRA">Roth IRA </label>
          <input type="text" id="rothIRA" name="rothIRA" defaultValue="0" />
        </div>
        <div>
          <label for="ccDebt">Credit card balances </label>
          <input type="text" id="ccDebt" name="ccDebt" defaultValue="0" />
        </div>
        <div>
          <label for="homeMortgage">Home mortgage </label>
          <input
            type="text"
            id="homeMortgage"
            name="homeMortgage"
            defaultValue="0"
          />
        </div>
        <div>
          <label for="carLoans">Car loans </label>
          <input type="text" id="carLoans" name="carLoans" defaultValue="0" />
        </div>
        <div>
          <label for="studentLoans">Student loans </label>
          <input
            type="text"
            id="studentLoans"
            name="studentLoans"
            defaultValue="0"
          />
        </div>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
);

export default Form;
