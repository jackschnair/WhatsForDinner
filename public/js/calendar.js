function createCalendar() {
    var today = new Date; // get current date
    var Sunday = today.getDate() - today.getDay(); // First day is the day of the month - the day of the week
    var Saturday = Sunday + 6; // last day is the first day + 6
    
    var firstday = new Date(today.setDate(Sunday)).toDateString();
    var lastday = new Date(today.setDate(Saturday)).toDateString();


}

let people = [
    { name: "Demetri", Sunday: "out", Monday: "cook", Tuesday: "eat", Wednesday: "cook", Thursday: "out", Friday: "out", Saturday: "out"},
    { name: "Dimitri", Sunday: "cook", Monday: "eat", Tuesday: "cook", Wednesday: "eat", Thursday: "out", Friday: "eat", Saturday: "out",},
    { name: "Dmitry", Sunday: "eat", Monday: "eat", Tuesday: "out", Wednesday: "eat", Thursday: "out", Friday: "cook", Saturday: "out",},
    { name: "Dmitrij", Sunday: "eat", Monday: "out", Tuesday: "eat", Wednesday: "out", Thursday: "cook", Friday: "out", Saturday: "out",},
    { name: "Dmeatree", Sunday: "eat", Monday: "out", Tuesday: "out", Wednesday: "out", Thursday: "out", Friday: "out", Saturday: "out",},
  ];

dayOfTheWeek= [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',    
    'Friday',
    'Saturday',
];
  
function generateTable(table, people) {

    let row = table.insertRow();
    let cell = row.insertCell();
    for (i= 0; i < people.length; i++) {
        let cell = row.insertCell();
        
        cell.setAttribute("style", "border: 2px solid black; text-align: center; padding: 8px 8px;");
        
        let text = document.createTextNode(people[i]["name"]);
        cell.appendChild(text);
    }

    for (i= 0; i < 7; i++) {
      let row = table.insertRow();

      let cell = row.insertCell();

      cell.setAttribute("style", "border: 2px solid black; text-align: center; padding: 8px 8px;");

      let day = dayOfTheWeek[i];
      let daytext = document.createTextNode(day);
      cell.appendChild(daytext); //day of the week

        for (j = 0; j < people.length; j++) { //for each person reads their opinion on that day
            let cell = row.insertCell();

            cell.setAttribute("style", "border: 2px solid black; text-align: center; padding: 8px 8px;");
            let text = document.createTextNode(people[j][day]);

            if (people[j][day] == "cook") {
                cell.appendChild(text);

            }
            if (people[j][day] == "out") {
                /*display image*/
                var ex = document.createElement("img");
                ex.setAttribute("src", "images/redline.jpg");
                ex.setAttribute("style", "display:block; object-fit: cover;");
                cell.setAttribute("style", "padding: 0px 0px; border: 2px solid black; margin: 0px");
                ex.setAttribute("alt", "crossed out");
                cell.appendChild(ex);
            }

      }
    }
}

function generateTableHead(table, people) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (i= 0; i < people.length; i++) {
      let th = document.createElement("th");
      let text = document.createTextNode(element[key]);
      th.appendChild(text);
      row.appendChild(th);
    }
}

let table = document.querySelector("table");
generateTable(table, people); // generate the table first
//generateTableHead(table, people); // then the head


