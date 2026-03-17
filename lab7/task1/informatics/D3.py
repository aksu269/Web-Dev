
d = int(input())
x = int(input())
count = 0
while (d > 0):
    if (d % 10 == x):
        count += 1
    d //= 10
print(count)