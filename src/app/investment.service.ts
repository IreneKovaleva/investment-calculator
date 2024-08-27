import {Injectable} from "@angular/core";
import { type InvestmentInput, InvestmentResultsInterface} from "./investment-results/investment-results.interface";

@Injectable({providedIn: "root"})
export class InvestmentService {

    investmentResults?: InvestmentResultsInterface [];

    calculateInvestmentResults(initialData: InvestmentInput) {
        const annualData: InvestmentResultsInterface[] = [];
        let investmentValue = initialData.initialInvestment;

        for (let i = 0; i < initialData.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (initialData.expectedReturn / 100);
            investmentValue += interestEarnedInYear + initialData.annualInvestment;
            const totalInterest =
                investmentValue - initialData.annualInvestment * year - initialData.initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: initialData.annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialData.initialInvestment + initialData.annualInvestment * year,
            });
        }
        this.investmentResults =  annualData;
    }

}
