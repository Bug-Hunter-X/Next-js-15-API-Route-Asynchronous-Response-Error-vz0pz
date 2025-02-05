```javascript
// pages/api/hello.js
export default async function handler(req, res) {
  // Correct approach: await the asynchronous operation before sending the response
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  res.status(200).json({ name: 'John Doe' });
}
```