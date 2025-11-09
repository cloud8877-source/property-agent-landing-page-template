import React, { useState, useEffect } from 'react';

const ROICalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(2000000);
  const [downPayment, setDownPayment] = useState<number>(20);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [monthlyRent, setMonthlyRent] = useState<number>(6000);
  const [appreciation, setAppreciation] = useState<number>(5);
  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalInvestment: 0,
    monthlyProfit: 0,
    yearlyRoi: 0,
    fiveYearValue: 0,
    fiveYearProfit: 0
  });

  useEffect(() => {
    calculateROI();
  }, [propertyPrice, downPayment, loanTerm, interestRate, monthlyRent, appreciation]);

  const calculateROI = () => {
    const principal = propertyPrice * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    // Monthly mortgage payment
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
                          (Math.pow(1 + monthlyRate, numPayments) - 1);

    const totalInvestment = propertyPrice * (downPayment / 100);
    const monthlyProfit = monthlyRent - monthlyPayment;
    const yearlyRoi = ((monthlyProfit * 12) / totalInvestment) * 100;
    const fiveYearValue = propertyPrice * Math.pow(1 + appreciation / 100, 5);
    const fiveYearProfit = fiveYearValue - propertyPrice + (monthlyProfit * 12 * 5);

    setResults({
      monthlyPayment: Math.round(monthlyPayment),
      totalInvestment: Math.round(totalInvestment),
      monthlyProfit: Math.round(monthlyProfit),
      yearlyRoi: Math.round(yearlyRoi * 10) / 10,
      fiveYearValue: Math.round(fiveYearValue),
      fiveYearProfit: Math.round(fiveYearProfit)
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ms-MY', {
      style: 'currency',
      currency: 'MYR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="roi-calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
            <span className="text-sm font-medium text-gold-600">Investment Tools</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
            Investment ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Make informed investment decisions with our comprehensive ROI calculator.
            Estimate your returns and plan your property investment strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="bg-gradient-to-br from-navy-900 to-charcoal-900 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <svg className="w-8 h-8 mr-3 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Investment Parameters
            </h3>

            <div className="space-y-6">
              {/* Property Price */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Property Price
                  <span className="float-right text-gold-400 text-lg font-bold">{formatCurrency(propertyPrice)}</span>
                </label>
                <input
                  type="range"
                  min="500000"
                  max="10000000"
                  step="50000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>RM 500K</span>
                  <span>RM 10M</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Down Payment
                  <span className="float-right text-gold-400 text-lg font-bold">{downPayment}%</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>10%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Loan Term
                  <span className="float-right text-gold-400 text-lg font-bold">{loanTerm} years</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="5"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>5 years</span>
                  <span>35 years</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Interest Rate
                  <span className="float-right text-gold-400 text-lg font-bold">{interestRate}%</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="8"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>3%</span>
                  <span>8%</span>
                </div>
              </div>

              {/* Monthly Rent */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Expected Monthly Rent
                  <span className="float-right text-gold-400 text-lg font-bold">{formatCurrency(monthlyRent)}</span>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>RM 1K</span>
                  <span>RM 20K</span>
                </div>
              </div>

              {/* Appreciation Rate */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Annual Appreciation
                  <span className="float-right text-gold-400 text-lg font-bold">{appreciation}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="0.5"
                  value={appreciation}
                  onChange={(e) => setAppreciation(Number(e.target.value))}
                  className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>0%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            {/* Monthly Analysis */}
            <div className="bg-gradient-to-br from-gold-50 to-bronze-50 rounded-2xl p-8 border-2 border-gold-200 shadow-xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Monthly Analysis</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gold-200">
                  <span className="text-gray-700">Monthly Mortgage</span>
                  <span className="text-2xl font-bold text-navy-900">{formatCurrency(results.monthlyPayment)}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gold-200">
                  <span className="text-gray-700">Monthly Rental Income</span>
                  <span className="text-2xl font-bold text-green-600">{formatCurrency(monthlyRent)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-semibold text-gray-800">Monthly Cash Flow</span>
                  <span className={`text-3xl font-bold ${results.monthlyProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatCurrency(results.monthlyProfit)}
                  </span>
                </div>
              </div>
            </div>

            {/* Investment Summary */}
            <div className="bg-gradient-to-br from-navy-900 to-charcoal-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Investment Summary</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-gray-300 text-sm mb-2">Initial Investment</p>
                  <p className="text-2xl font-bold text-gold-400">{formatCurrency(results.totalInvestment)}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-gray-300 text-sm mb-2">Yearly ROI</p>
                  <p className="text-2xl font-bold text-green-400">{results.yearlyRoi}%</p>
                </div>
              </div>
            </div>

            {/* 5-Year Projection */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 shadow-xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                <svg className="w-7 h-7 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                5-Year Projection
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-green-200">
                  <span className="text-gray-700">Projected Property Value</span>
                  <span className="text-2xl font-bold text-navy-900">{formatCurrency(results.fiveYearValue)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-semibold text-gray-800">Total Profit</span>
                  <span className="text-3xl font-bold text-green-600">{formatCurrency(results.fiveYearProfit)}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-gold-500 to-bronze-500 rounded-2xl p-8 text-white shadow-2xl">
              <h4 className="text-xl font-bold mb-3">Ready to Invest?</h4>
              <p className="mb-6 text-gold-50">
                Speak with our investment specialists to find the perfect property for your portfolio.
              </p>
              <button className="bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 w-full">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            <strong>Disclaimer:</strong> This calculator provides estimates based on the inputs provided and should be used for informational purposes only.
            Actual results may vary. Please consult with our property investment specialists for personalized advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
