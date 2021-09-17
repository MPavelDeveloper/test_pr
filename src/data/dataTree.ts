import {Tree} from "../model/Tree";

const department: Tree = {
  sales: [{
    id: '1u',
    name: 'John',
    age: 21,
  },],

  administration: {
    topManagers: [{
      id: '2u',
      name: 'Oleg',
      age: 27,
    }, {
      id: '3u',
      name: 'Olga',
      age: 21,
    },],

    administrators: [{
      id: '4u',
      name: 'Kate',
      age: 27,
    },],
  },

  accounting:[{
    id:'5u',
    name:'Lola',
    age:27,
  }, {
    id:'5t',
    name:'Tom',
    age:27,
  },{
    id:'5y',
    name:'Ppp',
    age:27,
  }, ],

  engineers:[{
    id:'6u',
    name:'Mick',
    age:32,
  }]
}

export const dataSer = JSON.stringify(department);
