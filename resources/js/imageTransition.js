class ImageTransition{
      constructor(photoSection, imgElement){
            this.photoSection = document.getElementById('photo-section')
            this.imgElement = document.getElementById('photo-foto')
      }
      

      clickEvent(){
            var xCoord
            var imgNumber = [1, 2, 3, 4]
            const changePhoto = e =>{
                  xCoord = e.clientX
                  var imgPath = "./resources/css/img/GA-"
                  var imgExt = ".jpg"
                  if (xCoord >= '765') {
                        this.imgElement.src = imgPath + imgNumber[2] + imgExt
                        console.log(imgPath + imgNumber + imgExt)
                  }else{
                        this.imgElement.src = imgPath + imgNumber[1] + imgExt
                  }
                  
            }


            this.photoSection.addEventListener("click", changePhoto)
      }

}

var imageTransition = new ImageTransition()
imageTransition.clickEvent()

