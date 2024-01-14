import React from 'react';
import { useForm } from "react-hook-form";
const RemortgageTable = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
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
            <td>The new value we're applying for</td>
            <td>£<input
                type="number"
                className="new-value"
                name="newValueApplying"
                value={props.newValueApplying}
                // onChange={props.changeNewValueApplying}
                onKeyUp={props.calculateAfter}
                {...register("newValueApplying", {
                  required: true,
                  onChange: props.changeNewValueApplying,
                  min: 0,
                  pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                })}
              />
           <div>
                  {errors.newValueApplying?.type === "required" && (
                    <span className="bad-value">
                      Price is required.
                    </span>
                  )}
                  {errors.newValueApplying?.type === "min" && (
                    <span className="bad-value">
                      Price must be greater than zero.
                    </span>
                  )}
                  {errors.newValueApplying?.type === "pattern" && (
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
                name="ownContributionAfter"
                value={props.ownContributionAfter}
                // onChange={props.changeOwnContributionAfter}
                onKeyUp={props.calculateAfter}
                max="100"
                {...register("ownContributionAfter", {
                  required: true,
                  onChange: props.changeOwnContributionAfter,
                  min: 0,
                  max: 99,
                  pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                })}
                className="own-contribution-after"
              />%
              <div>
                  {errors.ownContributionAfter?.type === "required" && (
                    <span className="bad-value">
                      Own contribution is required.
                    </span>
                  )}
                  {errors.ownContributionAfter?.type === "min" && (
                    <span className="bad-value">
                      Own contribution must be greater than 0.
                    </span>
                  )}
                  {errors.ownContributionAfter?.type === "max" && (
                    <span className="bad-value">
                      Own contribution cannot be greater than 100.
                    </span>
                  )}
                  {errors.ownContributionAfter?.type === "pattern" && (
                    <span className="bad-value">
                      The value must be a number.
                    </span>
                  )}
                </div></td>
          </tr>
          <tr>
            <td>Deposit </td> <td className="deposit-after">£{props.depositAfter}</td>
          </tr>
          <tr>
            <td>LTV Loan - to - value</td> <td className="ltv-after">£{props.ltvAfter}</td>
          </tr>
          <tr>
            <td>Loan interest rate</td>
            <td>
              
              <input
                type="number"
                name="interestRateAfter"
                value={props.interestRateAfter}
                // onChange={props.changeInterestRateAfter}
                onKeyUp={props.calculateAfter}
                className="interest-rate-after"
                {...register("interestRateAfter", {
                  required: true,
                  onChange: props.changeInterestRateAfter,
                  min: 0,
                  max: 99,
                  pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                })}
              />%
               <div>
                  {errors.interestRateAfter?.type === "required" && (
                    <span className="bad-value">
                      Loan interest rate is required.
                    </span>
                  )}
                  {errors.interestRateAfter?.type === "min" && (
                    <span className="bad-value">
                      Loan interest rate must be greater than 0.
                    </span>
                  )}
                  {errors.interestRateAfter?.type === "max" && (
                    <span className="bad-value">
                      Loan interest rate cannot be greater than 100.
                    </span>
                  )}
                  {errors.interestRateAfter?.type === "pattern" && (
                    <span className="bad-value">
                      The value must be a number.
                    </span>
                  )}
                </div></td>
          </tr>
          <tr>
            <td> Monthly installment after remortgage </td>
            <td className="monthly-installment-after">£{props.monthlyInstallmentAfter}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default RemortgageTable;
