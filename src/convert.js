const response = {
    "base": "USD",
    "date": "2020-06-17",
    "time_last_updated": 1592352249,
    "rates": {
      "USD": 1,
      "AED": 3.672043,
      "ARS": 69.353351,
      "AUD": 1.446289,
      "BGN": 1.728144,
      "BRL": 5.119211,
      "BSD": 1,
      "CAD": 1.355214,
      "CHF": 0.948887,
      "CLP": 789.641246,
      "CNY": 7.078613,
      "COP": 3794.619048,
      "CZK": 23.49142,
      "DKK": 6.586474,
      "DOP": 57.996361,
      "EGP": 16.140774,
      "EUR": 0.885041,
      "FJD": 2.182906,
      "GBP": 0.792393,
      "GTQ": 7.702948,
      "HKD": 7.750474,
      "HRK": 6.669881,
      "HUF": 305.592339,
      "IDR": 13969.083095,
      "ILS": 3.46972,
      "INR": 76.089493,
      "ISK": 134.523388,
      "JPY": 107.361323,
      "KRW": 1210.54925,
      "KZT": 404.502538,
      "MXN": 22.146713,
      "MYR": 4.274591,
      "NOK": 9.526837,
      "NZD": 1.546653,
      "PAB": 1,
      "PEN": 3.475142,
      "PHP": 50.152065,
      "PKR": 163.628337,
      "PLN": 3.910026,
      "PYG": 6640.583333,
      "RON": 4.270837,
      "RUB": 69.525484,
      "SAR": 3.7508,
      "SEK": 9.314946,
      "SGD": 1.390503,
      "THB": 31.06669,
      "TRY": 6.840957,
      "TWD": 29.667461,
      "UAH": 26.736935,
      "UYU": 42.704716,
      "ZAR": 17.093429
    }
  };

  const convert = (amount, baseCode, targetCode) => {
    if (response.rates[baseCode] === undefined) {
      throw new Error(`Unknown code ${baseCode}`)
    }
    if (response.rates[targetCode] === undefined) {
      throw new Error(`Unknown code ${baseCode}`)
    }

    return (amount / response.rates[baseCode]) * response.rates[targetCode]
  }

  const cadToUsd = convert(1000, 'CAD', 'USD');
  const usdToCad = convert(1000, 'USD', 'CAD');

  console.log('$1000 CAD to USD: ', cadToUsd);
  console.log(`$${cadToUsd} USD to CAD (back again!): `, convert(cadToUsd, 'USD', 'CAD'));
  console.log('$1000 USD to CAD: ', usdToCad);
  console.log(`$${usdToCad} CAD to USD (back again!): `, convert(usdToCad, 'CAD', 'USD'));

  /**

  $1000 CAD to USD:  737.8908423319122
  $737.8908423319122 USD to CAD (back again!):  999.9999999999999
  $1000 USD to CAD:  1355.214
  $1355.214 CAD to USD (back again!):  1000

   */