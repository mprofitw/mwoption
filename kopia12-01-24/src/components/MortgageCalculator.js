import React, { Component } from "react";
import OwnedRemortgageTable from "../components/OwnedRemortgageTable";
import "../sass/remortgageCalculator.scss";
import RemortgageTable from "../components/RemortgageTable";

class Mortgagecalculator extends Component {
  state = {
    purchasePrice: "",
    ownContributionBefore: "25",
    interestRateBefore: "5",
    depositBefore: "",
    ltvBefore: "",
    monthlyInstallmentBefore: "",

    newValueApplying: "",
    ownContributionAfter: "25",
    interestRateAfter: "5",
    ltvAfter: "",
    depositAfter: "",
    monthlyInstallmentAfter: "",

    amount: "0",

    errors: {
      purchasePrice: false,
      ownContributionBefore: false,
      interestRateBefore: false,
      newValueApplying: false,
      ownContributionAfter: false,
      interestRateAfter: false,
    },
  };
  messageValid = {
    price_incorrect: "Invalid value price.",
    contribution_incorrect: "Invalid value contribution",
    interestRate_incorrect: "Invalid value interest rate",
  };
  handlePurchasePriceChange = (e) => {
    this.setState({
      purchasePrice: e.target.value,
    });
  };
  handleOwnContributionBefore = (e) => {
    this.setState({
      ownContributionBefore: e.target.value,
    });
  };
  handleInterestRateBefore = (e) => {
    this.setState({
      interestRateBefore: e.target.value,
    });
  };
  // componentDidMount() {
  //   this.setState({
  //     depositBefore: (
  //       this.state.purchasePrice *
  //       (this.state.ownContributionBefore / 100)
  //     ).toFixed(2),
  //   });
  // }
  handleCalculateDeposit = () => {
    this.handleValidFields();
    this.setState({
      depositBefore: (
        this.state.purchasePrice *
        (this.state.ownContributionBefore / 100)
      ).toFixed(2),

      ltvBefore: (this.state.purchasePrice - this.state.depositBefore).toFixed(
        2
      ),
      monthlyInstallmentBefore: (
        (this.state.ltvBefore * this.state.interestRateBefore) /
        100 /
        12
      ).toFixed(2),
    });
  };
  handleCalculateltv = () => {
    return this.setState({
      ltvBefore: (
        this.state.purchasePrice - this.handleCalculateDeposit
      ).toFixed(2),
    });
  };
  handleNewValueApplying = (e) => {
    this.setState({
      newValueApplying: e.target.value,
    });
  };
  handleOwnContributionAfter = (e) => {
    this.setState({
      ownContributionAfter: e.target.value,
    });
  };
  handleInterestRateAfter = (e) => {
    this.setState({
      interestRateAfter: e.target.value,
    });
  };
  handleCalculateAfter = () => {
    this.handleValidFields2();
    this.setState({
      depositAfter: (
        this.state.newValueApplying *
        (this.state.ownContributionAfter / 100)
      ).toFixed(2),
      ltvAfter: (this.state.newValueApplying - this.state.depositAfter).toFixed(
        2
      ),
      // monthlyInstallmentAfter.textContent = ((ltvAfter.textContent * (interestRateAfter.value) / 100) / 12).toFixed(2);

      monthlyInstallmentAfter: (
        (this.state.ltvAfter * this.state.interestRateAfter) /
        100 /
        12
      ).toFixed(2),
    });
  };
  // componentDidMount() {}
  handleValidFields = () => {
    const validation = this.fieldsValidation();
    // console.log(validation);
    if (validation.correct) {
      this.setState({
        // purchasePrice: "",
        // ownContributionBefore: "25",
        // interestRateBefore: "5",
        errors: {
          purchasePrice: false,
          ownContributionBefore: false,
          interestRateBefore: false,
        
        },
      });
    } else {
      this.setState({
        errors: {
          purchasePrice: true,
          // purchasePrice: !validation.price,
          ownContributionBefore: true,
          // ownContributionBefore: !validation.contribution,
          interestRateBefore: true,
          // interestRateBefore: !validation.interestRate,
         
        },
      });
    }
  };
  fieldsValidation = () => {
    let price = false;
    let contribution = false;
    let interestRate = false;
    let correct = false;
    if (this.state.purchasePrice >= 0) {
      price = true;
    }
   
    if (
      this.state.ownContributionBefore > 0 &&
      this.state.ownContributionBefore <= 100
    ) {
      contribution = true;
    }
    
    if (
      this.state.interestRateBefore > 0 &&
      this.state.interestRateBefore <= 100
    ) {
      interestRate = true;
    }
    
    if (price && contribution && interestRate) {
      correct = true;
    }
    return {
      correct,
      price,
      contribution,
      interestRate,
    };
  };
  handleValidFields2 = () => {
    const validation = this.fieldsValidation2();
    console.log(validation);
    if (validation.correct) {
      this.setState({
        // purchasePrice: "",
        // ownContributionBefore: "25",
        // interestRateBefore: "5",
        errors: {
         
          newValueApplying: false,
          ownContributionAfter: false,
          interestRateAfter: false,
        },
      });
    } else {
      this.setState({
        errors: {
        
          newValueApplying: true,
          ownContributionAfter: true,
          interestRateAfter: true,
        },
      });
    }
  };
  fieldsValidation2 = () => {
    let price = false;
    let contribution = false;
    let interestRate = false;
    let correct = false;
   
    if (this.state.newValueApplying >= 0) {
      price = true;
    }
   
    if (
      this.state.ownContributionAfter > 0 &&
      this.state.ownContributionAfter <= 100
    ) {
      contribution = true;
    }
   
    if (
      this.state.interestRateAfter > 0 &&
      this.state.interestRateAfter <= 100
    ) {
      interestRate = true;
    }
    if (price && contribution && interestRate) {
      correct = true;
    }
    return {
      correct,
      price,
      contribution,
      interestRate,
    };
  };
  handleCalculate = () => {
    this.setState({
      amount: (
        this.state.newValueApplying -
        this.state.purchasePrice -
        (this.state.depositAfter - this.state.depositBefore)
      ).toFixed(2),
    });
  };
  // componentDidMount = () => {
  //   this.setState({
  //     purchasePrice: this.state.purchasePrice,
  //     ownContributionBefore : this.state.ownContributionBefore,
  //     depositBefore: this.state.depositBefore,
  //     ltvBefore: this.state.ltvBefore,

      
  //   })
  // }
  componentDidUpdate = () => {
    // if(this.state.purchasePrice>0){
    //   this.setState({
    //   ownContributionBefore: 6
    //   })
    // }
   
   
  }
  render() {
    return (
      <>
        <h1 className="title-remortgage-calculator">Remortgage calculator</h1>
        <div className="wrapper-remortgage-tables">
          
          <OwnedRemortgageTable
            purchasePrice={this.state.purchasePrice}
            onPurchasePriceChange={this.handlePurchasePriceChange}
            ownContributionBefore={this.state.ownContributionBefore}
            onOwnContributionBefore={this.handleOwnContributionBefore}
            interestRateBefore={this.state.interestRateBefore}
            onInterestRateBefore={this.handleInterestRateBefore}
            depositBefore={this.state.depositBefore}
            ltvBefore={this.state.ltvBefore}
            monthlyInstallmentBefore={this.state.monthlyInstallmentBefore}
            calculateDeposit={this.handleCalculateDeposit}
            invalidValue={this.state.errors.purchasePrice}
            messageValidPrice={this.messageValid.price_incorrect}
            messageValidContribution={this.messageValid.contribution_incorrect}
            messageValidInterestRate={this.messageValid.interestRate_incorrect}
            // validFields = {this.handleValidFields}
            // calculateltv= {this.handleCalculateltv}
          />
          <RemortgageTable
            newValueApplying={this.state.newValueApplying}
            changeNewValueApplying={this.handleNewValueApplying}
            ownContributionAfter={this.state.ownContributionAfter}
            changeOwnContributionAfter={this.handleOwnContributionAfter}
            interestRateAfter={this.state.interestRateAfter}
            changeInterestRateAfter={this.handleInterestRateAfter}
            calculateAfter={this.handleCalculateAfter}
            depositAfter={this.state.depositAfter}
            ltvAfter={this.state.ltvAfter}
            monthlyInstallmentAfter={this.state.monthlyInstallmentAfter}
            invalidValue={this.state.errors.purchasePrice}
             messageValidPrice={this.messageValid.price_incorrect}
            messageValidContribution={this.messageValid.contribution_incorrect}
            messageValidInterestRate={this.messageValid.interestRate_incorrect}
          />
          <div>
            <button
              className="btn-calculate-remortgage"
              onClick={this.handleCalculate}
            >
              Calculate
            </button>
            <div className="amount-after-remortgage">
              The amount that is transferred to our account after Remortgage:
              <span className="amount-to-transferred">
                £{this.state.amount}
                {/* <!-- <p className="error-amount">Complete all fields</p> --> */}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Mortgagecalculator;
