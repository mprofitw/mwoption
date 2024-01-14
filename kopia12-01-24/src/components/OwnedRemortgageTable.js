import React from 'react';
const OwnedremortgageTable = (props) => {
  return (
    <table className="owned-property">
      
      <thead>
        <tr>         
          <th colSpan="2">Owned property</th>
               </tr>
      </thead>
      <tbody>
        <tr>
          <td>Purchase price</td>
          <td>£<input
              type="number"
              className="purchase-price"
              value={props.purchasePrice}
              onChange={props.onPurchasePriceChange}
              onKeyUp={props.calculateDeposit}
            />{props.invalidValue && <p className="bad-value">{props.messageValidPrice}</p>}</td>
        </tr>
        <tr>
          <td>Own contribution</td>
          <td>          
            <input
              type="number"
              value={props.ownContributionBefore}
              onChange={props.onOwnContributionBefore}
              onKeyUp={props.calculateDeposit}
              max="100"
              className="own-contribution-before"
            />
            %
            {props.invalidValue && <p className="bad-value">{props.messageValidContribution}</p>}
          </td>
        </tr>
        <tr>
          <td>Deposit</td>
          <td className="deposit-before">
          £ {props.depositBefore}
             </td>
        </tr>
        <tr>
          <td>LTV Loan-to-value</td>
          <td className="ltv-before">
            <p>£ {props.ltvBefore}</p>
          </td>
        </tr>
        <tr>
          <td>Loan interest rate</td>
          <td>
            {" "}
            <input
              type="number"
              className="interest-rate-before"
              value={props.interestRateBefore}
              onChange={props.onInterestRateBefore}
              onKeyUp={props.calculateDeposit}
            />%
            {props.invalidValue && <p className="bad-value">{props.messageValidInterestRate}</p>}
          </td>
        </tr>
        <tr>
          <td>Monthly installment before remortgage</td>
          <td className="monthly-installment-before"> £{props.monthlyInstallmentBefore}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OwnedremortgageTable;
