# Сложность O(1)

def sum(a, b):
    return a + b

print(sum(1, 1))

# Сложность O(n) - создание массива

def create_array(n):
    arr = []
    
    for i in range(n):
        arr.append(i)
    
    return arr 

print(create_array(5))

# Рекурсия - тоже сложность O(n)

# Рекурсия: функция вызывает саму себя

def recursiveFunction(n):
    print(n)
    if n == 0:
        return
    
    recursiveFunction(n-1)
    
print(recursiveFunction(5))