let btn = document.querySelector("#btn");
let body = document.querySelector("body");

let mode = "light";
btn.addEventListener("click",()=> {
if(mode === "light")
{
 mode = "dark";
 body.classList.add("light");
 body.classList.remove("dark");
}
else{
   mode = "light";
 body.classList.add("dark");
 body.classList.remove("light");

}

console.log(mode);
});
