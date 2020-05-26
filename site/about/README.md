# About

## Schemas as Standards

A schema is a file describing the way the data should be formatted. For example, if a column exists for dates, the schema is where it would be specified. This way, the validator can automatically check that all the cells in that column contain dates.

[Table Schemas](https://specs.frictionlessdata.io//table-schema/) are perfect for open data, which is often just tabular data such as CSV or XLSX files. They’re also really easy to write and, if enough people use them, they can become de facto standards for datasets.

Spearheaded by OpenDataFrance, the French open data community has created 8 common open data schemas as part of a so-called “Socle commun des données locales” (Common Ground of Local Data). These are now the standards to publish datasets on subjects like grants given to non-profits, decisions voted in local assemblies or stations for electric vehicles.

What we learned with Validata is that the schemas and tools we created in order to improve open data quality are only as good as their popularity. If only a few are using the schemas to publish their data, nobody else will follow these schemas and, immediately, the validator tool is not as useful anymore. The quality is not improving if the “standards” are not used. But, most importantly, a standard cannot be self-proclaimed.

## Why Table Schema Catalog?

A few months ago, Etalab has launched schema.data.gouv.fr, an official open data schema catalog specific to France. The idea was to go next-level and start a community-run schema catalog which would be both inclusive and international. First to share Table Schemas but it could also be open to other schemas such as Data Package Schemas or even others.

**For schemas to become standards, they must be easily found and usable.** They must be shared. With schemas.frictionlessdata.io we open a new chapter for Table Schemas as the place to catalog them.

Each schema page could have link tools, calling users to appropriate actions ; for example “Validate a file” with Goodtables or Validata, “Create a file” with CSV Good Generator developed by Etalab or tsfaker, or “Download a template” with table-schema-resource-template, etc.

The website for the catalog should have all the features needed such as full-text search and filtered search (by country, etc.). It should also have an API to make use of the catalog within other tools, for example, an open data portal proposing schemas when people upload a data package. This is an idea already experimented by ODI with Octopub.

Those are some ideas that need to be expanded. We have to give schemas their chance to shine!

**Situation:** Poor quality of open data   
**Question:** How to improve the quality of open data?  

1. **Problem:** Standardization of common datasets  
   **Solution:** Table Schemas  
   **Example:** A schema for the names of babies born in a city in a given year.  

2. **Problem:** Checking the quality of datasets  
   **Solution:** Goodtables  
   **Example:** Validata, an adaptation of Goodtables for French open data.  

3. **Problem:** Sharing open data standards  
   **Solution:** Schema Catalog  
   **Example:** SCDL, Schema.data.gouv.fr, Schemas.frictionlessdata.io  


