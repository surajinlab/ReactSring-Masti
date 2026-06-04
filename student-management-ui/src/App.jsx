import React, { useEffect, useState } from "react";
import "./App.css";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

import {
    getStudents,
    addStudent,
    deleteStudent
} from "./services/StudentService";

function App() {

    const [students, setStudents] = useState([]);

    const loadStudents = () => {

        getStudents()
            .then((response) => {
                setStudents(response.data);
            });
    };

    useEffect(() => {
        loadStudents();
    }, []);

    const saveStudent = (student) => {

        addStudent(student)
            .then(() => {
                loadStudents();
            });
    };

    const removeStudent = (id) => {

        deleteStudent(id)
            .then(() => {
                loadStudents();
            });
    };

    return (

        <div className="container">

            <h1 className="title">
                Student Management System
            </h1>

            <StudentForm saveStudent={saveStudent} />

            <StudentList
                students={students}
                deleteStudent={removeStudent}
            />

        </div>

    );
}

export default App;