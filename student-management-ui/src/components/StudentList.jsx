import React from "react";

function StudentList({ students, deleteStudent }) {

    return (
        <div className="table-container">

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {students.map((student) => (

                        <tr key={student.id}>

                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.course}</td>
                            <td>{student.email}</td>
                            <td><button className="btn-delete" onClick={() => deleteStudent(student.id)}> Delete </button></td>

                        </tr>
                        
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default StudentList;