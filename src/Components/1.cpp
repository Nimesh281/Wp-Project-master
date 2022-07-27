fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Language: cpp
// Path: src\Components\2.cpp
fibonacci = (n) => {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let temp = a;
    a = b;
    b = temp + b;
  }

  return a;
}

// Language: cpp
// Path: src\Components\3.cpp
fibonacci = (n) => {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let temp = a;
    a = b;
    b = temp + b;
  }

  return a;
}

// Language: cpp
// Path: src\Components\4.cpp
fibonacci = (n) => {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let temp = a;
    a = b;
    b = temp + b;
  }

  return a;
}

// Language: cpp
// Path: src\Components\5.cpp
fibonacci = (n) => {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let temp = a;
    a = b;
    b = temp + b;
  }

  return a;
}

// Language: cpp
// Path: src\Components\6.cpp
fibonacci = (n) => {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let temp = a;
    a