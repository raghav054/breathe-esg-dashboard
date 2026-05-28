# Breathe ESG Dashboard

A full-stack ESG emissions ingestion and review dashboard built using Django REST Framework and React.js.

## Features

* Multi-source ESG data ingestion
* CSV upload workflow
* Scope 1, Scope 2, Scope 3 categorization
* Analyst review dashboard
* Approve / Reject workflow
* Audit locking support
* Charts and analytics
* Django admin panel

---

## Tech Stack

### Backend

* Django
* Django REST Framework
* SQLite

### Frontend

* React.js
* Axios
* Chart.js

---

## Deployment

### Frontend

Deployed on Vercel

### Backend

Deployed on Render

---

## Sample Data

Sample CSV files used for testing are available inside the `backend/sample_data` folder.

---

## Important Setup Step (For First-Time Use)

If the frontend dashboard shows empty data or CSV upload fails, follow these steps before uploading:

### 1. Open Django Admin Panel

Visit:

```txt
https://breathe-esg-backend-mcko.onrender.com/admin
```

### 2. Login Credentials

Use the following credentials:

```txt
Username: admin
Password: admin123
```

### 3. Create Company Record

After login:

- Open the **Companies** section
- Click **Add Company**
- Enter the following details:

```txt
Name: Tata Steel
Industry: Manufacturing
Country: India
```

- Click **Save**

### 4. Open Frontend Dashboard

Now open:

```txt
https://breathe-esg-dashboard-theta.vercel.app/
```

You can now upload CSV files successfully.

---

## Note

The free Render database may reset after inactivity or redeployment.

If the company record is missing, the backend cannot process uploaded CSV files until a company is created again.