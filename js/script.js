// array
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];


// milestone 1/2
for (let i = 0; i < team.length; i++) {
  const person = team[i];
  console.log(`${i+1}° member`);
  const description = document.getElementById ("members");
  description.innerHTML += (`<br>${i+1}° member <br>`);  

  for (let key in person) {
      console.log(key,"-", person[key]);
      description.innerHTML += (`${key} - ${person[key]} <br>`);  
  }
}