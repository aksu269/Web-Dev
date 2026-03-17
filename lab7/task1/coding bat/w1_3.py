def parrot_trouble(talking, hour):
  if talking:
    if (hour < 7 or hour > 20) and (hour >= 0 and hour <= 23):
      return True
  return False
