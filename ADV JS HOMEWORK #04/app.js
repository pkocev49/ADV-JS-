
let students = " https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"


    fetch(students)
    .then(function(res){
        return res.json()
    })
    .then(students => {
        // let  femaleStudents = students.filter(student => student.gender === "Female" && student.averageGrade === 5 )
        //                                 .map(student => `${student.firstName} ${student.lastName}`)
        //                                 .forEach(student => console.log( student))

        // let maleStudents= students.filter(student => student.gender === "Male" && student.city === "Skopje" && student.age >=18 )
        //                             .map(student => `${student.firstName} ${student.lastName}`)
        //                             .forEach(student => console.log(student))

        // let avgGradeOdFemale = students.filter(student =>student.gender === "Female" && student.age > 24 )
        //                                 .map(student => ` ${student.firstName} ${student.lastName} ${student.averageGrade}`)
        //                                 .forEach(student => console.log(student))

        students.sort(function(student1,studen2){
            return student1.lastName - studen2.lastName
        })
        .map(student => ` ${student.firstName} ${student.lastName} `)
        .forEach(students => console.log(students)) 
       
    })
   
























