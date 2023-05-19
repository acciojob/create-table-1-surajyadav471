function insert_Row() {
    //Write your code here
  var table = document.getElementById("sampleTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0).innerHTML = "New Cell1";
  var cell2 = row.insertCell(1).innerHTML = "New Cell2";
  
}
