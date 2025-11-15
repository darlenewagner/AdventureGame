async function main() {
  console.log("Before sleep");
  await sleep(1500); // Sleep for 1.5 seconds
  console.log("After sleep [After 1.5 Seconds]");
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

main();