def big_diff(nums):
  mi = nums[0]
  ma = nums[0]
  for i in nums:
    if i > ma:
      ma = i
    if i < mi:
      mi = i
  return ma - mi
