package com.student.management.service;

import com.student.management.model.Student;
import com.student.management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student getStudentById(long id) {
        return repository.findById(id).orElse(null);
    }

    public Student addStudent(Student student) {
        return repository.save(student);
    }

    public Student updateStudent(long id, Student newStudent) {
        Student student = repository.findById(id).orElse(null);     // currently in student have old data

        // newStudent have new data for updating old data of student
        student.setName((newStudent.getName() == null) ? student.getName() : newStudent.getName() );
        student.setCourse((newStudent.getCourse() == null) ? student.getCourse() : newStudent.getCourse() );
        student.setEmail((newStudent.getEmail() == null) ? student.getEmail() : newStudent.getEmail() );

        return repository.save(student);
    }

    public void deleteStudentById(long id) {
        repository.deleteById(id);
    }
}
