# Shopsphere – A Modern E-commerce Platform

**Shopsphere** is a feature-rich, scalable e-commerce web application built with React and Redux Toolkit. It delivers a smooth user experience with animated UI, protected routing, and both customer and admin flows.

## Features

### Customer Experience
- Product Listing & Detail Pages
- Add to Cart (with quantity selection)
- Wishlist Toggle
- Framer Motion Animations & Toast Notifications
- Breadcrumb Navigation
- Full Checkout Flow:  
  Shipping → Order Review → Payment → Confirmation
- Protected Routes (based on authentication)

### Admin Experience
- Admin Profile Dashboard
- Inventory Management (Add, Edit, Delete Products)
- Admin-only Route Protection
- Role-based UI changes

## Tech Stack

- **Frontend:** React.js, React Router DOM
- **State Management:** Redux Toolkit with `createAsyncThunk`
- **UI/UX:** Framer Motion, Toastify
- **Auth Logic:** Role-based conditional rendering + Protected Routes
- **Version Control:** Git & GitHub

## Screenshots
> Add screenshot links here after uploading the project

## Getting Started

To run this project locally:

```bash
git clone https://github.com/sunainanelli/shopsphere.git
cd shopsphere
npm install
npm start
