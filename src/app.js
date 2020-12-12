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
    const stockSymbol = stockSearchData.bestMatches[0][`1. symbol`];
    console.log("stockSymbol", stockSymbol);
    findStockData(stockSymbol);
  });

}; 
const findStockData = (symbol) => {
  const pendingStockData = $.ajax(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=EU18KIHPYJ49OM7D`
  ).then(stockData => {
    console.log("stockData", stockData);
    const timeSeriesValues = Object.values(stockData['Time Series (Daily)']);
    console.log(timeSeriesValues);
    const lastClose = timeSeriesValues[0];
    console.log(lastClose);
    $("#result").empty();
    $("#result").append(lastClose['4. close']);
  });

};

$("#stock-form").on("submit", onSearchSubmit)


  
//     const pendingStockData = $.ajax(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${pendingStockSymbol}&apikey=EU18KIHPYJ49OM7D`
//         ).then(stockData => {
//           console.log("stockData", stockData);
//           const timeSeriesValues = Object.values(stockData['Time Series (Daily)']);
//           console.log(timeSeriesValues);
//           const lastCloseIndex = timeSeriesValues.length - 1;
//           console.log(timeSeriesValues[lastCloseIndex]['4. close']);
//           const lastClosePrice = timeSeriesValues[lastCloseIndex]['4. close'];
//           $("#result").append(lastClosePrice);
//         });

//   };



// };
// $("#stock-form").on("submit", onSearchSubmit)








// const onSearchSubmit = (event) => {
//     event.preventDefault();
//     console.log("event", event);
//     console.log("form");
//     const $stock = $('input[name="stock"]');
//     console.log("$stock", $stock);
//     const stockName = $stock.val();
    
//     const pendingStockData = $.ajax(
//       `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockName}&apikey=EU18KIHPYJ49OM7D`
//     ).then(stockData => {
//       console.log("stockData", stockData);
//       const timeSeriesValues = Object.values(stockData['Time Series (Daily)']);
//       console.log(timeSeriesValues);
//       const lastCloseIndex = timeSeriesValues.length - 1;
//       console.log(timeSeriesValues[lastCloseIndex]['4. close']);
//       const lastClosePrice = timeSeriesValues[lastCloseIndex]['4. close'];
//       $("#result").append(lastClosePrice);
//     });

//     // append it to div


//     // stockData.then((data) => {
//     //   console.log("data:", data);
//     // });
   
// };
// $("#stock-form").on("submit", onSearchSubmit)


      // On form submit hit API endpoint and return value

      // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockName}&apikey=EU18KIHPYJ49OM7D



    //   const onSearchSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("event", event);
    //     console.log("form");
    //     const $stock = $('input[name="stock"]');
    //     console.log("$stock", $stock);
    //     const stockName = $stock.val();
        
    //     const pendingStockData = $.ajax(
    //       `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockName}&apikey=EU18KIHPYJ49OM7D`
    //     ).then(stockData => {
    //       console.log("stockData", stockData);
    //       const timeSeriesValues = Object.values(stockData['Time Series (Daily)']);
    //       console.log(timeSeriesValues);
    //       const lastCloseIndex = timeSeriesValues.length - 1;
    //       console.log(timeSeriesValues[lastCloseIndex]['4. close']);
    //       const lastClosePrice = timeSeriesValues[lastCloseIndex]['4. close'];
    //       $("#result").append(lastClosePrice);
    //     });
    
    //     // append it to div
    
    
    //     // stockData.then((data) => {
    //     //   console.log("data:", data);
    //     // });
       
    // };
    // $("#stock-form").on("submit", onSearchSubmit)
  