# сортировка выбором (минимального элемента со смещением вправо)

arr = [6, 1, 2, 8, 10, 3, 7]

def selection_sort(arr):
    for i in range(len(arr)-1):
        # предполагаем, что в индексе i - минимальное число
        index_of_min_element = i
        
        # внутренний цикл для смешения 
        for j in range(i+1, len(arr)):
            if arr[j] < arr[index_of_min_element]:
                index_of_min_element = j
        
        # обмен значениями 
        if (index_of_min_element != i):
            arr[i], arr[index_of_min_element] = arr[index_of_min_element], arr[i]

    return arr


print(selection_sort(arr))