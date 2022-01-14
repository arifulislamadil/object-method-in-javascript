const student = {
    id: 101,
    major: "Mathamatics",
    money: 5000,
    name: "RJ kibria",
    subjects: ["English", "Economics", "Math 101", "Calculus"],
    bestFriend: {
        name: "Kundu",
        major: "Mathematics"
    },
    takeExam: function () {
        console.log(this.name, "taking exam");
    },
    treatDey: function (expense) {
        this.money = this.money - expense;
        return this.money
    }
}
student.takeExam()