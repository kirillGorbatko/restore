export default class BookstoreService {

	data = [
		{
			id: 1,
			img: 'https://images.prom.ua/3359328764_eloquent-javascript-3rd.jpg',
			title: 'Eloquent JavaScript, 3rd edition',
			author: 'Marijn Haverbeke',
			price: 33,
		},
		{
			id: 2,
			img: 'https://images.prom.ua/2440373205_w640_h640_javascript-the-definitive.jpg',
			title: 'The Definitive Guide, 7th Edition',
			author: 'David Flanagan',
			price: 233,
		},
		{
			id: 3,
			img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfOAZmUHDte2MTVOvFS1CBbjQPA7Zs20wNb6WzNsVi9VsEE93U',
			title: 'Eloquent JavaScript: A Modern Introduction to Programming',
			author: 'Marijn Haverbeke',
			price: 129,
		},
	];

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > .75) {
					reject(new Error('Something bad happend'))
				} else {
					resolve(this.data);
				}
			}, 700)
		});
	}
};
