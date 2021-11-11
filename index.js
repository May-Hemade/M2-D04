let waitingListStudentsContainerNode = document.getElementById(
  "waiting-list-students-container"
)
let teamsContainerNode = document.getElementById("teams-container")

const addStudent = function () {
  let studentInputNode = document.getElementById("student-name")
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
  console.log("nyee")
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
