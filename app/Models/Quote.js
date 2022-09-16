export class Quote{


  constructor(data) {
this._id=data._id
this.content=data.content
this.author=data.author
this.tags=data.tags
this.authorSlug=data.authorSlug


  }

  get QuoteTemplate() {
    return /*html */ `
    
    <div class="p-4 mx-5 text-shadow  ">
            <div>
              <p>
                ${this.content}
              </p>
            </div>
            <div class="mx-5 on-hover">
              <h5>
                ${this.author}
              </h5>
            </div>
          </div>
       

   
    `;
  }
}