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
		{
			id: 4,
			img: 'https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			title: 'Beautiful title',
			author: 'Beautiful author',
			price: 19,
		},
		{
			id: 5,
			img: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
			title: 'Beautiful man',
			author: 'Beautiful author',
			price: 49,
		},
		{
			id: 6,
			img: 'https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			title: 'Beautiful view',
			author: 'Beautiful author',
			price: 999,
		},
		{
			id: 7,
			img: 'https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			title: 'Beautiful waterfall',
			author: 'Beautiful author',
			price: 56,
		},
		{
			id: 8,
			img: 'https://images.pexels.com/photos/794494/pexels-photo-794494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			title: 'Beautiful flowers',
			author: 'Beautiful author',
			price: 51,
		},
		{
			id: 9,
			img: 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			title: 'Beautiful lake',
			author: 'Beautiful author',
			price: 60,
		},
	];

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 1) {
					reject(new Error('Something bad happend'))
				} else {
					resolve(this.data);
				}
			}, 700)
		});
	}
};
