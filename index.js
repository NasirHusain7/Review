const reviews = [
    {
      id: 1,
      name: 'Dr Jhatka',
      job: 'Scientist',
      img: './images/dr jhatka.jpg',
      text: "Dr. Jhatka is a scientist who resides in Furfuri Nagar. He owns a laboratory where he usually creates new gadgets.His gadgets are found helpful in critical conditions.",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  const img = document.querySelector(".person-img");
  const name = document.querySelector(".name");
  const job = document.querySelector(".job");
  const info = document.querySelector(".info");

  const leftBtn = document.querySelector(".fa-chevron-left");
  const rightBtn = document.querySelector(".fa-chevron-right");
  const random = document.querySelector(".random");

  let currentItem = 0;


window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});


function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

rightBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

leftBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});


random.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});