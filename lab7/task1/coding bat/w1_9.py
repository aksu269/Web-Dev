def front_back(str):
  if (len(str) <= 1):
    return str
  first = str[0]
  last = str[-1]
  newStr = last + str[1:-1] + first
  return newStr
