// let container = document.getElementsByClassName("container")[0];
// let html = container.innerHTML; 
// async function createNewLine (text) {
//     return new Promise ((resolve)=>{
//     setTimeout(() => {
//         let line = document.createElement('span');
//         line.textContent=text;
//         container.appendChild(line);
//         resolve(line);
//     }, 1000+(6000*(Math.random())));
//   });
// }

// async function animate_dots(text){
//     let dot_count=0;
//     let add_dot=true;
//     // let spanline = document.createElement('span');
//     // spanline.textContent=text.line;
//     let spanline = await createNewLine(text.line);
//     let state=text.state
//     console.log("ram"+spanline)
//     interval_id=setInterval(()=>{
//     if(add_dot==true){
//         if(dot_count<3){
//             spanline.textContent+="."; 
//             dot_count++;
//         }
//         else{
//             add_dot=false;  
//         }
//     }
//     else{
//     if(dot_count>0){
//         spanline.textContent = spanline.textContent.slice(0,-1);
//             dot_count--;
//         }
//         else{
//             add_dot=true;
//         }
//     }if(state=="done"){
//         console.log(state)
//         clearInterval(interval_id)
//     }
// },500)
    
//      // Resolve the animation when cleaned up
     
    
//     // const cleanup = ()=>{
//     //     clearInterval(interval_id);
//     //     resolve();
//     // };
    
    
// }




// async function process_lines(){
//     let lines=[{"line": "Initializing Hacking",
//                 "state":"wait"},
//        {"line":"Reading your Files",
//         "state":"wait"},
//        {"line":"Password files Detected",
//         "state":"wait"},
//        {"line":"Sending all passwords and personal files to server",
//         "state":"wait"},
//        {"line":"Cleaning up",
//         "state":"wait"}
// ];
    
// for (const text of lines) {
//     // let line = await createNewLine(text.line);
//         if(text.state=="wait"){
//             console.log(text.line);
//             console.log("state :"+text.state);
//             animate_dots(text);
//             text.state="done";
//             console.log("state :"+text.state);
        
//     }
    
//     container.appendChild(document.createElement('br'));    
        
        
        
// }
// }


// process_lines();
// let container = document.getElementsByClassName("container")[0];
// let html = container.innerHTML;

// function random_delay(){
//     return new Promise ((resolve)=>{
//         setTimeout(()=>{
//             console.log("10");
//         },1000 + 6000 * Math.random())
//     })
// }

// async function createNewLine(text) {
// let spanline= document.body.getElementsByClassName('container')[0].createElement("span");
// spanline.textContent += text.line;
// await random_delay();
  
// }

// function animate_dots(line) {
//   let dot_count = 0;
//   let add_dot = true;
//   let interval_id;

//   const animation = new Promise((resolve) => {
//     interval_id = setInterval(() => {
//       if (add_dot) {
//         if (dot_count < 3) {
//           line.textContent += ".";
//           dot_count++;
//         } else {
//           add_dot = false;
//         }
//       } else {
//         if (dot_count > 0) {
//           line.textContent = line.textContent.slice(0, -1);
//           dot_count--;
//         } else {
//           add_dot = true;
//         }
//       }
//     }, 500);
    
//     // Resolve the animation when cleaned up
//     const cleanup = () => {
//       clearInterval(interval_id);
//       resolve(); // Resolve the animation promise
//     };
//     var clnup = cleanup;
//     // Assign cleanup function to the animation object
    
//   });
//   clnup = animation.clnup;
//   return animation;
// }

// async function process_lines() {
//   let lines = [
//     "Initializing Hacking",
//     "Reading your Files",
//     "Password files Detected",
//     "Sending all passwords and personal files to server",
//     "Cleaning up"
//   ];

//   let current_animation = null;

//   for (const text of lines) {
//     let line = await createNewLine(text);  // Create new line
//     current_animation = animate_dots(line); // Start animation
    
//     // Wait for 2 seconds before moving to the next line while the dots animate
//     // await new Promise((resolve) => setTimeout(resolve, 2000));

//     container.appendChild(document.createElement('br'));  // Add a line break
    
//     // Ensure cleanup is called on the current animation before continuing
    
//     console.log("6");
//     current_animation.clnup; // Stop the current animation
//     console.log("7");
    
//     // Wait for the current animation to complete before continuing to the next line
//     await current_animation;
//   }
// }

// process_lines();

let container = document.getElementById("cont");

let lines = [
   "Initializing Hacking",
   "Reading your Files",
   "Password files Detected",
   "Sending all passwords and personal files to server",
   "Cleaning up"
]

const randomDelay=()=>{
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            resolve();
        },1000+6000*Math.random())
    })
}
async function addItem(item){
    
    await randomDelay();
    return new Promise((resolve,reject)=>{
        container.innerHTML+=`<div>${item}</div>`
        resolve();
    })
    
}
async function main(){
    setInterval(() => {
        let last = container.lastElementChild;
        
        if(last.innerHTML.endsWith("...")){
            last.innerHTML=last.innerHTML.slice(0,-3);
        }
        else {
            last.append(".");
        }
    }, 200);
    for (const item of lines) {
        await addItem(item);
    }
}
main();
