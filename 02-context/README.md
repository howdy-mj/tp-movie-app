기존 JavaScript로 만들어진 것을 TypeScript로 변경

[01-ts](https://github.com/howdy-mj/tp-movie-app/tree/master/01-ts)에서 모든 이벤트가 reducers로 이루어지고 있습니다.
특히, `App.tsx`에서 모든 props를 넘겨주다보니 필요 이상으로 길어지는 것 같아, prop drilling 문제를 피하고자 context api를 사용했습니다.

## 시작

```shell
$ yarn add
# or
$ npm install

$ yarn start
# or
$ npm start
```
