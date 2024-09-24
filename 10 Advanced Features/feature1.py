# Basic Unpacking
a, b, c = [1, 2, 3]
print(f"a: {a}, b: {b} and c: {c}")

# Extended Iterable Unpacking with *
a, b, *c = [1, 2, 3, 4, 5]
print(f"a: {a}, b: {b} and c: {c}")

# Ignoring Values
a, _, c = [1, 2, 3]

# Unpacking Nested Structures
data = ("Atul", (22, "Love Coding"))
name, (dob, hobby) = data
print(f"Name: {name}, DOB: {dob} and Hobby: {hobby}")

# Unpacking in Functional Arguments
def print_names(*names): 
    for name in names: 
        print(name)

print_names("Atul", "Aditya", "Shivendra")

def print_details(**details): 
    for key, value in details.items(): 
        print(f"{key}: {value}")

print_details(name="Atul", age="21", profession="SDE")

# Combining Lists with unpacking
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = [*list1, *list2]
print(f"Combined List: {combined}")

# Unpacking Dictionaries with **
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
combined_dict = {**dict1, **dict2}
print(f"Combined Dictionary: {combined_dict}")

# Swapping Variables using Unpacking
x = 10
y = 20
x, y = y, x
print(f"x: {x}, y: {y}")