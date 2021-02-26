let images = ["batmanwb", "flashwb", "supermanwb", "wonder_womanwb"];

images.forEach((image) => {
  let imageElement = document.createElement("img");
  imageElement.setAttribute("src", `./img/${image + ".png"}`);

  imageElement.onmouseover = () => {
    imageElement.setAttribute(
      "src",
      `./img/${image.replace("wb", "") + ".png"}`
    );
  };

  imageElement.onmouseout = () => {
    imageElement.setAttribute("src", `./img/${image + ".png"}`);
  };

  imageElement.onclick = () => {
    alert(`${image.slice(0, -2).toUpperCase()}`)
  };

  document.body.appendChild(imageElement);
});
