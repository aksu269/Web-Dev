def cat_dog(str):
  count1 = 0
  for i in range(len(str) - 1):
      if str[i:i+3] == 'cat':
          count1 += 1
  count2 = 0
  for i in range(len(str) - 1):
      if str[i:i+3] == 'dog':
          count2 += 1
          
  return count1 == count2
  
