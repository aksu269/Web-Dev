def centered_average(nums):
    total_sum = sum(nums)
    
    smallest = min(nums)
    largest = max(nums)
    
    centered_sum = total_sum - smallest - largest
    
    return centered_sum // (len(nums) - 2)