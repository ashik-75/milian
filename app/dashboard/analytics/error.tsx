"use client"; // error component must be client component

function error({ error, reset }: { error: Error; reset: () => void }) {
  console.log(error.message);
  return (
    <div>
      <h1>{error.message}</h1>
      <pre>{JSON.stringify(error, null, 2)}</pre>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default error;
