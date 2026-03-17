def average(array):
    array = set(array)
    sum = 0
    for x in array:
        sum += x
    sum /= len(array)
    return round(sum, 3)
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)