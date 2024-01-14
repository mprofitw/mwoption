import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
const OwnedRemortgageTable = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const fNameValidation = {
    required: true,
    // type: 'number',
    min: 0,
    max: 99,
  };
  return (
    <>
      <form  onSubmit={handleSubmit()}>
        <table className="owned-property">
          <thead>
            <tr>
              <th colSpan="2">Owned property</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Purchase price</td>
              <td>
                £
                <input
                  type="number"
                  name="purchasePrice"
                  className="purchase-price"
                  {...register("purchasePrice", {
                    required: true,
                    onChange: props.onPurchasePriceChange,
                    min: 0,
                    pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                  })}
                  value={props.purchasePrice}
                  // onChange={props.onPurchasePriceChange}
                  // onKeyUp={handleSubmit(props.calculateDeposit)}
                  onKeyUp={props.calculateDeposit}
                  // {...fNameValidation}
                />
                <div>
                  {errors.purchasePrice?.type === "required" && (
                    <span className="bad-value">
                      Purchase price field is required.
                    </span>
                  )}
                  {errors.purchasePrice?.type === "min" && (
                    <span className="bad-value">
                      Purchase price must be greater than zero.
                    </span>
                  )}
                  {errors.purchasePrice?.type === "pattern" && (
                    <span className="bad-value">
                      The value must be a number.
                    </span>
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td>Own contribution</td>
              <td>
                <input
                  type="number"
                  name="ownContributionBefore"
                  value={props.ownContributionBefore}
                  // onChange={props.onOwnContributionBefore}
                  onKeyUp={props.calculateDeposit}
                  max="100"
                  className="own-contribution-before"
                  {...register("ownContributionBefore", {
                    required: true,
                    onChange: props.onOwnContributionBefore,
                    min: 0,
                    max: 99,
                    pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                  })}
                />
                %
                <div>
                  {errors.ownContributionBefore?.type === "required" && (
                    <span className="bad-value">
                      Own contribution field is required.
                    </span>
                  )}
                  {errors.ownContributionBefore?.type === "min" && (
                    <span className="bad-value">
                      Own contribution must be greater than 0.
                    </span>
                  )}
                  {errors.ownContributionBefore?.type === "max" && (
                    <span className="bad-value">
                      Own contribution cannot be greater than 100.
                    </span>
                  )}
                  {errors.ownContributionBefore?.type === "pattern" && (
                    <span className="bad-value">
                      The value must be a number.
                    </span>
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td>Deposit</td>
              <td className="deposit-before">£{props.depositBefore}</td>
            </tr>
            <tr>
              <td>LTV Loan-to-value</td>
              <td className="ltv-before">
                <p>£{props.ltvBefore}</p>
              </td>
            </tr>
            <tr>
              <td>Loan interest rate</td>
              <td>
                <input
                  type="number"
                  name="interestRateBefore"
                  className="interest-rate-before"
                  value={props.interestRateBefore}
                  // onChange={props.onInterestRateBefore}
                  onKeyUp={props.calculateDeposit}
                  max="100"
                  {...register("interestRateBefore", {
                    required: true,
                    onChange:props.onInterestRateBefore,
                    min: 0,
                    max: 99,
                    pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                  })}
                
                />
                %
                <div>
                  {errors.interestRateBefore?.type === "required" && (
                    <span className="bad-value">
                      Loan interest rate field is required.
                    </span>
                  )}
                  {errors.interestRateBefore?.type === "min" && (
                    <span className="bad-value">
                      Loan interest rate must be greater than 0.
                    </span>
                  )}
                  {errors.interestRateBefore?.type === "max" && (
                    <span className="bad-value">
                      Loan interest rate cannot be greater than 100.
                    </span>
                  )}
                  {errors.interestRateBefore?.type === "pattern" && (
                    <span className="bad-value">
                      The value must be a number.
                    </span>
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td>Monthly installment before remortgage</td>
              <td className="monthly-installment-before">
                £{props.monthlyInstallmentBefore}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default OwnedRemortgageTable;
