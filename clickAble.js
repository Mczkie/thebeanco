const myImgs = document.querySelectorAll(`#myImg`);
      const modal = document.querySelector(`.modal`);
      const closeModal = document.querySelector(`#closeModal`);

      closeModal.addEventListener('pointerdown', () => {
        modal.style.display = 'none';
      });

      myImgs.forEach((myImg) => {
        myImg.addEventListener(`pointerdown`, () => {
          console.log(modal.lastElementChild.children[0].textContent);
          modal.firstElementChild.src = myImg.src;
          modal.lastElementChild.children[0].textContent = myImg.alt;
          modal.style.display = `flex`;
        });
      });