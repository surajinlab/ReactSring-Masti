import React, { useState } from "react";

function StudentForm({ saveStudent }) {

    const [student, setStudent] = useState({
        name: "",
        course: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        saveStudent(student);

        setStudent({
            name: "",
            course: "",
            email: ""
        });
    };

    return (
        <div className="form-container">

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <input
                        type="text"
                        placeholder="Name"
                        value={student.name}
                        onChange={(e) =>
                            setStudent({
                                ...student,
                                name: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Course"
                        value={student.course}
                        onChange={(e) =>
                            setStudent({
                                ...student,
                                course: e.target.value
                            })
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={student.email}
                        onChange={(e) =>
                            setStudent({
                                ...student,
                                email: e.target.value
                            })
                        }
                    />

                </div>

                <button className="btn btn-save">
                    Save Student
                </button>

            </form>

        </div>
    );
}

export default StudentForm;