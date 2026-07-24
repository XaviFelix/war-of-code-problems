#NOTE: Source -> https://www.codewars.com/kata/6638277786032a014d3e0072/python
#NOTES:
# allocate customer hotel rooms based on arrival and departure days

# 2 customers can stay in the same room if departure day of first customer is earlier
# than the arrival day of second customer

# number of rooms used should be minimized 

#input: list of array -> 1 <= n <= 1000
# each customer has a: arrival_day and a departure_day => arrival_day <= departure_day

#output: list of size n, where each element is a room that cusotmer i was allocated in
# 1 <= k <= n where k is the room number

# example: [(1, 5), (2, 4), (6, 8), (7, 7)]
