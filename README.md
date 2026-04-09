# 🚀 AWS RDS + EC2 + Node.js (Private Database Setup)

## 📌 Overview

This project demonstrates how to securely deploy a Node.js application on AWS EC2 and connect it to a MySQL RDS instance that is **not publicly accessible**.

👉 The database can only be accessed from the EC2 instance using private networking and security groups.

---

## 📂 Project Structure

```
node_modules/
app.js
package.json
package-lock.json
README.md
```

---

## 🏗️ Architecture

* EC2 (Public Subnet) → Runs Node.js App
* RDS MySQL (Private Subnet) → Database
* VPC → Network isolation
* Security Groups → Controlled access

---

# ⚙️ Step-by-Step Setup Guide

## 1️⃣ Create VPC

* Go to AWS → VPC
* Create a custom VPC
* Create:

  * Public Subnet (for EC2)
  * Private Subnet (for RDS)

---

## 2️⃣ Launch EC2 Instance

* Launch EC2 in **Public Subnet**
* Enable SSH (port 22)
* Allow port 3000 (for app)

---

## 3️⃣ Create RDS MySQL Instance

* Engine: MySQL
* Enable Free Tier
* Disable **Public Access ❌**
* Select **Private Subnet**
* Configure DB username & password

---

## 4️⃣ Configure Security Groups

### EC2 Security Group

* Allow:

  * SSH (22)
  * App Port (3000)

### RDS Security Group

* Allow:

  * MySQL (3306)
  * Source: **EC2 Security Group ONLY**

👉 This ensures no external access to DB

---

## 5️⃣ Connect EC2 to RDS

### SSH into EC2

```bash
ssh ubuntu@<EC2-PUBLIC-IP>
```

### Install MySQL Client

```bash
sudo apt update
sudo apt install mysql-client -y
```

### Connect to RDS

```bash
mysql -h <RDS-ENDPOINT> -u <USERNAME> -p
```

---

## 6️⃣ Setup Node.js Application

### Install dependencies

```bash
npm install
```

### Run application

```bash
node app.js
```

---

## 7️⃣ Access Application

Open in browser:

```
http://<EC2-PUBLIC-IP>:3000
```

---

## 🔐 Security Highlights

* RDS is NOT publicly accessible
* Only EC2 can access database
* Uses Security Groups for restriction

---

## ⚠️ Common Issues & Fixes

### ❌ Connection timeout

* Check RDS security group allows EC2

### ❌ Access denied

* Verify DB username/password

### ❌ App not loading

* Check EC2 port 3000 is open

---

## 🚀 Key Learnings

* Private database setup in AWS
* EC2 → RDS secure communication
* Node.js integration with MySQL
* Networking using VPC & Security Groups

---

## 📈 Future Improvements

* Use environment variables
* Add Docker support
* Implement CI/CD pipeline

---

## 👨‍💻 Author

Nagendra B S
