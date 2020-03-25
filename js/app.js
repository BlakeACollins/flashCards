const cards = [
    {
      front: 'The "First Computer Programmer?',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator?',
      back: 'Edith Clarke',
      flipped: false,

    },
    {
      front: 'Famous World War II Enigma code breaker?',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA?',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
    {
      front:'Who invented the computer?',
      back:'Charles Babbage',
      flipped: false,
    },
    {
      front:'When was JavaScript created?',
      back:'1995',
      flipped: false,
    },
    {
      front:'What does HTML stand for?',
      back:'Hyper Text Markup Language',
      flipped: false,
    },
    {
      front: 'What are JavaScript Data Types?',
      back:'Number, String, Boolean, Object, Undefined',
      flipped: false,
    },
    {
      front:'What is the use of isNaN function?',
      back: 'isNan function returns true if the argument is not a number otherwise it is false.',
      flipped: false,
    },
    {
      front: 'What are all the looping structures in JavaScript?',
      back: 'For, While, and do-while loops',
      flipped: false,
    },
    {
      front: 'What are all the types of Pop up boxes available in JavaScript?',
      back:'Alert, Confirm, and Prompt',
      flipped:false,
    },
    {
      front: 'What is the data type of variables of in JavaScript?',
      back: 'All variables in the JavaScript are object data types.',
      flipped: false
    }
  ];


//Display an error message if form field is empty


  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFront: '',
      newBack: '',
      error: false
    },
    methods: {
      toggleCard: function(card){
        card.flipped = !card.flipped;
      },
      addNew: function(){
        if(!this.newFront || !this.newBack){
          this.error = true;
        }else{
          this.cards.push({
            front: this.newFront,
            back: this.newBack,
            flipped: false
          });
          this.newFront = '',
          this.newBack = '';
        }

      }
    }
  });
