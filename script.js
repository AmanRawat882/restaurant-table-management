var table = [
  {
    name: "Table 1",
    totalItems: 0,
    bill: 0,
    items: [],
    quantity: [],
    price: [],
  },
  {
    name: "Table 2",
    totalItems: 0,
    bill: 0,
    items: [],
    quantity: [],
    price: [],
  },
  {
    name: "Table 3",
    totalItems: 0,
    bill: 0,
    items: [],
    quantity: [],
    price: [],
  },
  {
    name: "Table 4",
    totalItems: 0,
    bill: 0,
    items: [],
    quantity: [],
    price: [],
  },
  {
    name: "Table 5",
    totalItems: 0,
    bill: 0,
    items: [],
    quantity: [],
    price: [],
  },
  {
    name: "Table 6",
    totalItems: 0,
    bill: 0,
    items: [],
    quantity: [],
    price: [],
  },
];

var foodItems = [
  {
    name: "Steam Momos",
    price: 30,
    category: "Starter",
  },
  {
    name: "Fried Momos",
    price: 50,
    category: "Starter",
  },
  {
    name: "Red Sauce Pasta",
    price: 80,
    category: "Starter",
  },
  {
    name: "White Sauce Pasta",
    price: 90,
    category: "Starter",
  },
  {
    name: "Noodles",
    price: 70,
    category: "Starter",
  },
  {
    name: "Chilly Potato",
    price: 80,
    category: "Starter",
  },
  {
    name: "Paneer Butter Masala",
    price: 280,
    category: "Main Course",
  },
  {
    name: "Masala Chaap",
    price: 200,
    category: "Main Course",
  },
  {
    name: "Dal Tadka",
    price: 150,
    category: "Main Course",
  },
  {
    name: "Butter Naan",
    price: 40,
    category: "Bread",
  },
  {
    name: "Tawa Roti",
    price: 15,
    category: "Bread",
  },
  {
    name: "Vanilla/Strawberry icecream",
    price: 50,
    category: "Dessert",
  },
  {
    name: "Chocolate Almond Fudge icecream",
    price: 100,
    category: "Dessert",
  },
  {
    name: "Gulab Jamun ",
    price: 180,
    category: "Dessert",
  },
];

function loadTable() {
  var menuList = document.getElementById("menuList");
	menuList.innerHTML="";
  for (var i = 0; i < foodItems.length; i++) {
    id = "menu-" + i;
    var division = document.createElement("div");
    division.setAttribute("id", id);
    division.setAttribute("class", "food box");
    division.setAttribute("draggable", "true");
    division.setAttribute("ondragstart", "dragStart(event)");
    division.innerHTML =
      '<p class="food-name">' +
      foodItems[i].name +
      '</p><p class="item-price">Rs.' +
      foodItems[i].price +
      '</p><p class="item-category">Category: ' +
      foodItems[i].category +
      "</p>";
    menuList.appendChild(division);
  }
  var tableList = document.getElementById("tableList");
tableList.innerHTML="";
  for (var i = 0; i < table.length; i++) {
    var id = "table-" + i;
    var division = document.createElement("div");
    division.setAttribute("id", id);
    // ondragenter="onDragEnter(event)" ondrop="drop(event)" ondragleave="onDragLeave(event)"
    division.setAttribute("class", "table box");
    division.setAttribute("ondragover", "allowDrop(event)");
    division.setAttribute("ondrop", "onDrop(event)");
    division.setAttribute("ondragenter", "onDragEnter(event)");
    division.setAttribute("ondragleave", "onDragLeave(event)");
    division.innerHTML =
      '<p class="tableId">' +
      table[i].name +
      '</p><p>Rs.<span class="amount">' +
      table[i].bill +
      '</span</p><p>Total Items:<span class="items">' +
      table[i].totalItems +
      "</span></p>";
    tableList.appendChild(division);
  }
}
loadTable();

function searchMenu() {
  var menuSearchInput = document.getElementById("menuSearch").value;
  menuSearchInput = menuSearchInput.toUpperCase();
  var menuList = document.getElementById("menuList");
  var items = menuList.getElementsByTagName("div");
  for (i = 0; i < items.length; i++) {
    let itemName = items[i].getElementsByTagName("p")[0].innerHTML;
    let itemCategory = items[i].getElementsByTagName("p")[2].innerHTML;

    itemName = itemName.toUpperCase();
    itemCategory = itemCategory.toUpperCase();
    if (
      itemName.indexOf(menuSearchInput) > -1 ||
      itemCategory.indexOf(menuSearchInput) > -1
    )
      items[i].style.display = "";
    else items[i].style.display = "none";
  }
}

