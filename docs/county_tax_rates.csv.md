# County tax rates.csv

## Cleaning Status
CLEANED

## Raw Data Sample

```
geo_id,state_name,geo_area_name,local_tax_rate_state_average_pct,local_tax_rate_pct
0500000US01001,Alabama,"Autauga County, Alabama",4.91,4.942
0500000US01003,Alabama,"Baldwin County, Alabama",4.91,4.674
0500000US01005,Alabama,"Barbour County, Alabama",4.91,5.045
0500000US01007,Alabama,"Bibb County, Alabama",4.91,4.89
0500000US01009,Alabama,"Blount County, Alabama",4.91,4.701
0500000US01011,Alabama,"Bullock County, Alabama",4.91,5.006
```

## Tabular Sample
geo_id | state_name | geo_area_name | local_tax_rate_state_average_pct | local_tax_rate_pct
--- | --- | --- | --- | ---
0500000US01001 | Alabama | "Autauga County, Alabama" | 4.91 | 4.942
0500000US01003 | Alabama | "Baldwin County, Alabama" | 4.91 | 4.674
0500000US01005 | Alabama | "Barbour County, Alabama" | 4.91 | 5.045
0500000US01007 | Alabama | "Bibb County, Alabama" | 4.91 | 4.89
0500000US01009 | Alabama | "Blount County, Alabama" | 4.91 | 4.701

## Impressions and Notes
### ENTIRE FILE IS REDUNDANT
USE `county_tax_rates_and_income.csv` INSTEAD

### Repeated data
`state_name` is repeated in `geo_area_name`
