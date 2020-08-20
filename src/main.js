import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { CurrencyExchange } from "./currency-exchange.js";


$(document).ready(function () {
    $("#amountSubmit").click(function (event) {
        event.preventDefault();
        const amount = $("#amount").val();
        const currency = $("#currency").val();
        $("#amount").val("");
        (async () => {
            let currencyExchange = new CurrencyExchange();
            const response = await currencyExchange.getConversionRate();
            getElements(response);
        })();
        
        function getElements(response) {
            if (response) {
                $(".showResults").text(`You would have ${response.conversion_rates[currency] * amount} ${currency}`);
            } else {
                $(".showResults").text(`There was an error handling your request.`);
                $(".showErrors").text(`Please check your inputs and try again!`);
            }
        }
    });
    
});
