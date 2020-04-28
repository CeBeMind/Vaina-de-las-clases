// Creates matrix if does not exist, or load it
function primeraVezJamesFranco () {
    if (!(localStorage.getItem("PrimerAves"))){
        localStorage.setItem("PrimerAves",1);
        localStorage.setItem('students', JSON.stringify([...Array(6)].map(e => [...Array(5)].map(e => Array(0)))));
    }
    else
        studentsArray = JSON.parse(localStorage.getItem('students'));
}

//Checks selections
$(document).ready(function(){
    $("#SelectYear").change(function(){
        var selectedYear = $(this).prop('selectedIndex');
    });
    $("#SelectSection").change(function(){
        var selectedSection = $(this).prop('selectedIndex');

        console.log(selectedSection);
    });
});

// This piece of Maduro skin is not working
function uV() {
    startProgram();
};

function displayLogin() {
    console.log('khe');
    $('#ModalLogin').modal('toggle');
};

function startProgram() {
    $('#MainApp').show();
    $('#ModalLogin').modal('hide');
};

$('.dropdown-toggle').dropdown();
var example = flatpickr('#flatpickr');

$("button#getNewSuccess").click(function () {
    $(".check-icon").hide();
    setTimeout(function () {
        $(".check-icon").show();
    }, 10);
});

function discardChange() {
    document.getElementById("discard").style.display = "none";
}
function discardChangeSure() {
    $('#addStudent')[0].reset();
}
// (function () {
//     'use strict';
//     window.addEventListener('load', function () {
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.getElementsByClassName('needs-validation');
//         // Loop over them and prevent submission
//         var validation = Array.prototype.filter.call(forms, function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (form.checkValidity() === false) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 }
//                 form.classList.add('was-validated');
//             }, false);
//         });
//     }, false);
// })();

//Codigo de control de estudiantes

//Variables

const addStudentForm = document.querySelector('#addStudent');
const addedStudentsList = document.querySelector('#addedStudentsList tbody');
let studentsAddedArray = [];

//Classes

//Class Student: creates the student
class Student {
    constructor (id,name,lastName,birthDate,gender,status) {
        this.id = id,
        this.name = name,
        this.lastName = lastName,
        this.birthDate = birthDate,
        this.gender = gender,
        this.status = status
    }
}

//Functions
const saveLs = () => {
    localStorage.setItem('students', JSON.stringify(studentsArray));
}

function getLs (p1,p2) {
    addedStudentsList.innerHTML = '';
    if (localStorage.getItem('students') == true)
        addedStudentsArray = JSON.parse(localStorage.getItem('students'));
    else {primeraVezJamesFranco();getLs();}

    if (addedStudentsArray[p1][p2] != undefined){
        addedStudentsArray[p1][p2].forEach(element => {
            addedStudentsList.innerHTML += ` 
                        <tr>
                            <th scope="row" class="d-none">1</th>
                            <td>${element.id}</td>
                            <td>${element.name.toString().split(" ")[0]} ${element.lastName.toString().split(" ")[0]}</td>
                        </tr>`;
        })
    }
    console.log(addedStudentsArray);
    }

//Listeners
addStudentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let names = $('#newStudentNames').val();
    let lastNames = $('#newStudentLastnames').val();
    let studentId = $('#newStudentId').val();
    if ($('#newStudentGenderM').prop("checked") == true)
        gender = 'M';
    else if ($('#newStudentGenderF').prop("checked") == true)
        gender = 'F';
    let studentBirthDate = $('#flatpickr').val();
    let students = new Student(studentId,names,lastNames,studentBirthDate,gender,0);
    studentsArray = JSON.parse(localStorage.getItem('students'));
    studentsArray[$("#SelectYear").prop('selectedIndex')][$('#SelectSection').prop('selectedIndex')].push(students);
    addStudentForm.reset();
    saveLs();
    getLs();
});

document.addEventListener('DOMContentLoaded', getLs(0,0));

