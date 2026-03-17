def find_min(a, b, c, d):
    minimum = a
    
    if b < minimum:
        minimum = b
    if c < minimum:
        minimum = c
    if d < minimum:
        minimum = d
        
    return minimum

nums = list(map(int, input().split()))
result = find_min(nums[0], nums[1], nums[2], nums[3])
print(result)