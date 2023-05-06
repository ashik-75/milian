import { sleep } from "@/utils/sleep";
async function getComments(endpoint: string) {
  await sleep(2000);
  const res = await fetch(`https://dummyjson.com/${endpoint}`, {
    cache: "no-store",
  });

  console.log("back call");

  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
}

async function Analytics() {
  const { comments } = await getComments("comments");
  return (
    <div>
      <p>Analytics</p>

      <div>
        {comments.map((comment: any) => (
          <div key={comment.id}>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;
