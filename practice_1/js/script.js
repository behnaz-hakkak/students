/**
 * Created by Behnaz on 12/6/2018.
 */
/*var bb = new Vue({
    el:'#app',
    template:
        '<form method="post">' +
            '<label>First Name:</label>'+
            '<input id="firstnameId" type="text" name="firstName">' +
            '<br>'+
            '<button type="submit" name ="submitBtn"> Send </button>'+
        '</form>',
    data: {
    },
    methods: {
        getInputValue: function () {
            console.log(this.getElementById("firstnameId"));
        }
    }
});*/


/*var submitBtn = document.getElementById("submitBtn");*/
/*submitBtn.click(function () {
   console.log(123);
});*/

/*var firstNameId = document.getElementById("firstNameId").value;

console.log(firstNameId);*/


/*$(".test").find("#submitBtn").submit(function () {
    console.log(123);
});*/

$(document).ready(function(){
    /*$("button").click(function(){
        $.post("server.php",
            {
                name: "Donald Duck",
                city: "Duckburg"
            },
            function(data,status){
                alert("Data: " + data + "\nStatus: " + status);
            });
    });*/


    /*$.post("server.php",
        {
            json_string:JSON.stringify(
            {name:"John", time:"2pm"})
        }
    );*/


    /*var text = '{ "employees" : [' +
     '{ "firstName":"John" , "lastName":"Doe" },' +
     '{ "firstName":"Anna" , "lastName":"Smith" },' +
     '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

     var obj = JSON.parse(text);

     console.log(obj);*/



    /*$("button").click(function (e) {
        e.preventDefault();

        $.post("server.php",
            {
                firstName: "Donald Duck"
            },
            function(data,status){
                alert("Data: " + data + "\nStatus: " + status);
            });
    });*/


    /*Object.objectSize = function (obj) {

        var i = 0 , key;
        for (key in car) {
            if (car.hasOwnProperty(key)) {
                i++;
            }
        }

        return i;
    };*/

    var students = [
        {
            name : "Behnaz",
            lastname : "Hakak",
            grades : [
                {
                    gradeName: "math",
                    grade: 20
                },
                {
                    gradeName: "English",
                    grade: 20

                }
            ]
        },
        {
            name : "Sima",
            lastname : "Safaei",
            grades : [
                {
                    gradeName: "math",
                    grade: 10
                },
                {
                    gradeName: "English",
                    grade: 18

                }
            ]
        },
        {
            name : "Saeid",
            lastname : "Rasam",
            grades : [
                {
                    gradeName: "math",
                    grade: 18
                },
                {
                    gradeName: "English",
                    grade: 17

                }
            ]
        }

    ];

    var teachers = [
        {
            name : "Hamid",
            lastname : "Hasani",
            courseName: "math"
        },
        {
            name : "Shiva",
            lastname : "Roohi",
            courseName: "English"
        }
    ];

    var studentsSection = document.getElementById("students-section");

    /*for (var i = 0; i < students.length; i++) {
        var eachStudentSection = document.createElement('div');
        eachStudentSection.className="each-student-sec";
        studentsSection.appendChild(eachStudentSection);

        /!* Student Name *!/
        var eachStudentName = document.createElement('div');
        eachStudentName.className="each-student-name";
        eachStudentName.innerHTML = students[i].name + " " + students[i].lastname;
        eachStudentSection.appendChild(eachStudentName);

        for (j=0; j < students[i].grades.length; j++) {
            /!* Student Grades *!/
            var eachStudentGrade = document.createElement('div');
            eachStudentGrade.className="each-student-name";
            eachStudentGrade.innerHTML = students[i].grades[j].gradeName + ": " + students[i].grades[j].grade;
            eachStudentSection.appendChild(eachStudentGrade);
        }

        for (t = 0; t < teachers.length; t++) {
            var eachStudentTeacher = document.createElement('div');
            eachStudentTeacher.innerHTML = "Lesson: --> " + teachers[t].courseName + " " + ", teacher's Name: " + teachers[t].name + " " + teachers[t].lastname;
            eachStudentSection.appendChild(eachStudentTeacher);
        }
    }*/

    var eachStudentSection = document.createElement('select');
    eachStudentSection.id="student-select-sec";
    studentsSection.appendChild(eachStudentSection);
    for (var i = 0;i < students.length;i++){
        var options = document.createElement('option');
        options.text = students[i].name + ' ' + students[i].lastname;
        options.setAttribute("data-related-url" , students[i].name + ".html");
        options.setAttribute("value", students[i].name + ' ' + students[i].lastname);
        eachStudentSection.appendChild(options);
    }

    const selectElement = document.querySelector('#student-select-sec');
    selectElement.addEventListener('change', selectChange);

    /*$.get("behnaz.html", function (data) {
        $("#students-section").html(data);
        alert("Load was performed!");
    });*/

});

/*function selectChange(event) {
    const result = document.querySelector('.result');
    result.textContent = `You like ${event.target.value}`;
}*/

function selectChange(event) {
    var option_url = this.options[this.selectedIndex].getAttribute("data-related-url");
    $.get(option_url, function (data) {
        $("#students-section-content").html(data);
    });
}