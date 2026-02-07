# ✨국토교통과학기술진흥원 홈페이지 리뉴얼

| Before | After |
|------|------|
| <img src="https://github.com/user-attachments/assets/f74c3c74-32c4-4026-a8e6-ebca7c82ee44" width="220"/> | <img src="https://github.com/user-attachments/assets/1e91e842-b781-4929-bbdc-c8864c06cae4" width="420"/> |

<br><br>

## 🔗 Link
- 💻 [바로가기(web-site)](https://nyg00807-ship-it.github.io/Project/)
- 📃 [기획서(google slides)](https://docs.google.com/presentation/d/19cI53_MlMvwLH_7SqMSbr99kMV9pKpC7gjf5AZ8xxOk/edit?usp=sharing)
- 🎨 [디자인시안(figma)](https://www.figma.com/design/YfIVLhxE17EKAmxtgILrjr/%EA%B8%B0%ED%9A%8D%EC%84%9C-%EC%8B%9C%EC%95%88?node-id=1-5&t=vGY0ZB2B4KjjVllY-1)

<br>

## 🗓 개발기간
### 2025. 11.06 ~ 2026. 01. 07  

<br>

## 📌 개요
본 프로젝트는 기존 홈페이지의 노후화된 UI와 불명확한 정보 구조를 개선하기 위해 진행한
홈페이지 리뉴얼 프로젝트입니다.
기존 사이트의 문제점을 분석한 후 디자인과 구조를 전면 수정했습니다.
단순한 디자인 변경이 아니라, 사용자 흐름과 가독성 개선을 목표로 했습니다.

<br>

## 🎯 리뉴얼 목적
- 핵심 정보가 한눈에 들어오지 않는 문제 개선
- 전체적으로 투박한 디자인 정리
- 반응형 환경 미지원 문제 해결

<br>

## 🔍 기존 홈페이지 문제점 분석
- 색감과 디자인 톤이 통일되지 않아 시각적 피로도가 높음
- 마우스 호버 효과가 없어 인터랙션 요소가 눈에 띄지 않음
- 중복되거나 의미 없는 기능으로 사용자 혼란 발생
- 반응형이 적용되지 않아 PC 외 디바이스 접근성 저하

<br>

## ✨ 리뉴얼 후 개선 사항
- 메인 비주얼에 비디오를 적용해 주목도와 가독성 향상
- 전반적인 호버 효과 적용으로 사용자 인터랙션 강화
- 섹션별 역할을 명확히 구분하여 정보 구조 재정비
- 불필요한 기능과 중복 콘텐츠 제거
- 반응형 레이아웃을 새롭게 구성해 다양한 디바이스 대응

<br>

## 🛠 주요기능
### ☑️ 메인 페이지-메인비주얼(index.html)
- HTML5 video 요소를 활용한 메인 비주얼 배경 영상 구현
- CSS 포지셔닝과 오버레이 구조를 활용한 영상 위 텍스트 레이아웃 설계
- 메가네비게이션 UI를 JavaScript 이벤트 기반 인터랙션으로 구현
<img src="https://github.com/user-attachments/assets/a6844914-703f-4948-8620-f052605e7abe"/>
<br>

### ☑️ 메인 페이지-탭(index.html)
- 탭 UI를 활용한 소식 카테고리(공지사항, 보도자료, 건설기술 등) 콘텐츠 구분 구조 구현
- 탭 클릭 시 해당 카테고리 목록이 전환되는 콘텐츠 필터링 인터랙션 구성
- 우측 프로모션 배너 영역을 통한 주요 행사/이벤트 콘텐츠 강조 배치

<img src="https://github.com/user-attachments/assets/4c24a3ef-5c10-499d-97b4-73db4515c03e"/>
<br>

### ☑️ 공지사항 페이지(sub1.html)
- 공지사항 카테고리 분류 구조를 적용한 정보 정렬 UI 구성
- 표(Table) 레이아웃을 활용한 게시글 정보 구조화 (번호, 구분, 분야, 제목, 날짜, 조회수)
- 페이지네이션 적용으로 공지 데이터 구간 분리 및 탐색 편의성 확보
<img src="https://github.com/user-attachments/assets/11265d60-b844-48e6-aee0-72205c0e1da5"/>
<br>

### ☑️ 주요성과 페이지(sub3.html)
- 탭 UI를 활용한 주요연구성과 / 성과집 콘텐츠 유형 구분 구조 구현
- 썸네일 클릭 시 메인 이미지가 전환되는 콘텐츠 탐색 구조 설계
- 연구성과 시각 자료 중심 레이아웃을 통한 정보 몰입도 강화
<img src="https://github.com/user-attachments/assets/05103602-2d7a-4166-925c-6f632b92ea0f"/>
<br>

### ☑️ FAQ 페이지(sub5.hmtl)
- 아코디언 UI를 활용한 질문·답변 토글 인터랙션 구현
- 페이지네이션 적용으로 다량의 FAQ 콘텐츠 구간 분리
- 아이콘과 카드형 레이아웃을 활용한 정보 시각 구분 및 가독성 강화
<img src="https://github.com/user-attachments/assets/2ad028bb-147b-4227-b20d-81957b3e74f5"/>
<br>

## 🖥 실행 환경
- 최신 Chrome / Edge

## 🖥 실행 방법
### 로컬 파일로 실행 (권장)
- `index.html` 더블클릭 → 바로 실행

<br>

## 💬 회고
이번 프로젝트를 통해 프론트엔드 개발이 단순한 화면 구현이 아니라,
사용자가 정보를 어떻게 받아들이는지를 설계하는 작업이라는 점을 배웠습니다.

영상 배경, 탭, 아코디언, 슬라이드 등 다양한 UI 인터랙션을 구현하며
사용자 행동에 반응하는 구조 설계의 중요성을 이해하게 되었고,
UI 구성 요소 하나에도 이유가 있어야 한다는 개발 관점을 기를 수 있었습니다.

또한 정보 계층 구조와 가독성을 고려한 레이아웃 설계를 경험하며
프론트엔드가 사용자 경험을 구체적인 화면으로 구현하는 역할임을 체감한 프로젝트였습니다.
