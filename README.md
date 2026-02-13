## TaskFlow – Cloud-Based Task Management Application

## 1. Introduction
TaskFlow is a cloud-based task management web application developed using the MERN stack and deployed on AWS cloud infrastructure using Terraform.  

The system demonstrates:
- Full-stack development  
- Cloud architecture design  
- DevOps automation practices  

The application allows users to register, log in, and manage personal tasks securely through a scalable cloud architecture.

---

## 2. System Architecture Overview

<img width="3442" height="2091" alt="Untitled Diagram drawio (6)" src="https://github.com/user-attachments/assets/12c731cd-4ec4-4f00-b834-eed9e9286026" />


TaskFlow follows a three-tier cloud architecture:

### Presentation Layer
- React frontend hosted on public EC2  
- Served via Nginx  
- Accessed through CloudFront CDN  

### Application Layer
- Node.js + Express API  
- Hosted on private EC2 instances  
- Connected via internal load balancer  

### Data Layer
- MongoDB database  
- Hosted on private EC2  
- Accessible only from backend servers  

---

## 3. Technology Stack

| Layer | Technology |
|------|------------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | MongoDB |
| Authentication | JWT |
| Cloud | AWS |
| IaC | Terraform |
| Server | EC2 |
| Load Balancer | AWS ALB |
| CDN | CloudFront |
| Web Server | Nginx |

---

## 4. Backend Implementation

### 4.1 Express Server
- REST API built using Express  
- JSON parsing enabled  
- CORS and Helmet for security  
- MongoDB connected using Mongoose  

### 4.2 Authentication
JWT-based authentication implemented:
- User registration  
- Login system  
- Token verification middleware  
- Protected routes  

### 4.3 Task Management API
Authenticated users can:
- Create tasks  
- View tasks  
- Update tasks  
- Delete tasks  

Each task is linked to its owner.

---

## 5. Frontend Implementation

### Features
- User login/register  
- Dashboard  
- Create/delete tasks  
- Logout  

### Tools Used
- React Router  
- Axios API calls  
- LocalStorage for session  
- Responsive CSS UI  

---

## 6. Database Design

### Users Collection
- name  
- email  
- password (hashed)  

### Tasks Collection
- userId reference  
- title  
- description  
- deadline  
- completed  

MongoDB runs in a private subnet for security.

---

## 7. Cloud Infrastructure (AWS)

Infrastructure deployed using Terraform.

### 7.1 Networking
- Custom VPC  
- Public and private subnets  
- Internet Gateway  
- NAT Gateway  

### 7.2 Compute
- Public EC2 (frontend)  
- Private EC2 (backend)  
- MongoDB EC2  

### 7.3 Load Balancing
- Public ALB → frontend  
- Private ALB → backend  

### 7.4 CDN
CloudFront used to deliver frontend globally.

---

## 8. Deployment Flow

User → CloudFront → Public ALB → Frontend EC2  
Frontend → Private ALB → Backend EC2  
Backend → MongoDB EC2  

---

## 9. Security Implementation
- JWT authentication  
- Private subnets  
- Security groups  
- MongoDB restricted access  
- Environment variables for secrets  

---

## 10. Challenges Faced
- Connecting frontend to private backend  
- Configuring Terraform networking  
- Managing security groups  
- Load balancer routing  



The to do app 
<img width="1918" height="909" alt="image" src="https://github.com/user-attachments/assets/f68f6bdb-8a2c-4898-a11c-1031d0df5908" />
<img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/c8c8c7bd-c52b-4ab7-a649-54e8819d1168" />
<img width="1919" height="906" alt="image" src="https://github.com/user-attachments/assets/d025e93a-86ab-4f36-a2c1-68347252c657" />
<img width="1919" height="920" alt="image" src="https://github.com/user-attachments/assets/8f5ffea4-c012-4c06-982e-ba608cc225d5" />



