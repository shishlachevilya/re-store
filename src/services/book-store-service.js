class BookStoreService {
  data = [
    {
      id: 11,
      title: 'Production-Ready Mircoservices',
      author: 'Susan J. Fowler',
      price: 100,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
      id: 12,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() > 0.95) {
          reject(new Error('Error'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}

export default BookStoreService;
