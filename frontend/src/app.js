/* DEFINE APPLICANTS */
let applicants = [
  // ["Name", "Email", "Position", "Department", "Hiring Status", ["Skill1", "Skill2", "Skill3"]]

  ["Kaitlin Berryman", "kaitlinberryman@gmail.com", "Software Engineering Intern",
   "Software Engineering", "Interview Scheduled", ["Python", "JS", "Git"]],

  ["Nick Mosher", "nicholastmosher@gmail.com", "Software Engineer",
   "Software Engineering", "Final Interview Complete", ["Rust", "Linux", "Git"]],

  ["Name Name", "Name@csh.rit.edu", "CEO",
   "Admin", "Tech Scren Complete", ["C", "Linux", "Assembly"]]
]

/* CREATE APPLICANT IN APPLICANTS TABLE */
function createApplicant(name, email, position, department, hiringStatus, skills) {
  let applicant = `
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img class="h-10 w-10 rounded-full" src="../assets/pics/kaitlin-profile-pic.jpeg" alt="">
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            ${name}
          </div>
          <div class="text-sm text-gray-500">
            ${email}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">${position}</div>
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-black-800">
        ${department}
      </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">


      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-black-800">
        ${hiringStatus}
      </span>


    </td>
    <td>
    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-black-800">
      ${skills[0]}
    </span>
    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800">
      ${skills[1]}
    </span>
    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-black-800">
      ${skills[2]}
    </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
    </td>
  </tr>
  `
  let row = document.querySelector("#test>tbody").insertRow(0);
  row.innerHTML = applicant;
}

/* ON PAGE LOAD */
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('Page load successful')



  let Jeff = ["Jeff Monier", "jeff@geisel-software.com", "Senior Software Engineering",
   "Software Engineering", "Offer Sent", ["Erlang", "Functional Programming", "Linux"]]

   applicants.forEach((applicant, i) => {
       createApplicant(...applicant)
   });


})

const applicantsButton = document.querySelector('#applicants-button')

/* CREATE NEW APPLICANT FROM FORM */
const addApplicantButton = document.querySelector('#add-applicant-button')

addApplicantButton.onclick = function() {
  document.querySelector('#modal-div').classList.toggle('hidden')
}

const newApplicantSubmitButton = document.querySelector("#new-applicant-submit-button")

newApplicantSubmitButton.onclick = function() {
  const newApplicantName = document.querySelector("#new-applicant-name").value
  const newApplicantEmail = document.querySelector("#new-applicant-email").value
  const newApplicantPosition = document.querySelector("#new-applicant-position").value
  const newApplicantDepartment = document.querySelector("#new-applicant-department").value
  const newApplicantHiringStage = document.querySelector("#new-applicant-hiring-stage").value
  const newApplicantSkill1 = document.querySelector("#new-applicant-skill1").value
  const newApplicantSkill2 = document.querySelector("#new-applicant-skill2").value
  const newApplicantSkill3 = document.querySelector("#new-applicant-skill3").value

  createApplicant(newApplicantName, newApplicantEmail, newApplicantPosition, newApplicantDepartment,
                  newApplicantHiringStage, [newApplicantSkill1, newApplicantSkill2, newApplicantSkill3])

  applicants.push([newApplicantName, newApplicantEmail, newApplicantPosition, newApplicantDepartment,
                  newApplicantHiringStage, [newApplicantSkill1, newApplicantSkill2, newApplicantSkill3]])

  document.querySelector('#modal-div').classList.toggle('hidden')

  document.querySelector("#new-applicant-name").value = ""
  document.querySelector("#new-applicant-email").value = ""
  document.querySelector("#new-applicant-position").value = ""
  document.querySelector("#new-applicant-department").value = ""
  document.querySelector("#new-applicant-hiring-stage").value = ""
  document.querySelector("#new-applicant-skill1").value = ""
  document.querySelector("#new-applicant-skill2").value = ""
  document.querySelector("#new-applicant-skill3").value = ""

  console.log(applicants)
}

const newApplicantCancelButton = document.querySelector("#new-applicant-cancel-button")

newApplicantCancelButton.onclick = function() {
  document.querySelector('#modal-div').classList.toggle('hidden')
}




/* FILTER BUTTON LOGIC (START)*/

// Filter by Position Set-Up
const positionFilterCheckbox = document.querySelector('#position-filter-checkbox')

const roboticsPos = document.querySelector('#robotics-pos')
const SrSEPos = document.querySelector('#sr-se-pos')
const PMPos = document.querySelector('#PM-pos')
const SEEntryPos = document.querySelector('#se-entry-pos')
const SEInternPos = document.querySelector('#se-intern-pos')

const roboticsPosCheckbox = document.querySelector('#robotics-pos-checkbox')
const SrSEPosCheckbox = document.querySelector('#sr-se-pos-checkbox')
const PMPosCheckbox = document.querySelector('#PM-pos-checkbox')
const SEEntryPosCheckbox = document.querySelector('#se-entry-pos-checkbox')
const SEInternPosCheckbox = document.querySelector('#se-intern-pos-checkbox')

