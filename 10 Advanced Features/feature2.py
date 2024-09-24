# Dynamic Code Execution: eval and exec

# Using eval function: 
expr = "2 + 3 + 4"
result = eval(expr)
print(f"Result: {result}")

# Using exec function: 
code = """
for i in range(3): 
    print("Hello, World!")
"""
exec(code)