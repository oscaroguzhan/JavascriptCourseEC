// get elements from DOM
let contentContainer = document.querySelector(".content-container");
let h3 = document.getElementById("h3");
let elevList = document.querySelector(".elevList");
let radioBtnsProgramme = document.querySelectorAll('[name="programme"]');
let filterBtn = document.getElementById("filter_Btn");
let sortAlternative = document.getElementById('sorter_val');
let sortRadioBtns = document.querySelectorAll('[name="sorter"]');

sortAgeBtn = document.getElementById("age_sort_btn");
sortFirstNameBtn = document.getElementById("firstName_sort_btn");
sortLastNameBtn = document.getElementById("lastName_sort_btn");

// get info om student and scholl from API Endpoints
// first create a async function to fetch data
let getData = async (URL) => {
  let response = await fetch(URL);
  let data = await response.json();
  return data;
};

// define a function to choose api endpoints
async function chooseData() {
  let students = await getData("https://api.mocki.io/v2/01047e91/students");
  let schools = await getData("https://api.mocki.io/v2/01047e91/schools");

  let displayNoneH3 = function () {
    h3.style.display = "none";
  };
  students.forEach((student) => {
    // console.log(`${student.firstName} ${student.lastName}`);  // kontrolutskrift
    let studentInfo = document.createElement("li");
    // add textcontent to skapade elemenet
    studentInfo.innerHTML = `${student.firstName} ${student.lastName}`;
    // ------------------------------

    // append element into parent
    elevList.appendChild(studentInfo);
    contentContainer.appendChild(elevList);
    // ------------------------------
  });

  // filter section -----------------
  filterBtn.addEventListener("click", () => {
    displayNoneH3();

    // tömma listan
    elevList.innerHTML = "";
    radioBtnsProgramme.forEach((btn) => {
      if (btn.checked) {
        let programme = btn.value;
        //console.log(programme); //kontrolutskrift

        // filter students based on programme
        let filteredbyProgramme = students.filter(
          (student) => student.programme === programme
        );
        filteredbyProgramme.forEach((student) => {
          let filteredStudent = document.createElement("li");
          filteredStudent.textContent = `${student.firstName} ${student.lastName}`;
          let newTitel = document.querySelector("#h2");
          newTitel.innerHTML = `Student som läser ${student.programme} programme`;
          // append the filtered students to the list
          elevList.appendChild(filteredStudent);
        });
      }
    });
  });
  
  //  ---------- SORT SECTION ---------
  // Sort by age
  sortAgeBtn.addEventListener("click", () => {
    displayNoneH3();
    elevList.innerHTML = "";
    // ----- get the value from radiobutton and sort accordingly
    sortRadioBtns.forEach((btn) => {
      if(btn.checked) {
        let sortType = btn.value;
        // console.log(sortType); kontrolutskrift
        if(sortType === "stigande") {
          students.sort((student1, student2) => student1.age - student2.age);
        }else {
          students.sort((student1, student2) => student2.age - student1.age);
        }
      }
    });
    // display sorted students in DOM
    students.forEach((student) => {
      let sortedStudentsByAge = document.createElement("li");
      sortedStudentsByAge.innerHTML = `${student.firstName} ${student.lastName} är <span id="age">${student.age}</span>`;
      let newTitel = document.querySelector("#h2");
      newTitel.innerHTML = `Elever sorterad baserad på sin ålder`;
      elevList.append(sortedStudentsByAge);
    });
  });
// Sort by firstname (alphabetically)
  sortFirstNameBtn.addEventListener("click", () => {
    displayNoneH3();
    elevList.innerHTML = "";
    sortRadioBtns.forEach((btn) => {
      if(btn.checked) {
        let sortType = btn.value;
        // console.log(sortType); kontrolutskrift
        if(sortType === "stigande") {
          students.sort((student1, student2) => {
            if(student1.firstName > student2.firstName) {
              return 1;
            }
            else {
              return -1;
            }
          });
        }else {
          students.sort((student1, student2) => {
            if(student1.firstName < student2.firstName) {
              return 1;
            }
            else {
              return -1;
            }
          })
        }
      }
    });
    // display in DOM
    students.forEach((student) => {
      let sortedStudentsByFirstName = document.createElement("li");
      sortedStudentsByFirstName.innerHTML = ` <strong>${student.firstName}</strong> ${student.lastName}`;
      let newTitel = document.querySelector("#h2");
      newTitel.innerHTML = `Elever sorterad baserad på sin förnamn`;
      elevList.append(sortedStudentsByFirstName);
    });
  });
 // Sort by lastname (alphabetically)
  sortLastNameBtn.addEventListener("click", () => {
    displayNoneH3();
    elevList.innerHTML = "";
    //-------
    sortRadioBtns.forEach((btn) => {
      if(btn.checked) {
        let sortType = btn.value;
        // console.log(sortType); kontrolutskrift
        if(sortType === "stigande") {
          students.sort((student1, student2) => {
            if(student1.lastName > student2.lastName) {
              return 1;
            }
            else {
              return -1;
            }
          });
        }else {
          students.sort((student1, student2) => {
            if(student1.lastName < student2.lastName) {
              return 1;
            }
            else {
              return -1;
            }
          })
        }
      }
    });
    //-Display in DOM
    students.forEach((student) => {
      let sortedStudentsByLastName = document.createElement("li");
      sortedStudentsByLastName.innerHTML = ` ${student.firstName} <strong>${student.lastName}</strong>`;
      let newTitel = document.querySelector("#h2");
      newTitel.innerHTML = `Elever sorterad baserad på sin efternamn`;
      elevList.append(sortedStudentsByLastName);
    });
  });
}
// Call the main function
chooseData();