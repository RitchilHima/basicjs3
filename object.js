var student1 = {
    name: "MR X",
    id: 123,
    cgpa: 3.69,
    dept: "CSE"
   
};

var student2 = {
    name: "MR Y",
    id: 789,
    cgpa: 3.69,
    dept: "BBA"
}
//Add new properties
student1.address = "Dhaka"
console.log(student1)

student2.favSong = "Butterfly fly away for new-feature"
console.log(student2)

student1["favPerson"] ="Dad"
console.log(student1)
console.log(student1)
console.log(student2)

console.log(student1.name)
console.log(student1.id)

var id = student1["id"]
w-2
var name = student2["name"]
console.log(name)
w-3
var identification = "id";
var id = student2[identification];