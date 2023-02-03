const storeitem = document.getElementById("product-list");

getData();

const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
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

async function getData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  const data = await response.json();

  storeitem.innerHTML = "";

  data.map((data) => {
    storeitem.innerHTML += `<div class="product">
    <img src=${data.url} alt=${data.title} />
    <div class="p-details">
      <h2>${data.title}</h2>
      <h3>$2${data.id}</h3>
    </div>
  </div>`;
  });
}
