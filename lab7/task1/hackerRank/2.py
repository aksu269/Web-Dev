if __name__ == '__main__':
    N = int(input())
    my_list = []
    
    for _ in range(N):
        command_parts = input().split()
        command = command_parts[0]
        
        if command == "insert":
            index = int(command_parts[1])
            element = int(command_parts[2])
            my_list.insert(index, element)
            
        elif command == "print":
            print(my_list)
            
        elif command == "remove":
            element = int(command_parts[1])
            my_list.remove(element)
            
        elif command == "append":
            element = int(command_parts[1])
            my_list.append(element)
            
        elif command == "sort":
            my_list.sort()
            
        elif command == "pop":
            my_list.pop()
            
        elif command == "reverse":
            my_list.reverse()