arr = [1, 4, 8, 25, 1101, 1400, 2100, 4001]

def binary_search(array, target):
    left = 0
    right = len(array) - 1
    
    while (left <= right):
        mid = (left + right) // 2
        print(f'mid=={mid}')
        guess = array[mid]
        print(f'guess=={guess}')
        
        if guess == target:
            print(f"Искомый элемент {target} найден (индекс: {mid})")
            return mid
        elif guess > target:
            right = mid - 1
        else:
            left = mid + 1
        
    return -1

print(binary_search(arr, 1400))
print("\n")
print(binary_search(arr, 4))

