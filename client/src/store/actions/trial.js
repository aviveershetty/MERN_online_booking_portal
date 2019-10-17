var https = require("https");
var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;
process.stdin.on("data", function(data) {
  __input_stdin += data;
});
/*
 * Complete the function below.
 * Instead of returning the answer, log the answer to the console.
 * https://jsonmock.hackerrank.com/api/countries/search?name=
 */
const http = require("https");
function getCountries(s, p) {
  http.get(
    `https://jsonmock.hackerrank.com/api/countries/search?name=${s}`,
    arr => {
      let count = 0;
      let body = "";
      arr.on("data", d => {
        body += d;
      });

      arr.on("end", function() {
        var count = 0;
        // console.log(JSON.parse(body).data)
        var tmp = JSON.parse(body);
        for (var i = 0; i < tmp.total_pages.length, i++; ) {
          console.log(tmp.name);
        }
        tmp.data.forEach(item => {
          // console.log(item)
          if (item.name.toLowerCase().includes(s)) {
            if (item.population >= p) {
              count++;
            }
          }
        });
        console.log(count);
      });

      return count;
    }
  );
}

getCountries("in", 100000);
