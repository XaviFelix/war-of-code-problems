# in DNA symbols "A" and "T" are complements of each other
# "C" and "G" as well

# function takes in as an arg one side of the DNA string
# returns the other complelmentary side

# DNA strand is never empty or there is no DNA at all

# example: "ATTGC" -> "TAACG"


chems = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G"
}

def DNA_strand(dna):
    strBldr = []
    for ch in dna:
        if ch in chems:
            strBldr.append(chems[ch])

    return "".join(strBldr)


print(DNA_strand("ATTGC"))
