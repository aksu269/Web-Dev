def array_front9(nums):
  size = 4
  if len(nums) < 4:
    size = len(nums)
  
  for i in range(size):
    if (nums[i] == 9):
      return True
  return False