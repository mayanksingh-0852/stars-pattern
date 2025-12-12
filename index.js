let rows = 6;

for(let i=0; i<rows; i++){
  
  let stars="";
  
  let hashed="";
  
for(let s=0; s<5-i; s++){
  stars += "*";
}

for (let h=0; h<i; h++){
  hashed += "#";
}
console.log(stars + hashed)
}
















