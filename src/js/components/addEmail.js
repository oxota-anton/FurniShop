export default function addEmail() {
	const form = document.querySelector(".join__form"),
		  input = form.querySelector('input')

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())

		fetch("https://jsonplaceholder.typicode.com/users", {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		}).then(res => res.json()).then(data => console.log(data))
		form.reset();
	});
}
