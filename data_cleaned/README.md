# Cleaned Time Keep Data

## What these files are

The files in this directory are the cleaned versions of the provided data files for the Time Keep project.

## How the data was cleaned

### Sanitization

The data files were inspected and cleaned using a combination of Excel and direct text editing with VS Code.

Some files had extra header rows, which were removed.

Some of the Excel files (.xlsx) had extraneous visual formatting, links, annotations -- all removed, and just the raw data was kept.

### Format normalization

After the data files were cleaned, the next challenge was unifying their format.

XLSX were exported to CSV using Excel.

One filetype posed a particular challenge -- XML -- but that was solved by converting to JSON using a python script found online (see xmltojson.py).

Once files were either CSV or JSON, they were imported to **Azure Data Explorer** (ADX) for quick querying with KQL and potential programmatic access.

Some files were imported twice, the first time as their original representations (all columns as strings), then a second time with some text columns cast as integer columns (to remove leading zeroes).

The bonus of using ADX's drag-and-drop file importer was that once the data was in ADX, it could be exported as a clean CSV.

Finally, all data was exported from ADX in CSV format.

## File mapping

original filename | cleaned filename | notes
--- | --- | ---
County tax rates.csv | county_tax_rates.csv | deprecated by county_tax_rates_and_income.csv as this file is a duplicate subset of that file
Exports By State 2012.xlsx | exports_by_state_2012.csv
Exports By State 2012.xlsx | exports_by_state_2012_int.csv | integer-formatted version: removes leading zeroes on some numbers, mapping of values from original to int: X = 0, S = -1, Z = -2
Median_Income_County.json | median_income_county.csv
Median_Income_County.json | median_income_county_int.csv | integer-formatted version: removes leading zeroes on some numbers
Population By Geography.csv | population_by_geography.csv
Population_By_County_State_County_Tax.csv | county_tax_rates_and_income.csv
State Tax Rates.xslx | state_tax_rates.csv
US_St_Cn_Table_Workforce_Wages.xml | state_county_wage_data.csv
Unemployment_By_County.xlsx | unemployment_by_county.csv
Unemployment_By_County.xlsx | unemployment_by_county_int.csv | integer-formatted version: removes leading zeroes on some numbers
usa_county_list.csv | usa_county_list.csv | changed column titles

## Where the data is currently hosted

Currently, all cleaned data is hosted in ADX at https://dataexplorer.azure.com/clusters/vmwareinterview.westus2/databases/timekeep .

Programmatic access is technically possible via the ADX SDKs (a.k.a. Kusto SDKs), with documentation on Microsoft's documentation website.

## How to get access to the hosted data

Contact Mahdi directly to (try to) set up programmatic access to the data.

NOTE: This has NOT been performed yet (uncharted territory!), so it is NOT likely that programmatic access will work. It may be better to import the cleaned data files into your data store of choice (e.g. SQL).
