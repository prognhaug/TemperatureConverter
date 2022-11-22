"use strict";

$("input[name=c]").on("input", function () {
  let temp = parseFloat($("input[name=c]").val());
  if (isNaN(temp)) {
    temp = 0;
  }
  $("input[name=f]").val((temp * 1.8 + 32).toFixed(2));
  $("input[name=k]").val((temp + 273.15).toFixed(2));
});

$("input[name=f]").on("input", function () {
  let temp = parseFloat($("input[name=f]").val());
  if (isNaN(temp)) {
    temp = 0;
  }
  $("input[name=c]").val((((temp - 32) * 5) / 9).toFixed(2));
  $("input[name=k]").val((((temp - 32) * 5) / 9 + 273.15).toFixed(2));
});

$("input[name=k]").on("input", function () {
  let temp = parseFloat($("input[name=k]").val());
  if (isNaN(temp)) {
    temp = 0;
  }
  $("input[name=f]").val((((temp - 273.15) * 9) / 5 + 32).toFixed(2));
  $("input[name=c]").val((temp - 273.15).toFixed(2));
});

function reset() {
  $("input[name=c]").val("");
  $("input[name=f]").val("");
  $("input[name=k]").val("");
}
