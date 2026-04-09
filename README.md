# 🚀 DevOps Project – AWS RDS + EC2 + Node.js

## 📌 Overview

This project demonstrates a **secure cloud architecture** where a Node.js application hosted on an EC2 instance connects to a MySQL database running on AWS RDS.

The database is deployed in a **private subnet**, ensuring it is **not publicly accessible** and can only be accessed from the EC2 instance.

---

## 🏗️ Architecture

* EC2 Instance (Application Server – Public Subnet)
* RDS MySQL (Database – Private Subnet)
* Custom VPC
* Public & Private Subnets
* Security Groups (Access Control)

---

## ⚙️ Step-by-Step Implementation

### 🔹 1. Create VPC & Networking

1. Create a custom VPC
2. Create two subnets:

   * Public Subnet (for EC2)
   * Private Subnet (for RDS)
3. Attach an Internet Gateway to the VPC
4. Create a Route Table:

   * Associate with Public Subnet
   * Add route: `0.0.0.0/0 → Internet Gateway`

---

### 🔹 2. Launch EC2 Instance

1. Launch EC2 in Public Subnet

2. Configure Security Group:

   * Allow SSH (22) → Your IP
   * Allow App Port (3000) → Anywhere

3. Connect to EC2:

```bash
ssh -i <key.pem> ec2-user@<EC2-PUBLIC-IP>
```

4. Install required packages:

```bash
sudo yum update -y
sudo yum install -y nodejs npm mysql
```

---

### 🔹 3. Create RDS MySQL Instance

1. Select:

   * Engine: MySQL
   * Free Tier
2. Configure:

   * Disable Public Access ❌
   * Place inside Private Subnet
3. Set:

   * DB Name
   * Username & Password

---

### 🔹 4. Configure Security Groups

#### EC2 Security Group

* SSH (22) → Your IP
* App Port (3000) → Anywhere

#### RDS Security Group

* MySQL (3306)
* Source: **EC2 Security Group ONLY**

---

### 🔹 5. Test EC2 → RDS Connection

From EC2:

```bash
mysql -h <RDS-ENDPOINT> -u <USERNAME> -p
```

If login works → setup is correct ✅

---

### 🔹 6. Deploy Node.js Application

Clone repository:

```bash
git clone <your-repo-url>
cd node-rds-app
```

Install dependencies:

```bash
npm install
npm install express
```

Run the application:

```bash
node app.js
```

Expected output:

```
Server running on port 3000
Connected to RDS MySQL ✅
```
<img width="1523" height="701" alt="image" src="https://github.com/user-attachments/assets/04e40c4b-e778-4442-813b-458762c60110" />

---

## 🧪 Testing

Open in browser:
<img width="1349" height="508" alt="image" src="https://github.com/user-attachments/assets/f69ec784-1de7-4651-a369-c6587864d560" />

```
http://<EC2-PUBLIC-IP>:3000
```

Expected response:



```
DB Connected! Time: <timestamp>
```

---

## 🔐 Security Best Practices

* RDS is NOT publicly accessible
* Access restricted using Security Groups
* Only EC2 can connect to RDS
* No external database exposure

---

## ⚠️ Common Issues

### ❌ Connection Timeout

* Cause: RDS Security Group misconfiguration
* Fix: Allow EC2 Security Group in inbound rules

### ❌ Access Denied

* Verify DB credentials
* Check DB name and endpoint

---

## 📈 Future Improvements

* Use `.env` for storing credentials
* Dockerize the application
* Add CI/CD pipeline
* Use Terraform for infrastructure
* Add monitoring with CloudWatch

---

## 📂 Tech Stack

* AWS (EC2, RDS, VPC)
* Node.js (Express)
* MySQL
* Linux
* Git

---

## 💡 Key Learnings

* VPC and subnet design
* Secure cloud architecture
* EC2 to RDS connectivity
* Backend deployment on AWS
* Troubleshooting real-world issues

---

## 👨‍💻 Author

**Nagendra B S**
Aspiring DevOps Engineer
