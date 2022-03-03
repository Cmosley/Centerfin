# pip install requests==2.22.0 beautifulsoup4==4.8.1
# pip install pymysql


# imports for scraping
import requests
import re
from bs4 import BeautifulSoup
import pandas as pd

# connection to mysql
from sqlalchemy import create_engine
import pymysql

# base_url = process.env.BASE_URL

url = '{base_url}ARKG/'
html_text = requests.get(url).text
# html_text = html_text.replace('\xa0', '')
soup = BeautifulSoup(html_text, 'html.parser')
#soup.prettify(formatter=lambda s: s.replace(u'\xa0', ' '))

def Convert(list):
    res_dct = {list[i]: list[i + 1] for i in range(0, len(list), 2)}
    return res_dct

#Vitals
strings = [text for text in soup.stripped_strings]
start = strings.index("Vitals")

vital_values = Convert(strings[start+1:start+15])
print(start, vital_values)

#ETF database themes
#[text for text in soup.stripped_strings][195:210]
strings = [text for text in soup.stripped_strings]
start = strings.index("ETF Database Themes")
#extract values
theme_values = Convert(strings[start+1:start+17])
print(theme_values)

# Trading Data & Historical Trading Data sections
strings = [text for text in soup.stripped_strings]
start = strings.index("Trading Data")
#extract values
trading_values = strings[start+13:start+26]
trading_values.remove('Historical Trading Data')
trading_values = Convert(trading_values)
print(trading_values)

# Master Dict of all sections

# make dataframes of category dicts
vital_data = pd.DataFrame.from_dict(vital_values, orient='index')
etf_database_data = pd.DataFrame.from_dict(theme_values, orient='index')
trading_data = pd.DataFrame.from_dict(trading_values, orient='index')

# combine dataframes
etf_data = pd.concat([vital_data, etf_database_data, trading_data,])

df = etf_data.rename(columns={0:'values'})


#database credentials 
# hostname=
# dbname='ETF_Test'
# user='admin'
# password=

engine = create_engine("mysql+pymysql://{user}:{pw}@{host}/{db}".format(host=hostname, db=dbname, user=user, pw=password))

df.to_sql('ONE_ETF', engine, index=False)