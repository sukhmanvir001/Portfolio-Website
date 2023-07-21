var htmlBtn = document.getElementById('htmlBtn');
var javascriptBtn = document.getElementById('javascriptBtn');
var reactBtn = document.getElementById('reactBtn');

var htmlandcssDiv = document.getElementById('htmlandcss');
var reactDiv = document.getElementById('react');
var javascriptDiv = document.getElementById('javascript');


htmlBtn.addEventListener('click' , ()=>{
    htmlandcssDiv.style.display = "flex";
    reactDiv.style.display = "none";
    javascriptDiv.style.display = "none";

    
    htmlBtn.style.textDecoration = "underline 3px";
    javascriptBtn.style.textDecoration = "none";
    reactBtn.style.textDecoration = "none";
})

javascriptBtn.addEventListener('click' , ()=>{
    htmlandcssDiv.style.display = "none";
    reactDiv.style.display = "none";
    javascriptDiv.style.display = "flex";

    
    htmlBtn.style.textDecoration = "none";
    javascriptBtn.style.textDecoration = "underline 3px";
    reactBtn.style.textDecoration = "none";
})

reactBtn.addEventListener('click' , ()=>{
    htmlandcssDiv.style.display = "none";
    reactDiv.style.display = "flex";
    javascriptDiv.style.display = "none";

    
    htmlBtn.style.textDecoration = "none";
    javascriptBtn.style.textDecoration = "none";
    reactBtn.style.textDecoration = "underline 3px";
})


//transition effect


const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
      console.log(entry);
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
      // else{
      //   entry.target.classList.remove('show');
      // }
    });
  });


  const hiddenElement = document.querySelectorAll('.leftHidden');
hiddenElement.forEach((el)=>
  observer.observe(el)
);

const observer2 = new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
      console.log(entry);
      if(entry.isIntersecting){
        entry.target.classList.add('notFaded');
      }
      // else{
      //   entry.target.classList.remove('show');
      // }
    });
  });


  const hiddenElement2 = document.querySelectorAll('.rightHidden');
hiddenElement.forEach((el)=>
  observer.observe(el)
);

const hiddenElement3 = document.querySelectorAll('.faded');
    hiddenElement.forEach((el)=>
    observer2.observe(el)
);



document.getElementById("gmailClick").addEventListener('click' , ()=>{
    console.log("Hello");
    alert("Send Email to : sukhmanvir.33@gmail.com");
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

