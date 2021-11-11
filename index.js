let waitingListStudentsContainerNode = document.getElementById(
  "waiting-list-students-container"
)

let studentInputNode = document.getElementById("student-name")

const addStudent = function () {
  let studentName = studentInputNode.value

  if (studentName.length != 0) {
    let studentNode = document.createElement("li")
    studentNode.classList.add("list-group-item")
    studentNode.innerText = studentName

    waitingListStudentsContainerNode.appendChild(studentNode)
  }

  studentInputNode.value = ""
}

const createTeams = function () {
  let teamsContainerNode = document.getElementById("teams-container")

  let numberTeamsInput = document.getElementById("number-teams")
  console.log(numberTeamsInput.value)
  let numberOfTeams = numberTeamsInput.value
  for (let i = 1; i <= numberOfTeams; i++) {
    let teamNode = document.createElement("div")
    teamNode.classList.add("card", "col-4")

    let headerNode = document.createElement("div")
    headerNode.classList.add("card-header")

    headerNode.innerText = `Team ${i}`

    teamNode.appendChild(headerNode)

    teamsContainerNode.appendChild(teamNode)
  }
}

const onStudentEnterKey = function () {
  let studentInputNode = document.getElementById("student-name")
  studentInputNode.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addStudent()
    }
  })
}

// onload here
window.onload = () => {
  onStudentEnterKey()
}

// <div class="card col-4">
//               <div class="card-header">Featured</div>
//               <ul class="list-group list-group-flush">
//                 <li class="list-group-item">An item</li>
//                 <li class="list-group-item">A second item</li>
//                 <li class="list-group-item">A third item</li>
//               </ul>
//             </div>
