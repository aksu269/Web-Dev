def string_splosion(str):
  s = ""
  i = 0
  while i <= len(str):
    s += str[:i]
    i += 1
  return s
    
