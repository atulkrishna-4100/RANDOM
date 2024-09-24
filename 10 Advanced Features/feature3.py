# Function and Variable Annotations
name: str = "Atul"
age: int  = 21
is_student: bool = True

def greet(person: str, age: int) -> str:
    """
    Greets a person by name and age.

    Args:
        person (str): The name of the person.
        age (int): The age of the person.

    Returns:
        str: A greeting message.
    """
    return f"Hello, {person}! You are {age} years old."