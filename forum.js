/** ====	State ====
 *
 */

// const
const names = ["David", "Alexis", "James", "Thomas", "Ruby", ""];
const occupations = [
	"Writer",
	"Teacher",
	"Programmer",
	"Choreographer",
	"Artist",
	"UX Designer",
	"Litigation",
	"Finance",
	"Management",
	"Security",
	"Maintenance",
	"Insurance",
];
const starting_prices = [30, 50, 70];
const freelancers = [
	{
		name: "Alice",
		occupation: "Writer",
		price: 30,
	},
	{
		name: "Bob",
		occupation: "Teacer",
		price: 50,
	},
	{
		name: "Carol",
		occupation: "Programmer",
		price: 70,
	},
];

function new_freelancer() {
	// randomize properties
	const freelancer = {
		name: random_choice(names),
		occupation: random_choice(occupations),
		price: Math.round(random(4) * 100) * 10,
	};

	freelancers.push(freelancer);
}

function random(curve = 1) {
	return Math.pow(2 * Math.abs(Math.random - 0.5), curve);
}

function random_choice(arr) {
	const random_index = Math.floor(random() * array.length);

	return arr[random_index];
}

/* Render */

/* Script */
