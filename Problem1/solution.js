function get(obj, path, defaultValue) {
  const pathArray = path.split('.');
  let currentObj = obj;

  for (const key of pathArray) {
    if (!currentObj || typeof currentObj !== 'object') {
      return defaultValue;
    }
    currentObj = currentObj[key];
  }

  return currentObj !== undefined ? currentObj : defaultValue;
}

const obj = { 
  a: { 
    b: { 
      c: 'd' 
    },
    e: 'f'
  }
};

console.log(get(obj, 'a.b'));             // { c: 'd' }
console.log(get(obj, 'a.b.c'));           // 'd'
console.log(get(obj, 'a.e'));             // 'f'
console.log(get(obj, 'x.x.e'));           // undefined
console.log(get(obj, 'a.x.e', true));     // true
console.log(get(obj, 'a.x.e', 'My default value')); // 'My default value'
