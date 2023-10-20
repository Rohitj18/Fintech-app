
import sys
import json
import pandas as pd
from yahoo_fin.stock_info import get_data

# Get the Amazon weekly data
from datetime import date

# date object of today's date
today = date.today() 

output = json.loads(sys.argv[1])

currDay = str(today.day)

currMonth= str(today.month)
if(len(currDay)==1):
    currDay = "0"+currDay
currYear =str(today.year)
conditionYear = str(today.year - int(output["Year"]))

final_end_date = currDay+"/"+currMonth+"/"+currYear
final_start_date = currDay+"/"+currMonth+"/"+conditionYear



amazon_weekly = get_data(str(output["StockName"]), start_date=str(final_start_date), end_date=str(final_end_date), index_as_date=True, interval="1mo")

DNA_weekly_list = amazon_weekly.reset_index().to_dict(orient='records')

for item in DNA_weekly_list:
    item['index'] = str(item['index'])

print(json.dumps(DNA_weekly_list))
sys.stdout.flush()
# print(json.dump(amazon_weekly))

