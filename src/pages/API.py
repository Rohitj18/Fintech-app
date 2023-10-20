import json
import pandas as pd
from yahoo_fin.stock_info import get_data

# Get the Amazon weekly data
amazon_weekly = get_data("DNA", start_date="12/04/2016", end_date="12/04/2019", index_as_date=True, interval="1wk")

# Convert DataFrame to a list of dictionaries with string keys and values
DNA_weekly_list = amazon_weekly.reset_index().to_dict(orient='records')

# Convert Timestamps to strings
for item in DNA_weekly_list:
    item['index'] = str(item['index'])

# Specify the filename for the JSON file
filename = "DNA_weekly_data.json"

# Write the data to a JSON file
with open(filename, "w") as file:
    json.dump(DNA_weekly_list, file, indent=4)

print(f"Data has been saved to {filename}.")
