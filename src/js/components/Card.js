class Card {
	constructor({ title, id }) {
		this.title = title.slice(0, 18) + "...";
		this.id = id;
	}

	render() {
		const card = document.createElement("div");
		card.classList.add("card");

		card.innerHTML = `
                        <div class="card__inner">
                            <img src="img/card/card__img5.png" alt="" class="card__img">
                            <button class="card__add">
                                <img src="img/card/plus.svg" alt="">
                            </button>
                        </div>
                        <div class="card__title">${this.title} ${this.id}</div>
                        <div class="card__price">
                            <div class="card__new-price">$75.00</div>
                            <div class="card__old-price">$82.00</div>
                        </div>
        
        `;

		return card;
	}
}

export default Card;
