import { add, subtract, multiply, divide } from "./calculator.js";

let operator = "";

$(document).ready(function () {

    $("#add_btn").click(function () {
        operator = "add";
        $("#symbol").val("+");
    });

    $("#subtract_btn").click(function () {
        operator = "subtract";
        $("#symbol").val("-");
    });

    $("#multiply_btn").click(function () {
        operator = "multiply";
        $("#symbol").val("×");
    });

    $("#divide_btn").click(function () {
        operator = "divide";
        $("#symbol").val("÷");
    });

    $("#result_btn").click(function () {
        let num1 = parseFloat($("#num1").val());
        let num2 = parseFloat($("#num2").val());

        if (isNaN(num1) || isNaN(num2)) {
            $("#result").val("Invalid Input");
            return;
        }

        let result;

        switch (operator) {
            case "add":
                result = add(num1, num2);
                break;
            case "subtract":
                result = subtract(num1, num2);
                break;
            case "multiply":
                result = multiply(num1, num2);
                break;
            case "divide":
                result = divide(num1, num2);
                break;
            default:
                $("#result").val("Select Operation");
                return;
        }

        $("#result").val(result);
    });

});