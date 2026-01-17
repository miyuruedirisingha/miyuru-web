# Miyuru Restaurant Website

A beautiful restaurant website with automated CI/CD deployment to AWS EC2.

## Features
- Responsive design
- Menu display
- Gallery
- Reservation system
- Contact information

## Deployment
This project uses GitHub Actions for automated CI/CD deployment to AWS EC2.

### Prerequisites
- AWS EC2 instance
- Docker installed on EC2
- GitHub repository
- Docker Hub account (optional but recommended)

### Deployment Process
Every push to the `main` branch automatically:
1. Builds Docker image
2. Pushes to Docker Hub (optional)
3. Deploys to EC2 server
4. Restarts the application

## Local Development

### Using Docker
```bash
# Build image
docker build -t miyuru-restaurant-web .

# Run container
docker run -d -p 80:80 miyuru-restaurant-web
```

### Without Docker
Simply open `index.html` in your browser or use a local web server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

## Technologies
- HTML5
- CSS3
- JavaScript
- Docker
- Nginx
- GitHub Actions
- AWS EC2
