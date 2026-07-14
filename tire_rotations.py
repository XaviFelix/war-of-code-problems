#NOTE: Tire rotations probelm
#TODO: Re-write this in js
#TODO: add a flatmap behavior to fix line 79

# tire size: 205/55R16 (width/ aspectRatio R rimDiameter)

# 205 -> width in mm.
# 55  -> aspect ratio (sidewall height as a percentage of width) 
# 16  -> rim diameter in in.

# construction code between aspect ratio and rim: R, ZR, B, or D
# - speed capability

# given tire size string and a distance in km: return number of roatations the tire makes

# Formula: 
#         get Diameter of tire: ((width * aspect ratio) / 1270) + Rim Diameter
#         get circumference of tire: pi * diameter(in) (entire diameter not rim diam)
#         calc rotations per mile: 39370.1 / circumference

import re
from math import pi

#TODO: Now try to refactor this so that it is more readable or more efficient 
def tire_rotations(tire_size: str, distance_km: float) -> float:
    # Set-up
    tire_construction = ["R", "ZR", "B", "D"] # delimeters
    regex_pattern = '|'.join(map(re.escape, tire_construction))
    tire_data = tire_size.split("/") 
    split_further = tire_data.pop()
    tire_data.append(re.split(regex_pattern, split_further))

    # Conversion
    tire_width = float(tire_data[0])
    aspect_ratio = float(tire_data[1][0])
    rim_diameter = float(tire_data[1][1])
    side_wall_height = float(tire_width) * 0.55 # in mm

    # calculations
    diameter_of_tire = ((tire_width * aspect_ratio) / 1270) + rim_diameter
    # circumference_of_tire  = ((pi * rim_diameter) * 2) + rim_diameter # inner paren is the side_wall_height

    # print(f"side_wall_height: {side_wall_height}")
    # print("rim_diameter: ", rim_diameter)
    # print("diameter_of_tire: ", diameter_of_tire)
    # print("circumference_of_tire: ", circumference_of_tire)

    circumference_of_tire = pi * diameter_of_tire

    return (39370.1 / circumference_of_tire) * distance_km


print(f"{tire_rotations("205/55R16", 110):.4f}")  # 55410.8047
print(f"{tire_rotations("185/65ZR15", 900):.4f}") # 460947.5423
print(f"{tire_rotations("225/45B17", 0):.4f}")    # 0.0

#NOTE: tests
# print(tire_rotations("205/55R16", 110)) # 55410.8047
# tire_size = "205/55R16"
# tire_data = tire_size.split("/") 
# print(tire_data)

# tire_construction = ["R", "ZR", "B", "D"] # delimeters
# regex_pattern = '|'.join(map(re.escape, tire_construction))
# 
# split_further = tire_data.pop()
# tire_data.append(re.split(regex_pattern, split_further))
# 
# print(f"This is the original string: {tire_size}")
# print(f"This is the extracted data from the original string: {tire_data}")


#NOTE: Refactored version
def tire_rotations_v2(tire_size: str, distance_km: float) -> float:
    # Set-up
    regex_pattern = "R|ZR|B|D"
    tire_data = tire_size.split("/") # ["205", "55R16"]
    split_further = tire_data.pop() # 55R16 -> ["55", "16"]
    tire_data.append(re.split(regex_pattern, split_further)) # ["205", ["55", "16"]]

    # Conversion
    tire_width = float(tire_data[0])
    aspect_ratio = float(tire_data[1][0])
    rim_diameter = float(tire_data[1][1])

    # calculations
    diameter_of_tire = ((tire_width * aspect_ratio) / 1270) + rim_diameter
    circumference_of_tire = pi * diameter_of_tire

    return (39370.1 / circumference_of_tire) * distance_km

print(f"{tire_rotations_v2("205/55R16", 110):.4f}")  # 55410.8047
print(f"{tire_rotations_v2("185/65ZR15", 900):.4f}") # 460947.5423
print(f"{tire_rotations_v2("225/45B17", 0):.4f}")    # 0.0