console.log("app is running");

const onSearchSubmit = (event) => {
    event.preventDefault();
    console.log("event", event);
    console.log("form");
    const $stock = $('input[name="stock"]');
    console.log("$stock", $stock);
    const stockName = $stock.val();
    
    // this is a promise
    const pendingStockData = $.ajax(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockName}&apikey=EU18KIHPYJ49OM7D`
    ).then(stockData => {
      console.log("stockData", stockData);
      const timeSeriesValues = Object.values(stockData['Time Series (Daily)']);
      console.log(timeSeriesValues);
      const lastCloseIndex = timeSeriesValues.length - 1;
      console.log(timeSeriesValues[lastCloseIndex]['4. close']);
      const lastClosePrice = timeSeriesValues[lastCloseIndex]['4. close'];
      $("#result").append(lastClosePrice);
    });

    // append it to div


    // stockData.then((data) => {
    //   console.log("data:", data);
    // });
   
};
$("#stock-form").on("submit", onSearchSubmit)


      // On form submit hit API endpoint and return value

      // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockName}&apikey=EU18KIHPYJ49OM7D