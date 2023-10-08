---
title: "inheritance"
subtitle: "Learn the inheritance concept in CS."
date: "2020-12-22"
img: "linked_list.jpg"
---


Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows you to create new classes (derived or child classes) based on existing classes (base or parent classes). Inheritance enables you to define a new class that inherits the attributes and behaviors (methods and properties) of an existing class. The new class can also add its own attributes and behaviors or override and extend the ones inherited from the base class.

Key points about inheritance in OOP:

1. **Base Class (Parent Class or Superclass)**: This is the existing class from which another class inherits attributes and behaviors. The base class serves as the blueprint for the derived class.
    
2. **Derived Class (Child Class or Subclass)**: This is the new class that inherits attributes and behaviors from the base class. The derived class can add its own attributes and behaviors or override the ones inherited from the base class.
    
3. **"is-a" Relationship**: Inheritance models an "is-a" relationship, indicating that a derived class is a specialized version of the base class. For example, if you have a base class called "Animal," you can create derived classes like "Dog" and "Cat."
    
4. **Code Reuse**: Inheritance promotes code reuse because you can create new classes by reusing the attributes and behaviors of existing classes. This helps avoid duplicating code.
    
5. **Polymorphism**: Inheritance is closely related to polymorphism, which allows objects of derived classes to be treated as objects of the base class. This enables flexibility and extensibility in your code.
    
6. **Method Overriding**: Derived classes can override (replace) the methods inherited from the base class with their own implementations. This allows customization of behavior.

**Example**

In this example, the `Animal` class is the base class, and the `Dog` and `Cat` classes are derived classes. They inherit the `name` attribute and the `speak` method from the base class but provide their own implementations of the `speak` method. This demonstrates how inheritance allows you to create specialized classes based on a common base class.

```python 
# Base class (parent class)
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass

# Derived class (child class)
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

# Derived class (child class)
class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# Using inheritance
dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())  # Output: "Buddy says Woof!"
print(cat.speak())  # Output: "Whiskers says Meow!"

```