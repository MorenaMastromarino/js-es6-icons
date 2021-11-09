const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.querySelector('.main-content');
const select = document.getElementById('type');

//array di oggetti in base al type
const iconeAnimal = icone.filter((icona) =>	icona.type === 'animal');
const iconeVegetable = icone.filter((icona) =>	icona.type === 'vegetable');
const iconeUser = icone.filter((icona) =>	icona.type === 'user');


// stampo carte all'inizio e poi in base al valore selezionato
printCards(icone);

select.addEventListener('change', function(event){

	if(event.target.value === 'animal'){
		printCards(iconeAnimal);
	}else if(event.target.value === 'vegetable'){
		printCards(iconeVegetable);
	}else if(event.target.value === 'user'){
		printCards(iconeUser);
	}else{
		printCards(icone);
	};
	
});



// funzione che stampa tutte le card di un array dato
function printCards (array){
	container.innerHTML='';

	for(let object of array){		
		container.append(printSingleCrad(object));
	};

};
	

// funzione che stampa singola card
function printSingleCrad(singleCard) {
	const card = document.createElement('div');
	card.className = 'mm-card';

	const {name, prefix, family, color} = singleCard;

	card.innerHTML = 
	`
		<div class="card-icon ${color}">
			<i class="${family} ${prefix}${name}"></i>
		</div>
		<span class="card-name">${name}</span>
	`;
	
	return card;
};