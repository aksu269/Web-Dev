n = int(input())

current_power = 1
k = 0

while current_power < n:
    current_power *= 2
    k += 1

print(k)