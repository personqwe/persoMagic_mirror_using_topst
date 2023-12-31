## 프로젝트 정보

- 일반적으로 매직미러 구현에 라즈베리파이가 많이 사용되지만, TOPST 보드에서도 라즈베리파이의 성능을 이끌어내어 리소스를 처리할 수 있을까? 또한, 라즈베리파이보다 더 나은 점이 있는지 확인해 보기 위해 이를 검토하고 있습니다.
- 매직 미러를 통해 사용자들이 편리하게 활용할 수 있도록 합니다.

## 소프트웨어 기능 리스트

- 날짜 및 시간
- 구글 캘린더
- Gmail
- 날씨
- 미세먼지
- 뉴스
- 구글 포토
- 매직미러 속의 버튼을 통한 모듈 on/off 기능
- css를 활용한 디자인

## 하드웨어 구성 리스트

- TOPOST 보드
- Git url

## 프로그램 코드

- 기능 단위 코드 또는 전체 코드

```jsx
import xxx
..
; comment
...
; comment

```

코드는 각 모듈과 매직미러의 CSS 파일을 수정하여 디자인이나 기능을 변경하는 것입니다. 

따라서, 코드는 별도로 업로드하지 않겠습니다.

## 프로그램 동작 방법

```jsx
DISPLAY="${DISPLAY:=:0}" ./node_modules/.bin/electron --no-sandbox --disable-gpu js/electron.js
```

## 개발 완성품

![Alt text](image.png)

## 프로젝트 작업