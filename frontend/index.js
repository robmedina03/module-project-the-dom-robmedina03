

 
function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
      
  const widgets = document.querySelectorAll("section>div")
    widgets.forEach((widget, index ) => {
      widget.classList.add('widget')
      widget.setAttribute('tabindex', index + 1)
    })


  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here

  const randomindex = Math.floor(Math.random() * quotes.length)
   const quotesrandom = quotes[randomindex]

  const quote = document.createElement('div')
    const quoteText = quotesrandom.quote
     quote.textContent = quoteText
      const widget1 = document.querySelector(".quoteoftheday")
         widget1.appendChild(quote)
// author 

const authorname = document.createElement('div')
    const { author , date} = quotesrandom
        authorname.textContent = `${author} in ${date || " unkown date"}`
         widget1.appendChild(authorname)








  

  

  
    



  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here

  const randomadverbs1 = adverbs[ Math.floor(Math.random() * adverbs.length)]
  const randomadverbs2 = adverbs[ Math.floor(Math.random() * adverbs.length)]
  const randomnouns1 = nouns[ Math.floor(Math.random() * nouns.length)]
  const randomnouns2 = nouns[ Math.floor(Math.random() * nouns.length)]
     const randomverbs1 = verbs[ Math.floor(Math.random() * verbs.length)]
    const randomverbs2 = verbs[ Math.floor(Math.random() * verbs.length)]
     
    
    const corpsentence = ` we need ${randomverbs1} our ${randomnouns1} ${randomadverbs1} in order to ${randomverbs2} our ${randomnouns2} ${randomadverbs2}.`
    const paragraph = document.createElement('p')
    paragraph.textContent = corpsentence
    document.querySelector(".corporatespeak").appendChild(paragraph)
       

  

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
    const countwidget= document.querySelector('.countdown')
    let count = 5

    const countdown1 = document.createElement('p')
    countdown1.textContent = `T-Minus ${count}...`
    countwidget.appendChild(countdown1)

    const intervalcount = setInterval(function () {

      if(count > 1){
        count--;
        countdown1.textContent = `T-Minus ${count}...`;

      }else if ( count === 1){
        count--;
        countdown1.textContent = `T-Minus 1...`;
        
      }else{
        countdown1.textContent = `LiftOff!🚀 `;
      }
    }, 1000);
  }
    




    
      


    


  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  const person = people[ Math.floor(Math.random() * people.length)];
    const friendsparagraph = document.createElement('p')
    const containsfriends = document.querySelector('.friends')
    containsfriends.appendChild(friendsparagraph);
    const year = person.dateOfBirth.split('-')[0]

    let sentence = `${person.fname} ${person.lname} was born in ${year} and `


  if( !person.friends.length){
    sentence += 'has no friends';
  }else {
  sentence += 'is friends with others';

  
  for ( let index = 0 ; index < person.friends.length; index++){
    let friendsid = person.friends[index]
    const friend = people.find(p => p.id === friendsid)
    const fullname = `${friend.fname} ${friend.lname}`
    let islastindex = index === person.friends.length-1
    let is2nd2last = index === person.friends.length-2

      if(islastindex){
        sentence += `${fullname}.`
      } else if (is2nd2last){
        sentence += `${fullname} and `

      } else {
        sentence += `${fullname}, `


      }
    

    

  }

}

friendsparagraph.textContent = sentence

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆


// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
