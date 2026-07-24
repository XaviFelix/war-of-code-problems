# take an arg as a sequence
# retuns a list of elemetns without any elements with the same value next to each other
# but maintian the order of the sequence

# example:
# ABBCcAD -> ['A', 'B', 'C', 'c', 'A', 'D']
# using reduce?

# takes in a str or a list of ints


# First attempt
def unique_in_order(sequence):
    result = []
    for i, char in enumerate(sequence):
        if (i + 1) < len(sequence) and char == sequence[i + 1]:
            continue
        else:
            result.append(char)


    return result

print(unique_in_order("AAAABBBCCDAABBB"))

# second attempt using groupby
from itertools import groupby

def unique(sequence):
    return [char for (char, _) in groupby(sequence)]

def unique_with_group(sequence):
    return [(char, list(group)) for char, group in groupby(sequence)]

print(unique("AAAABBBCCDAABBB"))
print(unique_with_group("AAAABBBCCDAABBB"))
