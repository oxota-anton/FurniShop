export default class Review {
	constructor({name, company, id}) {
        this.name = name;
        this.companyName = company.name;
        this.id = id;
    }

    test() {
        console.log(this.companyName);
    }

	createReviewElement() {
		const reviewItem = document.createElement("div");
		reviewItem.classList.add("review-item");

		reviewItem.innerHTML = `
        <div class="user">
            <img src="img/review/user/user.png" alt="" class="user__img">
            <div>
                <div class="user__name">${this.name} ${this.id}</div>
                <div class="user__prof">${this.companyName}</div>
            </div>
        </div>
        <div class="text review-item__text">“They are have a perfect touch for make something so
            professional ,interest and useful for a lot of people .”</div>
        
        `;
        return reviewItem
	}
}
