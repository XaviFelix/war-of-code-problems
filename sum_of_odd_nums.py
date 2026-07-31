# given a triangle of consecutive odd numbers
# calculate the sum of the numbers in the n'th row

def row_sum_odd_numers(n):
    mult = n - 2  
    first_odd_num = ((n * mult) + 1) + n

    total = first_odd_num
    for i in range(n - 1):
        first_odd_num += 2
        total += first_odd_num

    return total


print(row_sum_odd_numers(21))
