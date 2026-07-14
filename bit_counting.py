# num = 42
# bitString = f"{num:b}"
# print(bitString)




def count_bits(n):
    count = 0
    for c in "{:b}".format(n):
        if int(c) == 1:
            count += 1

    return count

def count_bits_easy(n):
    return bin(n).count("1")

def count_bits_easier(n):
    return n.bit_count()


# This doesn't work for when the argument is 0 so its a wrong solution
from functools import reduce

def count_bits_v2(n):
    return reduce(lambda x, y: x + y, list(map(int, filter(lambda x: int(x) == 1, "{:b}".format(n)))))

def count_bits_v3(n):
    filtered = list(filter(lambda x: int(x) == 1, "{:b}".format(n)))
    print(f"Filtered: {filtered}")

    converted = list(map(int, filtered))
    print(f"Converted: {converted}")

    return reduce(lambda x, y: x + y, converted)


def count_bits_v4(n):
    return reduce(lambda x, y: x + y, list(map(int, list(filter(lambda x: int(x) == 1, "{:b}".format(n))))))

print(count_bits_easy(1234))


