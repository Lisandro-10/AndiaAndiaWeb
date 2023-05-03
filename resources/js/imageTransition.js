class ImageTransition{
      constructor(photoSection, imgElement, projectNumberPhotos, index){
            this.photoSection = document.getElementById('photo-section')
            this.imgElement = document.getElementById('photo-foto')
            this.projectNumberPhotos = {
                  obraGA: [1,2,3,4]
            }
            this.index = 1
      }

      clickEvent(){
            var xCoord
            const changePhoto = e =>{
                  xCoord = e.clientX
                  var imgPath = "./resources/css/img/GA-"
                  var imgExt = ".jpg"
                  console.log(this.projectNumberPhotos.obraGA[this.i])
                  if (this.i <= 0 || this.i > this.projectNumberPhotos.obraGA.length) {
                        
                  }else{
                        if (xCoord >= '765') {
                              this.i++
                              this.imgElement.src = imgPath + this.projectNumberPhotos.obraGA[this.i] + imgExt
                              console.log(imgPath + this.projectNumberPhotos.obraGA[this.i] + imgExt)
                        }else{
                              this.i--
                              this.imgElement.src = imgPath + this.projectNumberPhotos.obraGA[this.i] + imgExt
                  }
                  }
            }

            this.photoSection.addEventListener("click", changePhoto)
      }

}

var imageTransition = new ImageTransition()
imageTransition.clickEvent()
