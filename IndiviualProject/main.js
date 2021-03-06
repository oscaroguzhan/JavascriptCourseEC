// get elements from DOM
let contentContainer = document.querySelector(".content-container");
let h3 = document.getElementById("h3");
let elevList = document.querySelector(".elevList");
let radioBtnsProgramme = document.querySelectorAll('[name="programme"]');
let filterBtn = document.getElementById("filter_Btn");
let sortAlternative = document.getElementById("sorter_val");
let sortRadioBtns = document.querySelectorAll('[name="sorter"]');
let studentName = document.getElementById("studentName");
let searchBtn = document.getElementById("searchBtn");

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

          //  ---------- SORT SECTION ---------
          // Sort by age
          sortAgeBtn.addEventListener("click", () => {
            displayNoneH3();
            elevList.innerHTML = "";
            // ----- get the value from radiobutton and sort accordingly
            sortRadioBtns.forEach((btn) => {
              if (btn.checked) {
                let sortType = btn.value;
                // console.log(sortType); kontrolutskrift
                if (sortType === "stigande") {
                  filteredbyProgramme.sort(
                    (student1, student2) => student1.age - student2.age
                  );
                } else {
                  filteredbyProgramme.sort(
                    (student1, student2) => student2.age - student1.age
                  );
                }
              }
            });
            // display sorted students in DOM
            filteredbyProgramme.forEach((student) => {
              let sortedStudentsByAge = document.createElement("li");
              sortedStudentsByAge.innerHTML = `${student.firstName} ${student.lastName} är <span id="age"><strong>${student.age}</strong></span>`;
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
              if (btn.checked) {
                let sortType = btn.value;
                // console.log(sortType); kontrolutskrift
                if (sortType === "stigande") {
                  filteredbyProgramme.sort((student1, student2) => {
                    if (student1.firstName > student2.firstName) {
                      return 1;
                    } else {
                      return -1;
                    }
                  });
                } else {
                  filteredbyProgramme.sort((student1, student2) => {
                    if (student1.firstName < student2.firstName) {
                      return 1;
                    } else {
                      return -1;
                    }
                  });
                }
              }
            });
            // display in DOM
            filteredbyProgramme.forEach((student) => {
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
              if (btn.checked) {
                let sortType = btn.value;
                // console.log(sortType); kontrolutskrift
                if (sortType === "stigande") {
                  filteredbyProgramme.sort((student1, student2) => {
                    if (student1.lastName > student2.lastName) {
                      return 1;
                    } else {
                      return -1;
                    }
                  });
                } else {
                  filteredbyProgramme.sort((student1, student2) => {
                    if (student1.lastName < student2.lastName) {
                      return 1;
                    } else {
                      return -1;
                    }
                  });
                }
              }
            });
            //-Display in DOM
            filteredbyProgramme.forEach((student) => {
              let sortedStudentsByLastName = document.createElement("li");
              sortedStudentsByLastName.innerHTML = ` ${student.firstName} <strong>${student.lastName}</strong>`;
              let newTitel = document.querySelector("#h2");
              newTitel.innerHTML = `Elever sorterad baserad på sin efternamn`;
              elevList.append(sortedStudentsByLastName);
            });
          });
          // FIND THE RECOMMENDED SCHOOLS

          searchBtn.addEventListener("click", (e) => {
            e.preventDefault();

            students.forEach((student) => {
              let inputName = studentName.value.toLowerCase();
              let lowerCaseStudentFirstName = student.firstName.toLowerCase();
              // debugger;
              if (lowerCaseStudentFirstName === inputName) {
                console.log(student.hobbies);
                // rensa listan 
                elevList.innerHTML = "";

                
                schools.forEach((school) => {
                  /* retunera för det man inte vill ha med Boring school has no activities 
                  so when i use array method such as every or some de vill sluta loopa as soon as de retunerar false 
                  därför excluderar den för att hitta passande skolor som har minst en aktivititet */
                  if(school.name === "Boring School") {
                    return
                  }

                  let chosenSchool = document.createElement("li");
                  if (
                    student.hobbies.some((match) =>
                      school.activities.includes(match))
                  ) {
                    

                    console.log(school);
                    displayNoneH3();
                    
                    
                    chosenSchool.innerHTML = `<li id= "passande_skol">${school.name}</li>`;
                    let newTitel = document.querySelector("#h2");
                    newTitel.innerHTML = `Recommended Schools that has similiar activities for <div id= "student_name">${student.firstName}</div>`;
                    elevList.append(chosenSchool);
                  }
                  
                });
                
              }
            });
          });
          elevList.appendChild(filteredStudent);
        });
      }
    });
  });
}
// Call the main function
chooseData();
