table_datas = {
  Calories: "277kcal",
  Carbs: "0g",
  Protein: "20g",
  Fat: "22g",
};

const table = document.querySelector(".recipe-card__nutrition-table");

let categoris = Object.keys(table_datas);
var tr, td1, td2;
categoris.forEach((category) => {
  tr = document.createElement("tr");
  td1 = document.createElement("td");
  td2 = document.createElement("td");
  td1.textContent = category;
  td2.textContent = table_datas[category];
  tr.append(td1, td2);
  table.appendChild(tr);
});
