---
emoji: ✏️
title: 'Non-null 단언 연산자'
date: '2025-04-08'
categories: featured-TypeScript
---

## 📌 Non null 단언이 무엇일까?
타입스크립트는 Null이나 undefined 값을 엄격하게 다루기 때문에, 어떤 값이 null이 아님을 확신 하지 않으면 오류를 발생시킬 수 있다.
개발자는 해당 값이 null이 아니라는 걸 잘 알지만 ts 컴파일러에서 null일 수도 있다고 생각하고 경고를 발생시키는 것이다.

예를 들면,
```ts
type Post = {
  title: string,
  author?: string,
};

const post1 : Post = {
  title: "안녕하세요",
  author: "유재민",
};

const len = post1.author?.length;
```
이런 식으로 author의 길이를 알아내는 코드를 작성할 때, author는 있을 수도 있고 없을 수도 있기 때문에 js의 옵셔널 체이닝을 사용할 수 있다. 

여기서 ts 컴파일러는 author 값이 null이 될 수도 있다고 판단하기 때문에 에러를 발생시키는데, 이럴 때 non null 단언 연산자 ! 를 이용할 수 있다.

```ts
const len = post1.author!.length;
```

이런 식으로 ? 대신 ! 연산자를 사용하면 컴파일러에게 'author는 null이 아니고 값이 들어있어!' 라고 말해주는 역할을 하게 되고, 오류가 더 이상 발생하지 않게 된다.

## 📝 프로젝트에서 했던 비슷한 경험
지난 겨울 타입스크립트를 제대로 알지 못하고 급하게 프로젝트를 진행한 적이 있다. api 결과에서 특정 필드 값을 뽑아와서 쓰는 코드였는데, 옵셔널 체이닝 ? 를 써도 계속 빨간줄 오류가 떠서 헤맸던 기억이 있다.

~~any를 이용해서 해결했던 것 같기도 ..~~

그럴 경우에 앞으로는 ! 를 이용해서 이 값은 null이 아니다! 라고 컴파일러에게 알려줄 수 있을 것 같다. 물론 실제로 결과값은 null이 오지 않는다고 확실하게 알아야 하겠지만 ..

```toc
```