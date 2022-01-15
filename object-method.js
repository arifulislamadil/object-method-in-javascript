const student = {
    id: 101,
    major: "Mathamatics",
    money: 5000,
    name: "Abrar",
    subjects: ["English", "Economics", "Math 101", "Calculus"],
    bestFriend: {
        name: "Kundu",
        major: "Mathematics"
    },
    takeExam: function () {
        console.log(this.name, "taking exam");
    },
    treatDey: function (expense, tip) {
        this.money = this.money - expense - tip;
        return this.money
    }
}
student.takeExam();
//Output: Abrar taking exam
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining1);
console.log(remaining2);
//Output: 4000,3450