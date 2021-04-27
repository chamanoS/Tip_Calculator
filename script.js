
// Tip Splitter Function

document.getElementById('container').onchange = function () {
  var bill = Number(document.getElementById('bill').value);
  var tipPercent = document.getElementById('tip').value;
  var splitBill = document.getElementById('people').value;
  var tipValue = bill * (tipPercent / 100);
  var newBillEach = (bill + tipValue) / splitBill;
  var tipEach = tipValue / splitBill;

  document.getElementById('tipOutPut').innerHTML = " " + tipPercent + "%";
  document.getElementById('splitOutPut').innerHTML = " " + splitBill + " people";
  document.getElementById('total-per-person').innerHTML = " $" + newBillEach.toFixed(2);
  document.getElementById('tip-per-person').innerHTML = " $" + tipEach.toFixed(2);
}