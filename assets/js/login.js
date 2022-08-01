const button = document.getElementById("post-btn");

button.addEventListener("click", async () => {
  try {
    const response = await fetch("yourUrl", {
      method: "post",
      body: { name, password },
    });
    console.log("Completed!", response);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
});
