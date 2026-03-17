if __name__ == "__main__":
    m = int(input())
    set_a = set(map(int, input().split()))
    
    n = int(input())
    set_b = set(map(int, input().split()))
    
    diff = set_a ^ set_b
    
    sorted_diff = sorted(list(diff))
    
    for item in sorted_diff:
        print(item)