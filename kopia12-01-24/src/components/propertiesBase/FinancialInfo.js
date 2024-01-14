const FinancialInfo = (props) => {
  if (props.showFinancialInfo) {
    return null;
  }

  return (
    <>
      <div className="wrapper-financial">
        <div className="title-financial-add-property">
          <p>Purchase details</p>
        </div>
        <div className="purchase-details-add-property">
          <div className="label-group-purchase">
            <label htmlFor="datePurchase">Purchase date</label>
            <label htmlFor="costPurchase">Purchase price</label>
            <label htmlFor="acquisitionFees">Acquisition fees</label>
            <label htmlFor="brokerFees">Broker fees</label>
          </div>
          <div className="input-group-purchase">
            <input
              className="input-financial"
              type="date"
              id="datePurchase"
              value={props.dateOfPurchase}
              onChange={props.handleDateOfPurchase}
            />
            <input
              className="input-financial"
              type="number"
              id="costPurchase"
              value={props.costOfPurchase}
              onChange={props.handleCostOfPurchase}
            />
            <input
              className="input-financial"
              type="number"
              id="acquisitionFees"
              placeholder="Expenses(solicitors, valuation, surveyor etc)."
            />
            <input
              className="input-financial"
              type="number"
              id="brokerFees"
              placeholder="Estate agent fees."
            />
          </div>
        </div>
        <div className="title-financial-add-property">
          <p>Rent </p>
        </div>
        <div className="wrapper-rent">
          <label htmlFor="rent">Monthly rent</label>
          <input
            type="number"
            name=""
            id=""
            className="input-financial"
            value={props.rent}
            onChange={props.handleRent}
          />
        </div>
        <div className="title-financial-add-property">
          <p>Mortgage details</p>
        </div>
        <div className="wrapper-mortgage">
          <div className="label-group-purchase">
            <label htmlFor="lender">Bank/Lender</label>
            <label htmlFor="loan">Loan installment</label>
            <label htmlFor="interest">Interest</label>
            <label htmlFor="repaymentPeriod">Last installment date</label>
            <label htmlFor="paymentDay">Payment day</label>
          </div>
          <div className="input-group-purchase">
            <input type="text" className="input-financial" id="lender" />
            <input type="number" className="input-financial" id="loan" />
            <input type="number" className="input-financial" id="interest" />
            <input
              type="date"
              className="input-financial"
              id="repaymentPeriod"
            />
            <input
              type="number"
              className="input-financial"
              id="paymentDay"
              placeholder="Payment day each month."
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default FinancialInfo;
