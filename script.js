document.getElementById("fetchBtn").addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("dogContainer");
      container.innerHTML = `<img src="${data.message}" alt="Random Dog">`;
    })
    .catch(error => console.error("Error fetching dog image:", error));
});
