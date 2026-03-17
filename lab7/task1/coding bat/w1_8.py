def missing_char(word, n):
    front = word[:n]
    back = word[n+1:]
    
    return front + back