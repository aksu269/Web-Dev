def sum67(nums):
    total = 0
    record = True  
    for n in nums:
        if n == 6:
            record = False
        if record:
            total += n
            
        if n == 7 and not record:
            record = True 
    return total