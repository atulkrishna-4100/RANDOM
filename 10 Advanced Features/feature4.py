class Person: 
    def __init__(self, name: str, age: int) -> None: 
        self.name = name
        self.age = age

    def __repr__(self) -> str:
        return f"Person(name={self.name!r}, age={self.age})"

    def __str__(self) -> str:
        return f"{self.name}, {self.age} years old"

person = Person("Atul", 21)
print(repr(person))