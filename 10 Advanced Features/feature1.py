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