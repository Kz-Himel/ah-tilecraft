// app/error.js
"use client";
export default function Loading({ error, reset }) {
  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}