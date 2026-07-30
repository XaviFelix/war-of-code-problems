# if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)
# An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-25)
# The function accepts an integer and returns an integer.

# plan
# i could convert to string, split, scan string array,
# covert back to int, calculate, then convert back to string and join

# or i could use math by extracting either the front or the back of the integer
# and updating a result variable which will hold the final result

import math

# attmept 1: front-to-back digit extraction
def square_digits(num):
    result = 0
    while num > 0:
        count = int(math.log10(num))
        divisor = 10 ** count
        first_number = num // divisor

        calculation = first_number ** 2
        result = appendNums(result, calculation)

        num = num % divisor

    return result

def appendNums(a, b):
    # protecting against log10(0)
    if b == 0:
        return a * 10

    digits_b = int(math.log10(b)) + 1

    return a * (10 ** digits_b) + b


# attempt 2: back-to-front, integer math, no log10
def square_digits_backward(num):
    result = 0
    place = 1
    while num > 0:
        squared = (num % 10) ** 2
        result += squared * place
        place *= 100 if (squared >= 10) else 10
        num //= 10
    return result


print(square_digits(12345))
print(square_digits_backward(12345))