// Filter by Department Set-Up
const deptFilterCheckbox = document.querySelector('#dept-filter-checkbox')

const SE = document.querySelector('#SE')
const PM = document.querySelector('#PM')
const marketing = document.querySelector('#marketing')
const PR = document.querySelector('#PR')
const hiring = document.querySelector('#hiring')
const IT = document.querySelector('#it')
const admin = document.querySelector('#admin')

const SECheckbox = document.querySelector('#SE-checkbox')
const PMCheckbox = document.querySelector('#PM-checkbox')
const marketingCheckbox = document.querySelector('#marketing-checkbox')
const PRCheckbox = document.querySelector('#PR-checkbox')
const hiringCheckbox = document.querySelector('#hiring-checkbox')
const ITCheckbox = document.querySelector('#it-checkbox')
const adminCheckbox = document.querySelector('#admin-checkbox')

// Filter by Hiring Status Set-Up
const hiringFilterCheckbox = document.querySelector('#hiring-filter-checkbox')

const justApplied = document.querySelector("#just-applied")
const hrScreenComplete = document.querySelector("#hr-screen-complete")
const techScreenComplete = document.querySelector("#tech-screen-complete")
const finalInterviewComplete = document.querySelector("#final-interview-complete")
const offerSent = document.querySelector("#offer-sent")

const justAppliedCheckbox = document.querySelector("#just-applied-checkbox")
const hrScreenCompleteCheckbox = document.querySelector("#hr-screen-complete-checkbox")
const techScreenCompleteCheckbox = document.querySelector("#tech-screen-complete-checkbox")
const finalInterviewCompleteCheckbox = document.querySelector("#final-interview-complete-checkbox")
const offerSentCheckbox = document.querySelector("#offer-sent-checkbox")

// Filter by Skills Set-Up
const skillsFilterCheckbox = document.querySelector('#skills-filter-checkbox')

const Rust = document.querySelector('#Rust')
const Python = document.querySelector('#Python')
const JS = document.querySelector('#JS')
const Linux = document.querySelector('#Linux')
const C = document.querySelector('#C')
const Git = document.querySelector('#Git')

const RustCheckbox = document.querySelector('#Rust-checkbox')
const PythonCheckbox = document.querySelector('#Python-checkbox')
const JSCheckbox = document.querySelector('#JS-checkbox')
const LinuxCheckbox = document.querySelector('#Linux-checkbox')
const CCheckbox = document.querySelector('#C-checkbox')
const GitCheckbox = document.querySelector('#Git-checkbox')


// Filter by Position Logic
positionFilterCheckbox.onclick = function() {
  roboticsPos.classList.toggle('hidden')
  SrSEPos.classList.toggle('hidden')
  PMPos.classList.toggle('hidden')
  SEEntryPos.classList.toggle('hidden')
  SEInternPos.classList.toggle('hidden')

  roboticsPosCheckbox.checked = false
  SrSEPosCheckbox.checked = false
  PMPosCheckbox.checked = false
  SEEntryPosCheckbox.checked = false
  SEInternPosCheckbox.checked = false
};

// Filter by Department Logic
deptFilterCheckbox.onclick = function() {
  SE.classList.toggle('hidden')
  PM.classList.toggle('hidden')
  marketing.classList.toggle('hidden')
  PR.classList.toggle('hidden')
  hiring.classList.toggle('hidden')
  IT.classList.toggle('hidden')
  admin.classList.toggle('hidden')

  SECheckbox.checked = false
  PMCheckbox.checked = false
  marketingCheckbox.checked = false
  PRCheckbox.checked = false
  hiringCheckbox.checked = false
  ITCheckbox.checked = false
  adminCheckbox.checked = false
};

// Filter by Hiring Status Logic
hiringFilterCheckbox.onclick = function() {
  justApplied.classList.toggle('hidden')
  hrScreenComplete.classList.toggle('hidden')
  techScreenComplete.classList.toggle('hidden')
  finalInterviewComplete.classList.toggle('hidden')
  offerSent.classList.toggle('hidden')

  justAppliedCheckbox.checked = false
  hrScreenCompleteCheckbox.checked = false
  techScreenCompleteCheckbox.checked = false
  finalInterviewCompleteCheckbox.checked = false
  offerSentCheckbox.checked = false
};

// Filter by Skills Logic
skillsFilterCheckbox.onclick = function() {
  Rust.classList.toggle('hidden')
  Python.classList.toggle('hidden')
  JS.classList.toggle('hidden')
  Linux.classList.toggle('hidden')
  C.classList.toggle('hidden')
  Git.classList.toggle('hidden')

  RustCheckbox.checked = false
  PythonCheckbox.checked = false
  JSCheckbox.checked = false
  LinuxCheckbox.checked = false
  CCheckbox.checked = false
  GitCheckbox.checked = false
};

/* FILTER BUTTON LOGIC (END)*/
