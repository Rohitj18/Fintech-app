import json
from yahoo_fin.stock_info import get_day_gainers, get_day_losers
import sys
def extract_stock_info(stock_data):
    stock_info = {}
    for index, row in stock_data.iterrows():
        price = row['Price (Intraday)']
        stock_info[row['Symbol']] = {
            'Price': price,
            'Price Gain': row['Change'],
            'Price Gain (%)': (row['Change'] / (price - row['Change'])) * 100 if price - row['Change'] != 0 else 0
        }
    return stock_info

# Get top gainers and extract stock info
gainers_data = get_day_gainers()
gainers_info = extract_stock_info(gainers_data)

# Get top losers and extract stock info
losers_data = get_day_losers()
losers_info = extract_stock_info(losers_data)

# Merge gainers and losers info
merged_info = {'Top Gainers': gainers_info, 'Top Losers': losers_info}

print(json.dumps(merged_info));
sys.stdout.flush()

# # Write merged info to JSON file
# with open('top_gainers_losers.json', 'w') as file:
#     json.dump(merged_info, file, indent=4)

# print("Top gainers and losers merged and saved to a JSON file.")