(function () {

  const prevBtn = document.getElementById('prevPhoto');
  const nextBtn = document.getElementById('nextPhoto');
  const currentPhoto = document.getElementById('currentPhoto');
  const photoList = ['breuer-building', 'guggenheim-museum', 'headquarters', 'IAC', 'new-museum'];
  let index = 0;

  currentPhoto.src = `i/${photoList[0]}.jpg`;

  function prevPhoto() {
    if (index <= 0) {
      index = photoList.length - 1;
    } else {
      index--;
    }
  }

  function nextPhoto() {
    if (index >= photoList.length - 1) {
      index = 0;
    } else {
      index++;
    }
  }

  function setCurrentPhoto() {
    currentPhoto.src = `i/${photoList[index]}.jpg`;
  }

  prevBtn.onclick = function () {
    prevPhoto()
    setCurrentPhoto();
  }

  nextBtn.onclick = function () {
    nextPhoto()
    setCurrentPhoto();
  }
})();

// class Gallery {

//     constructor(prevBtn, nextBtn, currentPhoto) {
//         this.prevBtn = prevBtn;
//         this.nextBtn = nextBtn;
//         this.currentPhoto = currentPhoto;

//         this.photoList = [];
//         this.index = 0;

//         this.prevBtn.onclick = () => {
//             this.prevPhoto();
//             this.setCurrentPhoto();
//         };

//         this.nextBtn.onclick = () => {
//             this.nextPhoto();
//             this.setCurrentPhoto();
//         };
//     }

//     addPhotos(...photos) {
//         this.photoList.push(...photos);
//     }

//     prevPhoto() {
//         if (this.index <= 0) {
//             this.index = this.photoList.length - 1;
//         } else {
//             this.index--;
//         }
//     }

//     nextPhoto() {
//         if (this.index >= this.photoList.length - 1) {
//             this.index = 0;
//         } else {
//             this.index++;
//         }
//     }

//     setCurrentPhoto() {
//         this.currentPhoto.src = this.photoList[this.index];
//     }

// }

// (function () {

//     const gallery = new Gallery(
//         document.getElementById('prevPhoto'),
//         document.getElementById('nextPhoto'),
//         document.getElementById('currentPhoto')
//     );

//     gallery.addPhotos(
//         'i/breuer-building.jpg', 'i/guggenheim-museum.jpg', 'i/headquarters.jpg', 'i/IAC.jpg', 'i/new-museum.jpg'
//     )

// })();