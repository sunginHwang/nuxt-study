# study

> personal nuxt study

# 공부 해야할 것들
## 라우팅 구조 파악. - clear
**nuxt** 에서는 **next.js** 와 다르게 기본 라우팅을 **클라이언트 랜더링**으로 내려준다. 따로 처리할 필요없다. 와우!! 편해.!!
커스텀 라우팅의 경우 next.js 에서는 따로 .js 파일에 설정을 해주어야 했지만
**nuxt**의 경우는 **전부 폴더구성**과 params 는 `_` 문자열의 **파일 or 폴더** 로 처리해준다. 라우팅 유효성 검사는 해당 페이지 컴포넌트의 validate 에서 작업 해줄수 있다.### 공통 처리 방법 (hoc 같은)

## ssr, clr 각각의 생명주기 ssr rendering life cycle
ssr로 렌더링 될때 데이터를 fetch 해서 한번에 렌더링 할 상황에는 **asyncData** 에 작성하도록 한다.
전체적인 개념은 **next.js** 에서의 `getInitialProps` 와 컨셉이 거의 동일하다.

1. asyncData의 결과는 데이터와 병합된다.
2. asyncData 내부에서 `this` 를 총해 컴포넌트 인스턴스를 접근 할 수는 없음. 컴포넌트를 초기화 하기 전체 호출되기때문.


4. 배포전략
5. 자동화
6. 마지막은 ts도.,.?

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
