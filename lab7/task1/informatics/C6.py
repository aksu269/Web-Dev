def xor(x, y):
    if x != y:
        return 1
    else:
        return 0

data = input().split()
x = int(data[0])
y = int(data[1])

print(xor(x, y))