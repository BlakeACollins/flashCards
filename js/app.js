const cards = [
    {
      front: 'The "First Computer Programmer?',
      back: 'Ada Lovelace',
      flipped: false
    },
    {
      front: 'Invented the "Clarke Calculator?',
      back: 'Edith Clarke',
      flipped: false

    },
    {
      front: 'Explain the for-in loop?',
      back: 'The for-in loop is used to loop through the properties of an object.',
      flipped: false
    },
    {
      front: 'What is the use of blur function?',
      back: 'Blur function is used to remove the focus from the specified object.',
      flipped: false
    },
    {
      front: 'How do you declare a three dimensional array?',
      back: 'var myArray = [[[]]]',
      flipped: false
    },
    {
      front: 'Famous World War II Enigma code breaker?',
      back: 'Alan Turing',
      flipped: false
    },
    {
      front: 'Which company developed JavaScript?',
      back: 'Netscape',
      flipped: false
    },
    {
      front: 'Created satellite orbit analyzation software for NASA?',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false
    },
    {
      front: 'What is this keyword in JavaScript?',
      back: 'This keyword refers to the object from where it was called.',
      flipped: false
    },
    {
      front: 'What are the different types of errors in JavaScript?',
      back: 'Load time errors, run time errors, and logical errors',
      flipped: false
    },
    {
      front:'Who invented the computer?',
      back:'Charles Babbage',
      flipped: false
    },
    {
      front:'When was JavaScript created?',
      back:'1995',
      flipped: false
    },
    {
      front:'What does HTML stand for?',
      back:'Hyper Text Markup Language',
      flipped: false
    },
    {
      front: 'How are object properties assigned?',
      back: 'obj["class"] = 12; or obj.class = 12;',
      flipped: false
    },
    {
      front: 'What are JavaScript Data Types?',
      back:'Number, String, Boolean, Object, Undefined',
      flipped: false
    },
    {
      front:'What is the use of isNaN function?',
      back: 'isNan function returns true if the argument is not a number otherwise it is false.',
      flipped: false
    },
    {
      front: 'What are all the looping structures in JavaScript?',
      back: 'For, While, and do-while loops',
      flipped: false
    },
    {
      front: 'What are all the types of Pop up boxes available in JavaScript?',
      back:'Alert, Confirm, and Prompt',
      flipped:false
    },
    {
      front: 'What is the data type of variables in JavaScript?',
      back: 'All variables in the JavaScript are object data types.',
      flipped: false
    },
    {
      front: 'What are the two basic groups of dataypes in JavaScript?',
      back: 'Primitive and Reference types',
      flipped: false
    },
    {
      front: 'Which symbol is used for comments in Javascript?',
      back: '// for single line comments and /**/ for multi line comments',
      flipped: false
    },
    {
      front: ' Does JavaScript support automatic type conversion?',
      back: 'Yes JavaScript does support automatic type conversion',
      flipped: false
    },
    {
      front: 'What is the function of delete operator?',
      back: 'The delete keyword is used to delete the property as well as its value.',
      flipped: false
    },
    {
      front: 'What is an IIFE in JavaScript?',
      back: 'IIFE (Immediately Invoked Function Expression)',
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
