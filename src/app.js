console.log("app is running");

// Use name to find and extract symbol
const onSearchSubmit = (event) => {
  event.preventDefault();
  console.log('event', event);
  const $stockSearch = $('input[name="stock"]');
  console.log("stockSearch", $stockSearch);
  const stockName = $stockSearch.val();
  console.log(stockName);
  
  // Get stock symbol
  const pendingStockSymbol = $.ajax(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=EU18KIHPYJ49OM7D`
  ).then((stockSearchData) => {
    console.log("stockSearchData", stockSearchData);
    const stockNameConst = stockSearchData.bestMatches[0][`2. name`];
    console.log(stockNameConst);
    const stockSymbolConst = stockSearchData.bestMatches[0][`1. symbol`];
    console.log("stockSymbol", stockSymbolConst);
    findStockData(stockSymbolConst, stockNameConst);
  });

}; 
const findStockData = (stockSymbolParam, stockNameParam) => {
  const pendingStockData = $.ajax(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbolParam}&apikey=EU18KIHPYJ49OM7D`
  ).then(stockData => {
    console.log("stockData", stockData);
    const timeSeriesValues = Object.values(stockData['Time Series (Daily)']);
    console.log(timeSeriesValues);
    const lastClose = timeSeriesValues[0];
    console.log(lastClose);
    $("#price").empty();
    $("#symbol-and-name").empty();
    $("#symbol-and-name").append(`${stockSymbolParam} | ${stockNameParam} `)
    $("#price").append(`$ ${lastClose['4. close']}`);
  });

};

$("#stock-form").on("submit", onSearchSubmit)


  