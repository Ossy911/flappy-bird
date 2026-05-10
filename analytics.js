// Vercel Web Analytics initialization
// Initialize the queue for analytics
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };

// Load the analytics script
(function() {
  const script = document.createElement('script');
  script.src = '/_vercel/insights/script.js';
  script.defer = true;
  script.dataset.sdkn = '@vercel/analytics';
  script.dataset.sdkv = '2.0.1';
  script.onerror = function() {
    console.log('[Vercel Web Analytics] Failed to load script. Be sure to enable Web Analytics for your project and deploy. See https://vercel.com/docs/analytics/quickstart for more information.');
  };
  document.head.appendChild(script);
})();
