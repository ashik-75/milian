export async function sleep(duration: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise success");
    }, duration);
  });
}
