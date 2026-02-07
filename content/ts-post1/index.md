---
emoji: ✏️
title: '인덱스 시그니처 이용하기'
date: '2025-04-07'
categories: featured-TypeScript
---

## 📌 인덱스 시그니처가 무엇일까?

타입스크립트에서 객체 타입을 선언할 때, 객체의 키와 값의 타입을 동적으로 정의할 수 있게 해주는 문법이다.<br/>

어떤 객체가 많은 속성을 가질 수 있는데, 속성들이 동일한 타입의 값을 가져야할 때 유용하게 사용할 수 있다. 

예를 들어, 국가 이름 : 코드 형식을 가지는 CountryCode 객체를 만들어야 할 때 수많은 나라의 타입을 하나하나 선언하기는 어렵고 낭비일 수 있다.


예시)
```ts
type CountryCode = {
  Korea: string,
  Japan: string,
  UnitedState: string,
  // ...무수히 많은 나라를 추가하기 힘듦 !!
}
```
국가 이름과 코드는 항상 string 이기 때문에, key - value 형식으로 지정해둘 수 있다.

```ts
// 인덱스 시그니처 이용하기
type CountryCode = {
  [key: string]: string,
}

const countryCodes : CountryCode = {
  Korea: "ko",
  Japan: "jp",
  UnitedState: "us",
}
```

이런 식으로 타입을 간단하게 선언해두고 실제 객체에서 동적으로 값을 추가할 수 있다!

## 🚨 유의할 점
다른 프로퍼티를 추가할 때는 기존 인덱스 시그니처에서 설정한 타입과 호환되게끔 해야한다.
```ts
// 인덱스 시그니처 이용하기
type CountryCode = {
  [key: string]: string,
  korea: number, // 오류 발생
}
```
만약 `[key: string]: string` 으로 설정해두었다면 추가 프로퍼티도 string 값을 가지도록 해야한다.



```toc

```