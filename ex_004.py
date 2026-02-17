array = [1, 4, 8, 25, 1101, 1400, 2100, 4001]

def linear_search(array, search_element):
    for i in range(len(array)):
        if array[i] == search_element:
            return True
    return False

print(linear_search(array, 1400))
    