# 🚀 Shiftly – The Next-Gen Task Manager

**Industrialize your task management. Experience modern SaaS.**

---

![TaskMaster Demo Banner](https://dummyimage.com/1200x320/3e001f/f11a7b&text=Shiftly+by+Hard+Machine+×+Aegis)

---

## ✨ Key Features

- **✅ Advanced Task Management**
  Create, edit, delete, and complete tasks with a reactive, animated interface.

- **🪄 Smart Task Transfer**
  Assign or transfer any task to another user with a full approval workflow.

- **🔔 Real-Time Notifications**
  Instantly receive notifications for transfers, shares, reminders, and comments.

- **📬 Dedicated Inbox & Quick Actions**
  Manage all incoming requests: accept/refuse transfers, review history—everything centralized.

- **💬 Live Comments & Threads**
  Comment, reply live, manage discussion threads, and enjoy an animated UX!
  Instant validation (Zod) & real-time sync.

- **🔒 Robust Authentication (JWT + Refresh Token)**
  Secure login (HttpOnly cookie), automatic token refresh, universal route protection with middleware.

- **🎨 Ultra-Modern, Customizable UI**
  Sleek design powered by TailwindCSS v4, custom themes, GSAP animations, and full responsiveness.

- **📅 Interactive DatePicker & Calendar**
  Plan your deadlines easily with an ergonomic DatePicker embedded in every form.

- **🪝 Industrial-Grade API Integration (Nuxt ↔️ NestJS)**
  All actions go through a high-performance, typed API proxy with shared Nuxt/Nest validation (interfaces & Zod).

- **🟢 SSR, Pinia & Live Data**
  High-performance state management, SSR-ready, live updates via Socket.IO across tasks, comments, and notifications.

- **🔧 Modular & Scalable Architecture**
  Designed for evolution: microservices, multi-team SaaS, clear separation of front/back, plug & play ready.

---

## 🏗️ Technical Architecture

- **Frontend**: Nuxt 3 + Pinia + TailwindCSS v4 + GSAP
- **Backend**: NestJS + TypeORM + JWT Auth (access/refresh) + Socket.IO
- **Validation**: Zod (shared between front & back)
- **Real-Time**: Universal Socket.IO (Nest ↔ Nuxt)
- **State**: Pinia (live task, notification, comment management)
- **API Proxy**: Nuxt server/api bridge → Nest API (auth & data)
- **Persistence**: PostgreSQL (via TypeORM)
- **Security**: JWT HttpOnly cookies, global middlewares, strict Zod validation

---

## 🚦 Features in Detail

### 1. 🔑 Modern Authentication

- Animated custom login form
- JWT access & refresh tokens (secure rotation)
- Route protection middleware (Nuxt + Nest)
- Static & dynamic session validation on every navigation

### 2. 📋 Task Management

- Full CRUD (create, update, delete) connected to the Nest API
- Reactive UI with filtering by status, priority, deadline
- Custom DatePicker, integrated calendar view

### 3. 🔄 Task Transfer

- UserPicker modal to select assignees
- Complete flow: request → notification → accept/refuse → history
- Dedicated "Inbox" page to manage received transfers
- Live notifications (socket) for both parties

### 4. 💬 Comment System

- Live threads and hierarchical replies
- GSAP animated appearance
- Instant validation (Zod/Yup)
- CRUD connected to API + live socket updates

### 5. 🔔 Real-Time Notifications

- Centralized in a "Notifications" or "Inbox" page
- Animated UI, search system, dynamic filtering
- UX feedback toasts on success/error

### 6. 📡 Real-Time Everywhere

- Socket.IO for all key entities: tasks, comments, notifications, transfers
- Pinia modules hydrate the store in real-time
- SSR compatible & ready to scale

---

## ⚡️ Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/HardMachinesCorporation/Shiftly.git && cd shiftly-ui

# 2. Install dependencies
pnpm install

# 3. Start the NestJS backend (API)
cd backend && pnpm start:dev

# 4. Start the Nuxt frontend (SSR + proxy)
cd ../frontend && pnpm dev

*⚠️ Don't forget to configure your PostgreSQL database and environment variables!*
```

---

## 🛠️ Libraries & Stack

- **Frontend**: `nuxt`, `pinia`, `@pinia/plugin-persistedstate`, `@vueuse/core`, `@formkit/auto-animate`, `zod`, `@tanstack/vue-query`, `vue-toastification`, `socket.io-client`, `tailwindcss`, `gsap`
- **Backend**: `@nestjs/core`, `@nestjs/typeorm`, `typeorm`, `pg`, `@nestjs/jwt`, `@nestjs/passport`, `passport-jwt`, `class-validator`, `zod`, `socket.io`, `cors`
- **Shared**: Types/interfaces via `shared/` (Zod + TypeScript)
- **Tests**: `vitest`, `@nestjs/testing`, `supertest`
- **Lint/Format**: `eslint`, `prettier`

---

## 🤝 Collaboration & Contribution

- Modular, scalable, open to PRs
- Clear structure for contributors: each module/front/back well-separated
- Lint + format + commit conventions enforced by default

---

## 🧭 Vision & Philosophy

> “**We code, we build, we industrialize.
> No barriers. No doubt. No limits.**”

Powered by the **Hard Machine × 🤖 Aegis** team.
**Infinity is our playground.**

---

## 🧠 Screenshots

| Dashboard                    | Task View               | Transfer                    | Inbox                    |
| ---------------------------- | ----------------------- | --------------------------- | ------------------------ |
| ![](./screens/dashboard.png) | ![](./screens/task.png) | ![](./screens/transfer.png) | ![](./screens/inbox.png) |

---

## 🔒 Security & Quality

- Ultra-secure JWT Auth (HttpOnly cookies)
- Automatic refresh-token rotation
- End-to-end Zod validation
- Universal middlewares (API & SSR)
- Unit and integration tests on every module

---

## 🚀 Ready to level up your productivity?

**Fork, deploy, improve, and master your workflow!**

---
