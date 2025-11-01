# K8 Test Demo App

A simple Node.js demo application for Kubernetes testing.

## Features

- 🚀 Simple Express.js web server
- 📊 Health check endpoint at `/health`
- ℹ️ API info endpoint at `/api/info`
- 🐳 Docker containerized
- ☸️ Kubernetes ready with Helm charts

## Endpoints

- `GET /` - Welcome message with hostname and timestamp
- `GET /health` - Health check (returns 200 with status info)
- `GET /api/info` - Application and system information

## Local Development

```bash
npm install
npm start
```

App will be available at http://localhost:3000

## Docker

```bash
docker build -t k8test-demo .
docker run -p 3000:3000 k8test-demo
```

## Kubernetes Deployment

This app is designed to work with the included Helm charts and ArgoCD GitOps setup.