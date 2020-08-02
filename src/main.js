import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { CurrencyExchange } from './../src/currency-exchange.js'

$(document).ready(function () {
    (async () => {
        let currencyExchange = new CurrencyExchange();
        const response = await currencyExchange.getConversionRate();
        getElements(response);
    })();
});