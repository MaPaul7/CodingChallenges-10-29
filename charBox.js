function charBox(num){
  let box = [];
  let box2 = [];
  if(typeof num != 'number'){
    console.log(-1);
    return;
  }
  if(num == 0){
    console.log("[[]]");
    return;
  }
  if(num == 1){
    box2.push("#");
    box.push(box2);
    console.log(box);
    return;
  }
  else{

    for(let i = 1; i <= num; i++){
      box2.push("#");
    }
    box.push(box2);
    box2 = [];
    for(let i = 2; i<= num-1; i++){
      box2.push("#");
      for(let j = 2; j <= num-1; j++){
        box2.push(" ");
      }
      box2.push("#");
      box.push(box2);
      box2 = [];
    }
    for(let i = 1; i <= num; i++){
      box2.push("#");
    }
    box.push(box2);
    box2 = [];
  }
  console.log(box);

}
charBox("Hello");
charBox(0);
charBox(1);
charBox(2);
charBox(3);
charBox(4);
charBox(5);
