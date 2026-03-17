x = int(input())
num = 0
i = 0
while (x > 0):
    num += (x % 10) * (2 ** i)
    x //= 10
    i += 1
print(num)