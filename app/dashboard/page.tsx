import { sleep } from "@/utils/sleep";
import { Suspense } from "react";

async function getUser(userId: number) {
  const res = await fetch(`https://dummyjson.com/users/${userId}`);
  if (!res.ok) {
    throw new Error("Something happen wrong!");
  } else {
    return res.json();
  }
}

async function getPost(id: number) {
  console.log("post ", id);
  await sleep(4000);
  const res = await fetch(`https://dummyjson.com/posts`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  } else {
    return res.json();
  }
}

async function getComments(id: number) {
  console.log("post ", id);
  await sleep(2000);
  const res = await fetch(`https://dummyjson.com/comments/${id}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  } else {
    return res.json();
  }
}

async function Posts({ payload }: any) {
  const res = await payload;

  return (
    <ul>
      {res.posts?.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

async function Comments({ payload }: any) {
  const res = await payload;

  return (
    <ul>
      <pre>{JSON.stringify(res, null, 2)}</pre>
    </ul>
  );
}

async function Dashboard() {
  const user = await getUser(5);
  console.log("user id: ", user.id);
  const posts = getPost(user.id);
  const comments = getComments(user.id);
  return (
    <div className="space-y-2 max-w-4xl">
      <h1>User</h1>
      <p>
        {user?.firstName} {user?.lastName}
      </p>
      <p>{user?.email}</p>

      <Suspense fallback={<div>Loading ...</div>}>
        {/* @ts-expect-error Server Component */}
        <Posts payload={posts} />
      </Suspense>

      <Suspense fallback={<div>Comments Loading ...</div>}>
        {/* @ts-expect-error Server Component */}
        <Comments payload={comments} />
      </Suspense>
    </div>
  );
}

export default Dashboard;
