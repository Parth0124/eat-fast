# Eat Fast - Food Ordering Website

## Overview

Eat Fast is a fully responsive food ordering web application built using the MERN stack. It consists of two main portals: the client portal and the admin panel. The client portal allows users to explore the menu, manage their cart, place orders, and track them in real-time. The admin panel is designed for managing food items and processing orders.

## Live Demo

- **Client Portal**: [Eat Fast Client](https://eat-fast-hazel.vercel.app/)
- **Admin Panel**: [Eat Fast Admin](https://eat-fast-fdqq.vercel.app/)

## Features

### Client Portal

- **User Authentication**: Sign up or log in to access your account.
- **Explore Menu**: Browse through the menu and dishes available for order.
- **Cart Management**: Add or remove items from your cart.
- **Order Placement**: Place orders and make demo payments through a dummy Stripe payment gateway.
- **Real-Time Order Tracking**: Track the status of your order as it moves from food processing to out for delivery and finally to delivered.

### Admin Panel

- **Food Item Management**: Add new food items and view the list of all available dishes.
- **Order Management**: View and update the state of client orders. Orders dynamically appear in the admin panel as clients place them.

## Technology Stack

- **Frontend**: React, Redux, CSS, AXIOS, VITE
- **Backend**: Node.js, Express, 
- **Database**: MongoDB
- **Deployment**: Vercel (both client and admin portals), Render(for the backend)
