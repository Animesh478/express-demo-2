const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productName = e.target.productName.value;
  const obj = {
    productName,
  };

  axios.post("http://localhost:3000" + "/products", obj).then((result) => {
    console.log(result.data.value);
  });
});
