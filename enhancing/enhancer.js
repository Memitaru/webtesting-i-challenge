module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement < 20){
    item.enhancement++
  }
  return {...item};
}

function fail(item) {

  
  
  if (item.enhancement < 15) {
    item.durability -= 5
  } else {
    item.durability -=10
  }

  if(item.enhancement > 15){
    item.enhancement--
  }
  
  
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return {...item};
}

function get(item) {
  return { ...item };
}

