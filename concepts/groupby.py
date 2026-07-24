#NOTE: Source -> https://www.pythonpool.com/pythons-itertools-groupby/

from itertools import groupby
from operator import itemgetter

# example 1
items = ["A", "A", "B", "A", "G", "G", "H", "G", "H"] 
result = [(key, list(group)) for key, group in groupby(items)]
# print(result) # A [A, A], B [B], A [A], G [G, G], H [H], G [G], H [H] 

# example 2
orders = [
    {"status": "paid", "total": 40},
    {"status": "open", "total": 25},
    {"status": "paid", "total": 15},
    {"status": "open", "total": 10},
]

def view_groupby_output(orders):
    #NOTE: must convert group as a list to see all consequitve sequences of status
    for status, group in groupby(orders, key=itemgetter("status")):
        print(f"{status}: {list(group)}")

orders.sort(key=itemgetter("status"))

summary = {
    status: sum(order["total"] for order in group) for status, group in groupby(orders, key=itemgetter("status"))
}
# print(summary)

# example 3: grouping anagrams
words = ["eat", "tea", "tan", "ate", "nat", "bat"]
words.sort(key=lambda word: "".join(sorted(word)))

anagrams = {
    key: list(group) for key, group in groupby(words, key=lambda word: "".join(sorted(word)))
}
print(anagrams)