function searchTable() {
  var tableSearch = document.getElementById("tableSearch").value;
  tableSearch = tableSearch.toUpperCase();
  var tableList = document.getElementById("tableList");
  var tables = tableList.getElementsByTagName("div");

  for (let i = 0; i < tables.length; i++) {
    let tableName = tables[i].getElementsByTagName("p")[0].innerHTML;
    tableName = tableName.toUpperCase();

    if (tableName.indexOf(tableSearch) > -1) tables[i].style.display = "";
    else tables[i].style.display = "none";
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function onDragEnter(ev) {
  var id = ev.target.id;
  if (id !== "") {
    var division = document.getElementById(id);
    division.style.borderColor = "rgb(1, 59, 57)";
    division.style.boxShadow = "6px 6px 8px rgba(1, 59, 57,0.5)";
  }
}
function onDragLeave(ev) {
  var id = ev.target.id;
  if (id !== "") {
    var division = document.getElementById(id);
    division.style.borderColor = "lightseagreen";
    division.style.boxShadow = "2px 2px 4px rgba(1, 59, 57,0.5)	";
  }
}

function onDrop(event) {
  event.preventDefault();
  var id = event.target.id;
  if(id!=""){
  var menuItem = event.dataTransfer.getData("text");
  var currentTable = document.getElementById(id);
  console.log("Source " + menuItem + " \nTarget " + id);
  var menuId = menuItem.slice(menuItem.indexOf("-") + 1, menuItem.length);
  var tableId = id.slice(id.indexOf("-") + 1, id.length);
  console.log("Source " + menuId + " \nTarget " + tableId);
  var itemName = foodItems[menuId].name;
  var itemPrice = foodItems[menuId].price;

  var tableBill = currentTable.getElementsByTagName("span")[0];
  var tableItem = currentTable.getElementsByTagName("span")[1];

  tableBill.innerHTML = Number(tableBill.innerHTML) + itemPrice;
  tableItem.innerHTML = Number(tableItem.innerHTML) + 1;

	table[tableId].totalItems=Number(table[tableId].totalItems)+1;
	table[tableId].bill=Number(table[tableId].bill)+Number(itemPrice);


  if (table[tableId].items.includes(itemName)) {
    table[tableId].quantity[table[tableId].items.indexOf(itemName)]++;
  } else {
    table[tableId].items.push(itemName);
    table[tableId].quantity.push(1);
    table[tableId].price.push(itemPrice);
  }
  console.log(table);

  currentTable.style.borderColor = "lightseagreen";
  currentTable.style.boxShadow = "0 0 2pt 1pt lightseagreen;";
}
}
function openModal(event) {
  var modalBody = document.getElementsByClassName("modalTable")[0];
  modalBody.innerHTML = "";
  var id = event;
  var tableId = id.slice(id.indexOf("-") + 1, id.length);
  console.log("In openModal "+id+"  table id  "+tableId);
  var currentTable = document.getElementById(id);

  currentTable.setAttribute("data-toggle", "modal");
  currentTable.setAttribute("data-target", "#modal");
  var modalHeading = document.getElementById("modalHeading");
  modalHeading.innerText = `${table[tableId].name} | Order Details`;

  var listOfOrders = table[tableId].items;
  var noOfOrders = listOfOrders.length;
  console.log(noOfOrders);
  if (noOfOrders != 0) {
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");

    tr.innerHTML =
      '<th scope="col">#</th><th scope="col">Items</th><th scope="col">Price</th><th scope="col">Number Of Serving</th><th></th>';

    thead.appendChild(tr);
    modalBody.appendChild(thead);

    var tbody = document.createElement("tbody");

    for (let i = 0; i < noOfOrders; i++) {
      tr = document.createElement("tr");
      tr.innerHTML =
        "<td>" +
        (i + 1) +
        "</td><td>" +
        table[tableId].items[i] +
        "</td><td>" +
        table[tableId].price[i] +
        '</td><td><input type="number" class="tableInput" value="' +
        table[tableId].quantity[i] +
        '" min="1"/></td><td class="fa fa-trash" onclick="deleteItem(' +
        tableId +
        "," +
        i +
        ')"></td>';
      tbody.appendChild(tr);
    }
    modalBody.appendChild(tbody);
  } else if (noOfOrders == 0) {
    modalBody.innerHTML = "<h4>No items yet..</h4>";
  }
}

function beforeOpenModal(event) {
  var id = event.target.id;
  console.log("Click "+id);
  if (id != "") openModal(event.target.id);
}

for (let i = 0; i <=table.length; i++) {
  document
    .getElementsByClassName("table")
    [i].addEventListener("click", beforeOpenModal);
}

function deleteItem(id, tableId) {
	// tableId--;
	// id--;

	console.log(table[tableId-1]);
  console.log("Delete "+id+1 + " " + tableId-1);
  table[tableId-1].bill=Number(table[tableId-1].bill)-(Number(table[tableId-1].price[id+1])*Number(table[tableId-1].quantity[id+1]));
  table[tableId-1].totalItems=Number(table[tableId-1].totalItems)-Number(table[tableId-1].quantity[id+1]);
  table[tableId-1].items.splice(id+1,1);
  table[tableId-1].quantity.splice(id+1,1);
  table[tableId-1].price.splice(id+1,1);
  console.log("In delete table-"+(tableId-1));
  openModal("table-"+(tableId-1))
  loadTable();
	
}
