app.component("review-list", {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `
    <h3>Messages :</h3>
  
    <div class=",card mb-3">
      <h5 class="card-header">
      </h5>
  
      <div class=",card-body">
        <p class=",card-text">
        </p>
      </div>
    </div>
    `,
});