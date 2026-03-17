n = int(input())
report = {}

for _ in range(n):
    line = input().rstrip().rsplit(' ', 1)
    item_name = line[0]
    net_price = int(line[1])
    
    report[item_name] = report.get(item_name, 0) + net_price

for item, price in report.items():
    print(f"{item} {price}")