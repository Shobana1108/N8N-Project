// small entry to satisfy Render's start process.
// n8n exposes a start function on require('n8n')
const { start } = require('n8n');

start().catch(err => {
  // Print error and exit so Render shows logs
  console.error('n8n failed to start:', err);
  process.exit(1);
});
