var Form = new Vue({
    el: "#fm",
    data: {
        t_color: 'red',
        t_font: 'bold',
        status: false,
        student: {
            id: "",
            name: "",
            lname: "",
            email: "",
            gpa: ""
        },
        studentList: [
            { id: 1, name: "asd", lname: "asd", email: "asd@gmail.com", gpa: "3.25" },
            { id: 2, name: "dfg", lname: "rty", email: "ghj@gmail.com", gpa: "1.88" },
            { id: 3, name: "xzcv", lname: "cvb", email: "cvb@gmail.com", gpa: "2.01" },
        ],
    },
    methods: {
        push: function () {
            this.studentList.push({
                id: this.student.id,
                name: this.student.name, lname: this.student.lname,
                email: this.student.email, gpa: this.student.gpa
            });
            this.student.id = "";
            this.student.name = "";
            this.student.lname = "";
            this.student.email = "";
            this.student.gpa = "";
        },
        pop: function (id) {
            this.studentList.splice(id, 1);
        },
    }
})