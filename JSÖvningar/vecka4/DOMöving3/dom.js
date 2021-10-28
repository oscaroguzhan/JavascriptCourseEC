// Add player input + Button
let playerName = document.querySelector("#playerName");
let addPlayer = document.querySelector("#addPlayer");

// Team lists
let teamAList = document.querySelector("#teamAList");
let teamAMembers = 0;
let teamBList = document.querySelector("#teamBList");
let teamBMembers = 0;

// Team A-name
let teamANameInput = document.querySelector("#teamAName");
let changeTeamABtn = document.querySelector("#changeTeamAName");

// Team B-name
let teamBNameInput = document.querySelector("#teamBName");
let changeTeamBBtn = document.querySelector("#changeTeamBName");
// ADD FUNCTION TO FÖRST BUTTON

addPlayer.addEventListener("click", () => {
    if (teamAMembers < 5) {
        let listItem = document.createElement("li");
        listItem.textContent = playerName.value;
        // skapa another button for deleting the player
        let leaveBtn = document.createElement("button");
        leaveBtn.textContent = "Leave Team";
        leaveBtn.addEventListener("click", () => {
            leaveBtn.parentElement.remove();
            teamAMembers--;
        })
        let changeTeamBtn = document.createElement("button");
        changeTeamBtn.textContent = "Change team";



        // SKAPA FUNKTION FÖR CHANGE TEAM BUTTON
        changeTeamBtn.addEventListener("click", () => {
            // console.log("hej"); KONTROLCHECK
            // OM DET FINNS PLATS PÅ ANDRA LAGET CHANGE TEAM 
            if (teamBMembers < 5) {
                teamBList.appendChild(listItem);
                teamBMembers++;
                teamAMembers--;
            } 
        });




        listItem.appendChild(leaveBtn);
        listItem.appendChild(changeTeamBtn);
        teamAList.appendChild(listItem);
        teamAMembers++;
    } else {
        if (teamBMembers < 5) {
            let listItem = document.createElement("li");
            listItem.textContent = playerName.value;
            let leaveBtn = document.createElement("button");
            leaveBtn.textContent = "Leave Team";
            leaveBtn.addEventListener("click", () => {
                leaveBtn.parentElement.remove();
                teamBMembers--;
            })
            let changeTeamBtn = document.createElement("button");
            changeTeamBtn.textContent = "Change team";

            changeTeamBtn.addEventListener("click", () => {
                // console.log("hej"); KONTROLCHECK
                // OM DET FINNS PLATS PÅ ANDRA LAGET CHANGE TEAM 
                if (teamAMembers < 5) {
                    teamAList.appendChild(listItem);
                    teamAMembers++;
                    teamBMembers--;
                } 
            });
            listItem.appendChild(leaveBtn);
            listItem.appendChild(changeTeamBtn);
            teamBList.appendChild(listItem);
            teamBMembers++;
        } else {
            alert("Sorry Karin Both teams are full!");
        }
    }
});

// definera a funktion för att ändra teamnamnet

let changeTeamName = (event) => {
    // när vi klickar på knappen får vi event object med massa metoder. Target element som körs
    // console.log(event.target);
    // vi kan plocka element efter eller innan den element så du kan hämta värde från previous subling änd gör nåt med dig
    let input = event.target.previousElementSibling;
    // console.log(input); kontrollcheck
    event.target.nextElementSibling.textContent = input.value;
};

changeTeamABtn.addEventListener("click", changeTeamName);
changeTeamBBtn.addEventListener("click", changeTeamName);




