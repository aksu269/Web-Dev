from models import Person, Student, Teacher
def main():
    person = Person("Aksu", 19, "Female")
    student = Student("Aksu", 19, "Female", "Information Systems")
    teacher = Teacher("Alex", 30, "Male", "Math")
    people = []
    people.append(person)
    people.append(student)
    people.append(teacher)
    for i in people:
        print(i.getDescription())
        if isinstance(i, Student):
            i.study()
        elif isinstance(i, Teacher):
            i.teach()
if __name__ == "__main__":
    main()
