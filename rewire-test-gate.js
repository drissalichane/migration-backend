const fs = require('fs');
const file = 'NET8 Migration Pipeline v5.0 (Part 2 - Execute) (Updated).json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

if (data.connections['Test Gate']) {
  data.connections['Test Gate'].main[1] = [
    {
      "node": "Reporter Agent",
      "type": "main",
      "index": 0
    }
  ];
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Rewired Test Gate to always go to Reporter Agent');
}
