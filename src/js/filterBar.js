const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitem = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const pname = document.getElementsByTagName("h2");

  for (let i = 0; i < pname.length; i++) {
    const match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
