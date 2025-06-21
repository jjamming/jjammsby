---
emoji: ✏️
title: '유니언 타입 확장에 대응하는 안전한 처리법'
date: '2025-06-20'
categories: featured-TypeScript Project
---
## 🔁 타입이 바뀌면 return도 바꿔야죠 : 유니언 타입 확장에 대응하는 안전한 처리법

앞선 포스트에서 `MarketIndex["direction"]` 타입을 함수 매개변수로 재사용하는 법을 소개했다.

그런데 이렇게 타입만 바꿔준다고 과연 충분할까?

## 🧩 문제 상황

아래는 `MarketIndex` 타입이다. direction이 `"up"` 혹은 `"down"`일 때, 색상을 다르게 보여주기 위해 조건문으로 처리하고 있다.

```ts
export type MarketIndex = {
  value: number;
  volatility: string;
  direction: "up" | "down";
  chartData: ChartDataPoint[];
};
```

```tsx
const getChangeColor = (direction: MarketIndex["direction"]) => {
  return direction === "up" ? "text-red-500" : "text-blue-500";
};
```

지금은 문제가 없어 보이지만, 나중에 direction 값이 "neutral"처럼 하나 더 추가되면 어떨까?

```tsx
direction: "up" | "down" | "neutral";
```

이 경우 함수는 여전히 “up”과 그렇지 않은 케이스만 처리하기 때문에, neutral과 down은 같은 결과를 낼 것이고, neutral 타입 추가의 의미가 없을 것이다.

## 🛠️ 해결 방법: Switch문 적용하기
```tsx
const getChangeColor = (direction: MarketIndex["direction"]) => {
  switch (direction) {
    case "up":
      return "text-red-500";
    case "down":
      return "text-blue-500";
    case "neutral":
      return "text-gray-400";
  }
};
```

이런 식으로 switch 문을 만들어두면 나중에 direction에 새로운 타입이 추가되어도 기존 코드의 큰 변경 없이 새로운 타입에 대한 return문만 고쳐주면 된다. (OCP원칙 ..?)

## ✅ 장점

- **타입 확장에 안전하게 대응**
- **예외 케이스를 빠짐없이 처리 가능**
- **더욱 견고하고 의도한 동작이 보장되는 함수 작성 가능**

## 🚀 결론

타입을 재사용하는 것도 중요하지만, 그에 따라 함수의 동작이 안전하게 유지되도록 처리하는 것이 더더욱 중요하다고 생각한다.

프로젝트를 진행할수록 소프트웨어 공학에서 배운 여러 원리들이 체감되는 느낌이다. 역시 이론보단 실전이 더 빠르게 배우는 것 같다.

```toc
```