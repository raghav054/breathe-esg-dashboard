# SOURCES.md

# Research Summary

## 1. SAP Fuel and Procurement Data

Research:
- SAP exports commonly use CSV or flat-file formats.
- Data often contains inconsistent units and plant codes.

Chosen Format:
CSV export upload.

Sample Data:
- Fuel categories
- Diesel/Petrol usage
- Scope 1 mapping

Real Deployment Challenges:
- Unit inconsistencies
- Localization issues
- SAP authentication complexity

---

## 2. Utility Electricity Data

Research:
- Utility portals commonly provide CSV exports.

Chosen Format:
CSV upload.

Sample Data:
- Electricity consumption
- kWh units
- Billing period values

Real Deployment Challenges:
- Billing cycle mismatch
- Tariff complexity
- Missing meter metadata

---

## 3. Corporate Travel Data

Research:
- Platforms like Concur and Navan expose APIs and exports.

Chosen Format:
CSV upload.

Sample Data:
- Flights
- Hotel travel
- Ground transport

Real Deployment Challenges:
- Missing distances
- Airport code conversion
- API authentication