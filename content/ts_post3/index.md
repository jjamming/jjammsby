---
emoji: ✏️
title: '객체 타입의 특정 프로퍼티 타입 가져오기'
date: '2025-06-21'
categories: featured-TypeScript Project
---
## TypeScript에서 타입을 재사용하는 법 : 객체 타입의 특정 프로퍼티 타입 가져오기

졸업 프로젝트를 하던 중, 이미 정의해둔 타입에서 특정 속성만 재사용하고 싶어 방법을 고민하다가 알게 되었다.

## 🧩 문제 상황

아래는 MarketIndex 라는 타입이다. kospi/kosdaq 지수 렌더링을 위해 정의해둔 타입이다.

```
export type MarketIndex = {
  value: number;
  volatility: string;
  direction: "up" | "down";
  chartData: ChartDataPoint[];
};
```

그리고 차트를 렌더링 하려는데, direction에 따라 색상을 바꾸고 싶었다. 상승(”up”)일 땐 빨간색, 하락(”down”)일 땐 파란색으로 .. 

direction 값을 받아서 색상을 리턴하는 함수를 정의하는데 매개변수 타입 정의 중 고민이 들었다. 단순히 “up”|”down” 타입으로 지정할 수도 있겠지만 먼 훗날 MarketIndex 타입이 변경된다면(예를들면 direction: boolean) 이라거나 … 함수들의 값을 모두 변경해야할 것 같아 유지보수성이 좋지 않을 것 같았다.

그래서 direction 속성을 색상 변경 함수의 매개변수 타입으로 재사용하고 싶다.

## 🛠️ 해결 방법: 인덱스 접근 타입(Index Access Type)

TypeScript에서는 다음과 같은 문법을 통해 객체 타입의 특정 속성 타입을 추출할 수 있다.

```tsx
MarketIndex["direction"]
```

함수에 적용하면 다음과 같다.

```tsx
const getChangeColor = (direction: MarketIndex["direction"]) => {
  return direction === "up" ? "text-red-500" : "text-blue-500";
};
```

## ✅ 장점

- **중복 제거**: "up" | "down" 같은 리터럴 유니언 타입을 여러 곳에 반복해서 쓰지 않아도 된다.
- **자동 반영**: MarketIndex 타입의 direction이 나중에 "neutral" 등의 값으로 확장되면, 이를 사용하는 함수들도 자동으로 타입을 반영하게 된다.
- **유지보수성 향상**: 타입 변경이 발생했을 때 실수를 줄일 수 있다.

## 🚀 결론

TypeScript에서는 타입 정의를 최대한 재사용하면서 일관성을 유지하는 것이 중요하다. 인덱스 접근 타입은 객체의 특정 속성 타입을 추출할 수 있어, 함수 매개변수나 변수 타입에 매우 유용하게 활용된다.

근데, return문도 바꿔야 이게 의미가 있을 것 같은데 ..? 다음 포스트에서 찾아뵙겠습니다

```toc
```