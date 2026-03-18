class Person:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender
    def getName(self):
        return self.name
    def getAge(self):
        return self.age
    def getDescription(self):
        return f"Name: {self.name}\nAge: {self.age}\nGender:{self.gender}"
    def __str__(self):
        return f"{self.name} - {self.age}"
class Student(Person):
    def __init__(self, name, age, gender, major):
        super().__init__(name, age, gender)
        self.major = major
    def getDescription(self):
        return f"{super().getDescription()}\nMajor: {self.major}"
    def study(self):
        print(self.name + " is studying...")
class Teacher(Person):
    def __init__(self, name, age, gender, subject):
        super().__init__(name, age, gender)
        self.subject = subject
    def teach(self):
        print(self.name + " is teaching...")
    def getDescription(self):
        return f"{super().getDescription()} \nTeaches: {self.subject}"
    