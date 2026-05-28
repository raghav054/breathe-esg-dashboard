# DECISIONS.md

# Key Decisions

## 1. Chose CSV Upload Instead of Live SAP APIs

Reason:
CSV uploads are easier to prototype within 4 days and are commonly exported from SAP systems.

Ignored:
- Real SAP authentication
- IDoc parsing
- OData integrations

---

## 2. Utility Data via CSV Export

Reason:
Facilities teams commonly export utility data manually from portals.

Handled:
- Electricity usage
- Billing units

Ignored:
- PDF bill parsing
- Tariff calculations

---

## 3. Travel Data Simplification

Reason:
Real Concur/Navan APIs are complex.

Handled:
- Travel category
- Distance/activity units

Ignored:
- Airport code distance calculation
- Real API OAuth flow

---

## 4. Manual Review Workflow

Reason:
Human verification is important before audit locking.

Implemented:
- Approve
- Reject
- Flag

---

## 5. Used Django Admin

Reason:
Provides quick operational visibility and faster development.

Tradeoff:
Less custom UI flexibility.