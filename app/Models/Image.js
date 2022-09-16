export class Image {
  constructor(data) {
    this.url = data.url;
    this.imgUrl = data.imgUrl;
    this.largeImgUrl = data.largeImgUrl;
    this.tags = data.tags;
    this.author = data.author;
    this.query = data.query;
  }

  get ImageTemplate() {
    return /*html */ `
     <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
                <div class="d-flex justify-content-center">
                  <img src="${this.imgUrl}" alt=""
                    class="img-fluid rounded mt-2 elevation-4">
                </div>
                <div class="card-body ">
                  <div class="border-bottom border-dark border-3">
                    <h5>Title</h5>
                  </div>
                  <div class="d-flex justify-content-end text-shadow mt-2">
                    <h6>PlaceHolder Text</h6>
                  </div>
                  <div>
                    <small>Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis atque
                      quaerat qui architecto!</small>
                  </div>
                </div>
              </div>
   
    `;
  }
}
