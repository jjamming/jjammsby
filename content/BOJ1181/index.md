---
emoji: 📖
title: '[BOJ] 1181: 단어 정렬 (node.js)'
date: '2025-04-10'
categories: featured-Codingtest
---

## 🔗 문제 링크

https://www.acmicpc.net/problem/1181

## 💬 문제
![](problem.png)
정렬을 이용하는 문제이다. node.js를 이용하여 풀 때는 sort메소드를 잘 알고 있다면 쉽게 풀 수 있다.

단어가 n개 주어지고, 단어의 길이대로 오름차순 정렬(1차), 단어의 길이가 같다면 사전순 정렬(2차) 해야한다. 
여기에 추가된 조건으로 중복된 단어는 하나만 남기고 제거해야한다.

## ✏️ 해결
우선 입력받은 배열에서 중복된 단어를 먼저 제거하고 그 이후 정렬을 하는 것이 좋다고 생각했다. 중복을 허용하지 않는 js의 자료구조 중 집합(Set)이 생각났고, 배열 전체를 집합에 넣었다가 빼는(?) 방식으로 중복된 단어를 없앨 수 있을 것 같았다.
```JS
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let arr = [];

for(let i = 1; i<=n; i++){
  arr.push(input[i]);
}

arr = [...new Set(arr)]; // 중복을 제거하기 위해 집합에 넣었다가 다시 배열로 복귀
```
이후 arr를 조건에 따라 정렬해주면 된다.
정렬하기 전, JavaScript의 sort 함수에 대해 정리하고 넘어가자.

sort함수
1. 문자열의 경우 유니코드 순서로 정렬(따로 함수 넣어줄 필요 X)
2. 숫자의 비교를 위해서는 정렬 함수를 추가로 작성해야한다.

정렬 함수는 `arr.sort((a,b)=>{a-b})` 형태로 넣을 수 있는데, 함수의 리턴 값이 음수라면 첫 인자(여기서는 a)를 더 먼저 정렬하고, 양수라면 두 번째 인자(b)를 먼저 정렬한다. 리턴값이 0이라면 순서 그대로 정렬된다 (a,b)

코드를 보면서 이해해보자
```JS
arr.sort((a,b)=>{
  if(a.length !== b.length){ 
    // 정렬 조건 1: 길이가 다르다면 길이가 짧은 것부터 
    return a.length - b.length;
  } else{
    // 정렬 조건 2: 길이가 같다면 사전순 정렬
    if(a<b) return -1;
    else if(a>b) return 1;
    else return 0;
  }
})
```
첫 if문은 두 문자열의 길이가 다를 때, 짧은 것을 우선으로 정렬하게 하는 코드이다.
여기서 `return a.length - b.length;`는 a의 길이가 더 길다면 양수가 되고 양수이면 두 번째 인자인 b를 앞쪽에 위치하게끔 정렬한다. b의 길이가 더 길다면 음수가 되고 첫 번째 인자인 a를 앞쪽에 위치하게끔 정렬한다. 길이가 짧은 단어를 앞쪽에 정렬시키는 코드이다.

else문은 길이가 같은 두 문자열일 때 실행된다. `if(a<b)` 라는 코드는 'a가 b보다 사전적으로 더 우선한다면' 이라는 의미이고 그 때 음수를 리턴하여 앞 인자인 a가 먼저, 즉 사전적으로 우선하는 문자열을 앞으로 정렬하는 코드이다.

해당 코드가 실행되면 문제에서 원하는 조건대로 배열이 정렬된다. 이제 출력을 포맷에 맞게 해주면 된다.

## ✅ 전체 코드
```JS
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let arr = [];

for(let i = 1; i<=n; i++){
  arr.push(input[i]);
}

arr = [...new Set(arr)]; // 중복을 제거하기 위해 집합에 넣었다가 다시 배열로 복귀
arr.sort((a,b)=>{
  if(a.length !== b.length){ 
    // 정렬 조건 1: 길이가 다르다면 길이가 짧은 것부터 
    return a.length - b.length;
  } else{
    // 정렬 조건 2: 길이가 같다면 사전순 정렬
    if(a<b) return -1;
    else if(a>b) return 1;
    else return 0;
  }
})

//출력
for(let i = 0; i<arr.length; i++){
  console.log(arr[i]);
}
```

자바스크립트의 sort 메소드에 대해 더 깊은 이해를 할 수 있게 되었다.
```toc
```







