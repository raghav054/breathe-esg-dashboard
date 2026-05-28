# MODEL.md

## Overview

The application is designed as a multi-source ESG emissions ingestion and review system.

The system supports:
- Scope 1 emissions
- Scope 2 emissions
- Scope 3 emissions
- Multi-source ingestion
- Audit review workflow
- Analyst approval and rejection

---

# Core Models

## Company

Represents a client organization.

Fields:
- id
- name
- industry
- country

Purpose:
Supports multi-tenancy by separating records company-wise.

---

## DataSource

Tracks where the data came from.

Fields:
- company
- source_type
- uploaded_file
- uploaded_at

Supported Sources:
- SAP
- Utility
- Travel Platform

Purpose:
Maintains source-of-truth tracking.

---

## EmissionRecord

Stores normalized emissions/activity data.

Fields:
- company
- category
- scope
- activity_value
- unit
- status
- is_flagged
- locked_for_audit
- created_at

Purpose:
Central normalized ESG dataset.

---

## ReviewLog

Tracks analyst review actions.

Fields:
- emission_record
- action
- reviewer
- reviewed_at

Purpose:
Maintains audit trail.

---

# Normalization Strategy

Different source formats are normalized into:
- Common units
- Common scopes
- Common status workflow

Examples:
- Fuel → Scope 1
- Electricity → Scope 2
- Travel → Scope 3

---

# Audit Workflow

Rows can be:
- Pending
- Approved
- Rejected
- Flagged

Approved rows can be locked for audit.