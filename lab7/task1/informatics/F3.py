x = int(input())
reversed_x = 0
while (x > 0):
    reversed_x = reversed_x * 10 + x % 10
    x //= 10
print(reversed_x)