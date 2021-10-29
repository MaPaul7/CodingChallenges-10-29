function getHashTags(sentence){
  let arr = sentence.split(" ");
  let finalarr = [];
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].replace(/\W/g, '')
  }
  arr.sort(function(a, b){return b.length - a.length});

  if(arr.length >= 3){
    finalarr.push("#" + arr[0].toLowerCase())
    finalarr.push("#" + arr[1].toLowerCase())
    finalarr.push("#" + arr[2].toLowerCase())
  }
  else{
    for(let i = 0; i < arr.length; i++){
      finalarr.push("#" + arr[i].toLowerCase());
    }
  }


  console.log(finalarr);
}
getHashTags("How the Avocado Became the Fruit of the Global Trade");
getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year");
getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit");
getHashTags("Visualising Science");
