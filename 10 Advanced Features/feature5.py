# Decorator

def my_decorator(func): 
    def wrapper(*args, **kwargs): 
        print("Before the function execution.")
        result = func(*args, **kwargs)
        print("After the function execution.")
        return result
    
    return wrapper

@my_decorator
def say_hello(name): 
    print(f"Hello, {name}")

if __name__ == "__main__": 
    say_hello("Atul")