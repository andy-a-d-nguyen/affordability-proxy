const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service1, service2, service3, service4,
} = require('../config/services.js');

const router = Router();

// router.use('/service1.js', createProxyMiddleware({
//   target: service1.url,
//   pathRewrite: {
//     '^.*': service1.bundle,
//   },
//   changeOrigin: true,
// }));

router.use('/service2.js', createProxyMiddleware({
  target: service2.url,
  pathRewrite: {
    '^.*': service2.bundle,
  },
  changeOrigin: true,
}));

// router.use('/service3.js', createProxyMiddleware({
//   target: service3.url,
//   pathRewrite: {
//     '^.*': service3.bundle,
//   },
//   changeOrigin: true,
// }));

router.use('/service4.js', createProxyMiddleware({
  target: service4.url,
  pathRewrite: {
    '^.*': service4.bundle,
  },
  changeOrigin: true,
}));

module.exports = router;
