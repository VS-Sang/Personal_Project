---
paths:
  - "*.js"
  - "*.html"
---

# Data and Domain Rules

Use clear domain naming:

- Transaction
- Category
- Income
- Expense
- Balance
- Budget
- Savings Goal
- Report

Financial handling:

- Store monetary values as numbers or decimal-safe values, not formatted strings.
- Format currency only at display boundaries.
- Preserve signs consistently: income positive, expense negative or explicitly typed.
- Validate required fields before saving transactions.
- Avoid mixing UI labels with business logic.

Suggested transaction fields:

```txt
id
type: income | expense
amount
category
description
note
date
createdAt
updatedAt
```
