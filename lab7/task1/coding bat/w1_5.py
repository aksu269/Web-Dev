def near_hundred(n):
    is_near_100 = abs(100 - n) <= 10
    
    is_near_200 = abs(200 - n) <= 10
    
    return is_near_100 or is_near_200