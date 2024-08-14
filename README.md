# Contact Management App

This is a Contact Management App built with React, TypeScript, TailwindCSS, Redux, React Query, and Chart.js. The app allows users to add, edit, view, and delete contacts and features a responsive design. Additionally, it includes a Dashboard page that displays historical COVID-19 data on a line chart.

## Features

- **Contact Management:**
  - Add new contacts with first name, last name, email, phone number, and status.
  - Edit existing contacts.
  - Delete contacts.
  - View a list of all contacts.

- **Responsive Design:**
  - Fully responsive layout with a sidebar for navigation.
  - Sidebar can be toggled open and closed with a hamburger menu on smaller screens.

- **Dashboard:**
  - Displays historical COVID-19 data using a responsive line chart.
  - The sidebar remains fixed while the content scrolls vertically.




## Run Locally

Clone the project

```bash
  git clone https://github.com/Atmalviya/contact-management-App
```

Go to the project directory

```bash
  cd contact-management-App
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Deployment

App is deployed on vercel, use following link to visit

```bash
  https://contact-managementapp.vercel.app/
```


## API Reference


### 1. World Wide Data of Cases

- **Endpoint:** `https://disease.sh/v3/covid-19/all`
- **Description:** Fetches the latest worldwide data for COVID-19, including total cases, deaths, and recoveries.
- **Method:** GET
- **Response Example:**
  ```json
  {
    "cases": 300000000,
    "deaths": 5000000,
    "recovered": 250000000,
    "active": 45000000,
    "updated": 1629307746353
  }
  

### 2. Country-Specific Data of Cases

- **Endpoint:** `https://disease.sh/v3/covid-19/countries`
- **Description:** Fetches the latest COVID-19 data for all countries. This can be filtered to retrieve data for a specific country by appending the country name or ISO code..
- **Method:** GET
- **Response Example for all Countries:**
  ```json
  [
  {
    "country": "USA",
    "cases": 40000000,
    "deaths": 650000,
    "recovered": 30000000,
    "active": 9300000,
    "updated": 1629307746353
  },
  ...
]

- **Response Example for a specific country:**
  ```json
  {
  "country": "USA",
  "cases": 40000000,
  "deaths": 650000,
  "recovered": 30000000,
  "active": 9300000,
  "updated": 1629307746353
  }




### 3. Graph Data for Cases with Date

- **Endpoint:** `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
- **Description:** Fetches historical COVID-19 data for worldwide cases, deaths, and recoveries. The data is organized by date.
- **Method:** GET
- **Response Example:**
  ```json
  {
  "cases": {
    "1/22/20": 555,
    "1/23/20": 654,
    ...
  },
  "deaths": {
    "1/22/20": 17,
    "1/23/20": 18,
    ...
  },
  "recovered": {
    "1/22/20": 28,
    "1/23/20": 30,
    ...
  }
}

