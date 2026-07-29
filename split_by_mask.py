# identifiers are made up of several parts
# given a string and a mask
#   - split the string into its parts accordingly


# examples: string: '1234567890' mask: [3, 3, 4] output: ['123', '456', '7890']

import numpy as np

isbn = "codewars"
masks = [4, -1, 4, 0, 0, 0]

def mask_split_numpy(isbn, masks):
    if sum(masks) != len(isbn): return None

    trimmed_masks = np.trim_zeros(masks, 'b')
    curr_char = 0
    result = []
    for mask in trimmed_masks:
        i = 0
        strbldr = ""
        while i < mask:
            strbldr += isbn[curr_char]
            curr_char += 1
            i += 1
        result.append(strbldr)

    return result

def mask_split(isbn, masks):
    if sum(masks) != len(isbn): return None

    trimmed_masks = list(masks)
    while trimmed_masks and trimmed_masks[-1] == 0:
        trimmed_masks.pop()

    curr_char = 0
    result = []
    for mask in trimmed_masks:
        result.append(isbn[curr_char:curr_char + mask])
        curr_char += mask

if __name__ == "__main__":
    print(mask_split(isbn, masks))
    print(mask_split_numpy(isbn, masks))
