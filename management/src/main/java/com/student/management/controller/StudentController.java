package com.student.management.controller;

import com.student.management.model.Student;
import com.student.management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/std")
public class StudentController {

    @Autowired
    StudentService service;

    @GetMapping("/home")
    public String Hello() {
        return "Hello to College ERP!";
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable long id) {
        return service.getStudentById(id);
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return service.addStudent(student);
    }

    @PutMapping("update/{id}")
    public Student updateStudent(@PathVariable long id, @RequestBody Student newStudent) {
        return service.updateStudent(id, newStudent);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteStudentById(@PathVariable long id) {
        service.deleteStudentById(id);

        return "Student Deleted Successfully!";
    }

}