async function getStudio() {
  try {
    const request = await fetch("../../back/studio.json");
    const response = await request.json();
    if (response.length > 0) {
      for (let i = 0; i < response.length; i++) {
        document.querySelector(`#studio-${i}`).innerHTML = `
          <img src="../back/images/${response[i].imageUrl}" class="stretch" />
          <h3 class="text_studio">${response[i].title}</h3>
          `;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}

getStudio();
