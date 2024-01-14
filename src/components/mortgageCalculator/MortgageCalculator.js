import { useState, useEffect } from "react";
import "../../sass/remortgageCalculator.scss";
import OwnedRemortgageTable from "../mortgageCalculator/OwnedRemortgageTable";
import RemortgageTable from "../mortgageCalculator/RemortgageTable";
import { useForm } from "react-hook-form";

const MortgageCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [ownContributionBefore, setOwnContributionBefore] = useState("25");
  const [interestRateBefore, setInterestRateBefore] = useState("5");
  const [depositBefore, setDepositBefore] = useState("");
  const [ltvBefore, setLtvBefore] = useState("");
  const [monthlyInstallmentBefore, setMonthlyInstallmentBefore] = useState("");
  const [newValueApplying, setNewValueApplying] = useState("");
  const [ownContributionAfter, setOwnContributionAfter] = useState("25");
  const [interestRateAfter, setInterestRateAfter] = useState("5");
  const [ltvAfter, setLtvAfter] = useState("");
  const [depositAfter, setDepositAfter] = useState("");
  const [monthlyInstallmentAfter, setMonthlyInstallmentAfter] = useState("");
  const [amount, setAmount] = useState("");
 

  const handlePurchasePriceChange = (e) => {
    setPurchasePrice(e.target.value);
  };
  const handleOwnContributionBefore = (e) => {
    setOwnContributionBefore(e.target.value);
  };
  const handleInterestRateBefore = (e) => {
    setInterestRateBefore(e.target.value);
  };
  const handleCalculateDeposit = () => {
    setDepositBefore(
      (purchasePrice * (ownContributionBefore / 100)).toFixed(2)
    );

    setLtvBefore((purchasePrice - depositBefore).toFixed(2));
    setMonthlyInstallmentBefore(
      ((ltvBefore * interestRateBefore) / 100 / 12).toFixed(2)
    );
  };

  const handleNewValueApplying = (e) => {
    setNewValueApplying(e.target.value);
  };
  const handleOwnContributionAfter = (e) => {
    setOwnContributionAfter(e.target.value);
  };
  const handleInterestRateAfter = (e) => {
    setInterestRateAfter(e.target.value);
  };

  const handleCalculateAfter = () => {
    setDepositAfter(
      (newValueApplying * (ownContributionAfter / 100)).toFixed(2)
    );

    setLtvAfter((newValueApplying - depositAfter).toFixed(2));
    setMonthlyInstallmentAfter(
      ((ltvAfter * interestRateAfter) / 100 / 12).toFixed(2)
    );
  };
  const handleCalculate = () => {
    setAmount(
      (
        newValueApplying -
        purchasePrice -
        (depositAfter - depositBefore)
      ).toFixed(2)
    );
  };
  useEffect(() => {
    setDepositBefore(
      (purchasePrice * (ownContributionBefore / 100)).toFixed(2)
    );

    setLtvBefore((purchasePrice - depositBefore).toFixed(2));
    setMonthlyInstallmentBefore(
      ((ltvBefore * interestRateBefore) / 100 / 12).toFixed(2)
    );
    setDepositAfter(
      (newValueApplying * (ownContributionAfter / 100)).toFixed(2)
    );

    setLtvAfter((newValueApplying - depositAfter).toFixed(2));
    setMonthlyInstallmentAfter(
      ((ltvAfter * interestRateAfter) / 100 / 12).toFixed(2)
    );
  });
  return (
    <>
      <h1 className="title-remortgage-calculator">Remortgage calculator</h1>

      <div className="wrapper-remortgage-tables">
        <OwnedRemortgageTable
          purchasePrice={purchasePrice}
          onPurchasePriceChange={handlePurchasePriceChange}
          ownContributionBefore={ownContributionBefore}
          onOwnContributionBefore={handleOwnContributionBefore}
          interestRateBefore={interestRateBefore}
          onInterestRateBefore={handleInterestRateBefore}
          depositBefore={depositBefore}
          ltvBefore={ltvBefore}
          monthlyInstallmentBefore={monthlyInstallmentBefore}
          calculateDeposit={handleCalculateDeposit}
   
        />
        <RemortgageTable
          newValueApplying={newValueApplying}
          changeNewValueApplying={handleNewValueApplying}
          ownContributionAfter={ownContributionAfter}
          changeOwnContributionAfter={handleOwnContributionAfter}
          interestRateAfter={interestRateAfter}
          changeInterestRateAfter={handleInterestRateAfter}
          calculateAfter={handleCalculateAfter}
          depositAfter={depositAfter}
          ltvAfter={ltvAfter}
          monthlyInstallmentAfter={monthlyInstallmentAfter}
        />
        <div>
          <button
            className="btn-calculate-remortgage"
            onClick={handleCalculate}
          >
            Calculate
          </button>
          <div className="amount-after-remortgage">
            The amount that is transferred to our account after Remortgage:
            <span className="amount-to-transferred">
              £{amount}
              {/* <!-- <p className="error-amount">Complete all fields</p> --> */}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MortgageCalculator;
