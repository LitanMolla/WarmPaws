# 🐾 WarmPaws – Pet Care in Winter

**WarmPaws** is a React-based web application designed to help users take care of their pets during the winter season.  
It provides useful services, care tips, and professional advice to keep pets healthy and warm throughout the cold months.

---

## 🌐 Live Demo  
🔗 [Visit WarmPaws Live Site](https://warm-paws.vercel.app/)

---

## 🎯 Project Purpose
The purpose of **WarmPaws** is to provide pet owners with winter care guidance, including food, warmth, vaccination, and overall health tips.  
Users can create an account, log in, view their profiles, and explore pet care services — all in one platform.

---

## 🚀 Key Features

✅ **User Authentication (Firebase):**  
Users can register and log in using Firebase Authentication.

✅ **Private Route Protection:**  
`Profile` and `Service Details` pages are protected and accessible only to logged-in users.  
If not logged in, users are automatically redirected to the **Login Page**.

✅ **Responsive Design:**  
Optimized for all devices — mobile, tablet, and desktop.

✅ **Smooth Animations with AOS:**  
Beautiful scroll animations using the AOS (Animate On Scroll) library.

✅ **Modern UI Slider with Swiper:**  
Interactive and responsive sliders for showcasing services or banners.

✅ **Toast Notifications:**  
Implemented with `react-hot-toast` for smooth and friendly user alerts.

---

## 🧩 NPM Packages Used

| Package | Description |
|----------|--------------|
| **firebase** | Handles user authentication |
| **react-hot-toast** | For user notifications |
| **swiper** | For modern and smooth sliders |
| **aos** | For scroll-based animations |

---

## 🛠️ Technologies Used

- **React.js (Vite)**
- **React Router DOM**
- **Tailwind CSS**
- **Firebase Authentication**
- **AOS Animation**
- **Swiper.js**
- **React Hot Toast**

---

## 📸 Project Pages Overview

- **Home Page** – Winter pet care services and tips.  
- **Services Page** – List of pet care services.  
- **Service Details Page** – Individual service info (Private Route).  
- **Profile Page** – Logged-in user profile (Private Route).  
- **Login / Register Page** – Firebase-based authentication system.

---

## 🔐 Private Route Logic

If a user tries to access `Profile` or `Service Details` without logging in,  
they are automatically redirected to the **Login Page**.  
After successful login, they are redirected back to their requested page.


