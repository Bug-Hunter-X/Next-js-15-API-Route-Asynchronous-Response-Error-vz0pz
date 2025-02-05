```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This will cause an error in Next.js 15 because `res.end` is asynchronous and the response may be already sent.
  setTimeout(() => {
    res.status(200).json({ name: 'John Doe' });
  }, 1000);
  res.end(); // Error: Cannot set headers after they are sent.
}
```