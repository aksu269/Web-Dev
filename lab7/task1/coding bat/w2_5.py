def last2(word):
    if len(word) < 2:
        return 0
    
    last_two = word[-2:]
    count = 0
    
    for i in range(len(word) - 2):
        sub = word[i : i+2]
        if sub == last_two:
            count += 1
            
    return count