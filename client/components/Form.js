import React from 'react';

const Form = ({ saveSnapshot, newSnapshot }) => (
  <div className="form">
    <h3>Let's take a snapshot of your finances:</h3>
    <div>
      <div>
        <section className="subcategory">
          <div className="block">
            <label for="date">Date </label>
            <input type="date" id="date" name="date" required />
          </div>
        </section>
        <br></br>
        <div className="classification">
          <h4>Assets</h4>
          <section className="subcategory">
            <h5>Cash</h5>
            <div className="block">
              <label for="checkings">Checking accounts </label>
              <input
                type="text"
                id="checkings"
                name="checkings"
                defaultValue="0"
              />
            </div>
            <div className="block">
              <label for="savings">Saving accounts </label>
              <input type="text" id="savings" name="savings" defaultValue="0" />
            </div>
          </section>
          <section className="subcategory">
            <h5>Investments</h5>
            <div className="block">
              <label for="brokerage">Brokerage accounts </label>
              <input
                type="text"
                id="brokerage"
                name="brokerage"
                defaultValue="0"
              />
            </div>
            <div className="block">
              <label for="ra401k">401(k) </label>
              <input type="text" id="ra401k" name="ra401k" defaultValue="0" />
            </div>
            <div className="block">
              <label for="rothIRA">Roth IRA </label>
              <input type="text" id="rothIRA" name="rothIRA" defaultValue="0" />
            </div>
          </section>
        </div>
        <br></br>
        <div className="classification">
          <h4>Liabilities</h4>
          <section className="subcategory">
            <h5>Current</h5>
            <div className="block">
              <label for="ccDebt">Credit card balances </label>
              <input type="text" id="ccDebt" name="ccDebt" defaultValue="0" />
            </div>
          </section>
          <section className="subcategory">
            <h5>Long Term</h5>
            <div className="block">
              <label for="homeMortgage">Home mortgage </label>
              <input
                type="text"
                id="homeMortgage"
                name="homeMortgage"
                defaultValue="0"
              />
            </div>
            <div className="block">
              <label for="carLoans">Car loans </label>
              <input
                type="text"
                id="carLoans"
                name="carLoans"
                defaultValue="0"
              />
            </div>
            <div className="block">
              <label for="studentLoans">Student loans </label>
              <input
                type="text"
                id="studentLoans"
                name="studentLoans"
                defaultValue="0"
              />
            </div>
          </section>
        </div>
        <br></br>
        <div className="createSnapshot">
          <button type="button" onClick={saveSnapshot}>
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Form;
