/** ====	State ====
 *
 */

// const
const COLUMNS = 3;
const names = [
	"David",
	"Alexis",
	"James",
	"Thomas",
	"Ruby",
	"Amellie",
	"Varyce",
	"Maurice",
	"Susan",
	"Mary",
	"Mark",
	"Opal",
];
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
const table = [["Name", "Occupation", "Starting Price"]];

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

function average_price(arr) {
	const reduced =
		arr.reduce((c, p) => {
			return c + p;
		}) / arr.length;

	return Math.round(reduced * 100) / 100;
}

function fill_table() {
	for (let i = 0; i < freelancers.length; i++) {
		table[1 + i] = [
			`${freelancers[i].name}`,
			`${freelancers[i].occupation}`,
			`$${freelancers[i].price}`,
		];
	}
}

/* Render */

function $render() {
	const $table = document.getElementById("table");
	const $average = document.getElementById("average");

	fill_table();

	const $table_body = document.createElement("tbody");
	const $table_rows = table.map((row, idx) => {
		const $row = document.createElement("tr");
		const $cols = row.map((col) => {
			const $td = document.createElement("td");
			const $p = document.createElement(0 < idx ? "p" : "h3");

			$p.innerText = col;

			$td.replaceChildren($p);
			return $td;
		});

		$row.replaceChildren(...$cols);
		return $row;
	});

	$table_body.replaceChildren(...$table_rows);
	$table.replaceChildren($table_body);

	$average.innerText = `The average starting price is $${average_price(
		freelancers.map((e) => {
			return e.price;
		})
	)}`;
}

/* Script */
setInterval($render, 1000 * (1 + 2 * random(2)));
