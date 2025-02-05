# Next.js 15 API Route Asynchronous Response Error

This repository demonstrates a common error in Next.js 15 API routes where attempting to send a response asynchronously after calling `res.end()` results in the error: `Cannot set headers after they are sent`.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the correct implementation.

## Bug

The issue stems from using `res.end()` prematurely before the asynchronous operation (using `setTimeout` in this case) completes.  Once `res.end()` is called, the response is considered sent, and any further attempts to modify headers or send data will fail. 

## Solution

The solution is to avoid calling `res.end()` until the asynchronous operation is finished and the data is ready to be sent.  This is usually achieved by handling the asynchronous operation's completion (e.g. promise resolution) before responding.