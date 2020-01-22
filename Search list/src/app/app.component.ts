import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  productList = [
    {
      id:1,
      name: 'Pen - Celogriper',
      price: 8,
      category: 'Education',
    },
    {
      id:2,
      name: 'Camel - Notebook',
      price: 40,
      category: 'Education',
    },
    {
      id:3,
      name: 'baby - Tall',
      price: 520,
      category: 'Toy',
    },
    {
      id:4,
      name: 'Police - car',
      price: 150,
      category: 'Toy',
    },
    {
      id:5,
      name: 'formal dress',
      price: 550,
      category: 'clouth',
    },
    {
      id:6,
      name: 'vizar',
      price: 120,
      category: 'clouth',
    },
    {
      id:7,
      name: 'leg - jince',
      price: 135,
      category: 'clouth',
    },
    {
      id:8,
      name: 'panjabi - kurti',
      price: 458,
      category: 'clouth',
    },
    {
      id:9,
      name: 'Pen - trimax',
      price: 40,
      category: 'Education',
    },
    {
      id:10,
      name: 'drawing book',
      price: 35,
      category: 'Education',
    },
    {
      id:11,
      name: 'Pencile',
      price: 10,
      category: 'Education',
    },
    {
      id:13,
      name: 'Kindle joy',
      price: 30,
      category: 'kids',
    },
    {
      id:14,
      name: 'pamper',
      price: 52,
      category: 'kids',
    },
    {
      id:15,
      name: 'jhula - palna',
      price: 1200,
      category: 'kids',
    },
    {
      id:16,
      name: 'java - book',
      price: 450,
      category: 'Programming',
    },
    {
      id:17,
      name: 'Desktop',
      price: 2500,
      category: 'Computer',
    },
    {
      id:18,
      name: 'Pen - drive',
      price: 300,
      category: 'Computer',
    },
    {
      id:19,
      name: 'flopy disk',
      price: 1000,
      category: 'Computer',
    },
    {
      id:20,
      name: 'Mouse',
      price: 250,
      category: 'Computer',
    },
    {
      id:21,
      name: 'Door',
      price: 5000,
      category: 'Home',
    },
    {
      id:22,
      name: 'Lipstic',
      price: 70,
      category: 'Beuty',
    },
    {
      id:23,
      name: 'Eye Kajal',
      price: 90,
      category: 'Beuty',
    },
    {
      id:24,
      name: 'Hair Dryer',
      price: 4500,
      category: 'Beuty',
    },
    {
      id:25,
      name: 'Rebbon',
      price: 20,
      category: 'Beuty',
    },
    {
      id:26,
      name: 'Medicines',
      price: 1234,
      category: 'Pharmasist',
    },
    {
      id:27,
      name: 'D - Cold total',
      price: 12,
      category: 'Pharmasist',
    },
    {
      id:28,
      name: 'Jacket',
      price: 7000,
      category: 'Clouth',
    },
    {
      id:29,
      name: 'Gold Ring',
      price: 10000,
      category: 'Beuty',
    },
    {
      id:30,
      name: 'Window',
      price: 2500,
      category: 'Home',
    },
    {
      id:31,
      name: 'Marbels',
      price: 1500,
      category: 'Home',
    },
    {
      id:32,
      name: 'Lights',
      price: 460,
      category: 'Home',
    },
    {
      id:33,
      name: 'Water - Pot',
      price: 210,
      category: 'Home',
    },
    {
      id:34,
      name: 'Headphones',
      price: 220,
      category: 'Mobile',
    },
    {
      id:35,
      name: 'Screen Guard - gorila',
      price: 250,
      category: 'Mobile',
    },
    {
      id:36,
      name: 'Turbo Charger',
      price: 450,
      category: 'Mobile',
    },
    {
      id:37,
      name: 'Chocolate',
      price: 10,
      category: 'Food',
    },
    {
      id:38,
      name: 'Ice-Cream',
      price: 25,
      category: 'Food',
    },
    {
      id:39,
      name: 'Wadapav',
      price: 10,
      category: 'Food',
    },
    {
      id:40,
      name: 'Fruits',
      price: 50,
      category: 'Food',
    },
    {
      id:41,
      name: 'Condome',
      price: 0,
      category: 'Sex',
    },
    
  ];

  category: string = '';
  product_name: string = '';
  count = 5;
  addStudent() {
    // this.students.push(
    //   {
    //     name: 'Arun' + this.count,
    //     age : 70,
    //     cllege: 'Solpur',
    //     location: 'Pune'
    //   }
    // );
    // this.count++;
// this.foo();
    // this.students = [
    //   {
    //     name: 'Arun',
    //     id:1,
    //     age: 23,
    //     cllege: 'Garware',
    //     location: 'Karve-Nagar'
    //   },
    //   {
    //     name: 'Arun 1',
    //     age: 23,
    //     cllege: 'Garware',
    //     location: 'Karve-Nagar'
    //   },
    //   {
    //     name: 'Arun 2',
    //     age: 23,
    //     cllege: 'Garware',
    //     location: 'Karve-Nagar'
    //   },
    //   {
    //     name: 'Arun 3',
    //     age: 30,
    //     cllege: 'Garware',
    //     location: 'Karve-Nagar'
    //   }
    // ];
  }

  trackbySRK(name:string,student:any):string {
    return student.name;
  }

  str = 'india is my country, and i am indian. india, pakistan dhishum dhishum. india ingland';
  foo() {
    let count = 0;
    let words = this.str.split(' ');
    // console.log(words);  
    words.forEach(element => {
      if(element === 'india') count++;
    });
    console.log(this.str.match(/india/g).length);
    console.log('Number of Ocurences of india is : ',count);
  }
}

