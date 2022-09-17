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
           
            <figure class="text-center mb-0">
              <blockquote class="blockquote">
                <p class="pb-3">
                  <i class="mdi mdi-format-quote-open text-light"></i>
                  <span class="lead font-italic fw-bold">${this.content}.</span>
                  <i class="mdi mdi-format-quote-close text-light"></i>
                </p>
              </blockquote>
              <figcaption class=" mb-0 on-hover fs-2 rollin">
               <i class=" mdi mdi-minus"></i> ${this.author}
              </figcaption>
            </figure>
       
          </div>
       

   
    `;
  }
}