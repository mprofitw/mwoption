import React from 'react';

const RemortgageTable = (props) => {
  return (
    <>
      <table className="remortgage-property">
        <thead>
          <tr>
            <th colSpan="2">Remortgage</th>
            
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>The new value we're applying for</td>{" "}
            <td>£<input
                type="number"
                className="new-value"
                value={props.newValueApplying}
                onChange={props.changeNewValueApplying}
                onKeyUp={props.calculateAfter}
              />
            {props.invalidValue && <p className="bad-value">{props.messageValidPrice}</p>}
            </td>{" "}
          </tr>{" "}
          <tr>
            <td>Own contribution</td>{" "}
            <td>
              {" "}
              <input
                type="number"
                value={props.ownContributionAfter}
                onChange={props.changeOwnContributionAfter}
                onKeyUp={props.calculateAfter}
                max="100"
                className="own-contribution-after"
              />{" "}
              %
              {props.invalidValue && <p className="bad-value">{props.messageValidContribution2}</p>}
            </td>{" "}
          </tr>{" "}
          <tr>
            <td>Deposit </td> <td className="deposit-after"> £ {props.depositAfter}</td>{" "}
          </tr>{" "}
          <tr>
            <td>LTV Loan - to - value</td> <td className="ltv-after">£{props.ltvAfter}</td>{" "}
          </tr>{" "}
          <tr>
            <td>Loan interest rate</td>{" "}
            <td>
              {" "}
              <input
                type="number"
                value={props.interestRateAfter}
                onChange={props.changeInterestRateAfter}
                onKeyUp={props.calculateAfter}
                className="interest-rate-after"
              />
              %
              {props.invalidValue && <p className="bad-value">{props.messageValidInterestRate}</p>}
            </td>{" "}
          </tr>{" "}
          <tr>
            <td> Monthly installment after remortgage </td>{" "}
            <td className="monthly-installment-after">£{props.monthlyInstallmentAfter}</td>{" "}
          </tr>
        </tbody>
      </table>{" "}
    </>
  );
};

export default RemortgageTable;
