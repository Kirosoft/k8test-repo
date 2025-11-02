const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.5.0'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  const hostname = require('os').hostname();
  res.json({
    message: '🎯 K8 Test Demo - V3.0! 🚀',
    hostname: hostname,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.5.0',
    deploy_status: 'Clean Automated Deployment',
    last_updated: new Date().toLocaleDateString()
  });
});

// API info endpoint
app.get('/api/info', (req, res) => {
  res.json({
    app: 'k8test-demo',
    version: '1.0.0',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    platform: process.platform
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 K8 Test Demo app listening on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`ℹ️  API info: http://localhost:${PORT}/api/info`);
});