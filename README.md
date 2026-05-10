# 💊 Smart Medicine Finder

A DevOps-based web application that helps users find medicines at nearby pharmacies using location-based search.

## 🚀 Live Demo
http://16.171.117.185

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Map:** Leaflet.js + OpenStreetMap
- **Containerization:** Docker
- **CI/CD:** GitHub Actions
- **Registry:** Docker Hub
- **Deployment:** AWS EC2 (with Elastic IP)

## 🏗️ Architecture
Code Push → GitHub → GitHub Actions → Docker Build → Docker Hub → Auto Deploy → AWS EC2 → Live App

## ✨ Features
- Search medicines by name
- Search suggestions (autocomplete)
- Filter by distance (2km, 5km, 10km)
- Sort by price or distance
- Results count display
- In Stock / Out of Stock badges
- Interactive map showing pharmacy locations
- Real-time search results with cards
- Loading animation
- Responsive design
- Auto-deployment on every code push

## 📦 Docker
Run the app using Docker:
    docker pull aishwaryahammigi/med-app
    docker run -d -p 80:80 aishwaryahammigi/med-app

## 🔄 CI/CD Pipeline
On every push to main branch:
1. GitHub Actions triggers automatically
2. Docker image is built
3. Image is pushed to Docker Hub
4. App is automatically deployed to AWS EC2
5. No manual steps required

## 🖥️ Local Setup
    git clone https://github.com/Aishwaryahammigi/med-app.git
    cd med-app
Open index.html in browser or use Live Server in VS Code.

## 📸 Project Structure
    med-app/
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── Dockerfile
    ├── .dockerignore
    └── .github/
        └── workflows/
            └── docker.yml

## 🔐 GitHub Secrets Used
- DOCKER_USERNAME
- DOCKER_PASSWORD
- EC2_HOST
- EC2_USER
- EC2_KEY

## 👩‍💻 Author
Aishwarya Hammigi | DevOps Minor Project 2026