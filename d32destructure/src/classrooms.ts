export {collectRoomNumbers, collectRoomsAndCapacities , collectLabeledRoomCaps,countStudentsInClassroom, 
  findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge};  //implement these

type Classroom = {
    roomNumber:number,
    capacity:number,
    students:Student[];
}

type Student = {
   name:string,
   age:number;
}   

export const classrooms = [
    {
      roomNumber: 101,
      capacity: 30,
      students: [
        { name: "Alice", age: 18 },
        { name: "Bob", age: 19 },
        { name: "Charlie", age: 17 },
      ],
    },
    {
      roomNumber: 102,
      capacity: 25,
      students: [
        { name: "David", age: 20 },
        { name: "Eve", age: 18 },
      ],
    },
    {
      roomNumber: 103,
      capacity: 35,
      students: [
        { name: "Frank", age: 19 },
        { name: "Grace", age: 20 },
        { name: "Helen", age: 17 },
      ],
    },
  ];
/* 
1.	Write a function collectRoomNumbers that will return an array of all the room nmbers.
2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this 
string format:  [“101::30”, :102::25”, “103::35”].
3.	Write a function collectLabeledRoomCaps to return room numbers and capacities in this object 
format [{roomNumber: 101, capacity: 30} , …  ]
4.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a 
roomNumber as parameters and returns the number of students in the specified classroom.
5.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a
 minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
6.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum 
age as parameters and returns an array of student objects who are older than the specified age, along with the name of their classroom.
7.
 */
function collectRoomNumbers():number[]{
  return classrooms.map(({roomNumber})=>roomNumber);
}
function collectRoomsAndCapacities():string[]{
  return classrooms.map(({roomNumber, capacity})=>`${roomNumber}::${capacity}`)
}

function collectLabeledRoomCaps():{ roomNumber: number; capacity: number }[]{
  return classrooms.map(({roomNumber,capacity})=>({roomNumber,capacity}))
}

function countStudentsInClassroom(classrooms:Classroom[], roomNum:number):number{
 const roomFind=classrooms.find(({roomNumber})=>roomNumber===roomNum);

 if(roomFind){
  return roomFind.students.length
  }
  else return 0;
 }
 function findClassroomsWithCapacity(classrooms:Classroom[],minCapacity:number):Classroom[]{
  return classrooms.filter((classroom) => classroom.capacity === minCapacity);
}
function findStudentsOlderThan(classrooms: Classroom[], minAge: number): { student: Student, classroomName: string }[] {
  return classrooms.reduce((result, { roomNumber, students }) => {
    const olderStudentsInRoom = students.filter(student => student.age > minAge);
    const studentsWithClassroomName = olderStudentsInRoom.map(student => ({ student, classroomName: `Room ${roomNumber}` }));
    return result.concat(studentsWithClassroomName);
  }, [] as { student: Student, classroomName: string }[]);
}

function averageStudentAge(classrooms: Classroom[]): number {
  const totalStudents = classrooms.reduce((total, { students }) => total + students.length, 0);
  const totalAge = classrooms.reduce((total, { students }) => total + students.reduce((sum, { age }) => sum + age, 0), 0);

  // Avoid division by zero
  return totalStudents !== 0 ? totalAge / totalStudents : 0;
}
 




 




  