# Wanted_pre_onboarding
## :raised_hands: 프로젝트 소개
React.js을 이용하여 기능별로 구현
## :date: 프로젝트 기간
22.01.28 ~ 22.02.09
## :computer: 배포 주소
https://61fe197ce12dde9ade326517--stupefied-varahamihira-fe2d21.netlify.app/
## :postbox: 깃 주소
https://github.com/SpearJin/wanted-pre-onboarding
## 구현
  * Toggle
    * 구현 방법
      * input에 type을 "checkbox"로 설정
      * checked 여부에 따라 css의 widht, transform에 변화를 줌
    * 이슈
      * label 안에 input 태그 스타일링에 어려움을 겪음
      * "appearance: none;"을 통해 input 태그를 안 보이게함
    * 실행 방법
      * 버튼이 "ON"이 되면 background와 버튼이 움직이고, "Toggle Switch OFF" => "Toggle Switch ON" 바뀜
      ![toggle](https://user-images.githubusercontent.com/87363129/152633223-32b68f69-7ee7-4118-b0d1-50fe97ff1f89.gif)
  * Modal
    * 구현 방법
      * Modal 버튼 클릭시 'active'클래스를 추가함
      * x버튼 클릭시 'active'클래스를 제거함
    * 이슈
      * Modal테그를 어떻게 보였다가 안보이게 할까 고민을 함
      * Modal테그를 처음에는 "display: none;"을 주고 "active" 클래스가 있을시만 "display: block;"으로 줌
    * 실행 방법
      * "Open Modal" 클릭시, Modal창이 나오고, 'x' 클릭시 모달이 닫힘
      ![modal](https://user-images.githubusercontent.com/87363129/152633587-de4f4974-b001-4464-baf4-5c6767d607b9.gif)
  * Tab
    * 구현 방법
      * Tab1, Tab2, Tab3 각각 컴포넌트를 만듬
      * useRef를 이용하여 "tab_categories"의 태그를 취득하고, "tab_btn" 태그들도 얕은복사를 하여 배열로 취득 함
      * "tab_btn" 태그의 className을 이용하여, 변수 page에 target을 할당함
      * changeClassName 함수을 이용하여 클릭한 target에만 "active"클래스를 추가하고, 아닌것은 "active" 클래스를 제거함
      * randerCategory 함수을 이용하여 해당 target 컴포넌트를 렌더링 함 
    * 이슈
      * 선택한 컴포넌트만 어떻게 보여줄지 고민을 함
      * 변수를 하나 할당하고, switch문을 이용하여 해당 컴포넌트를 렌더링 하도록 함
    * 실행 방법
      * 각 버튼을 클릭시 서로 다른 내용이 렌더링 됨
      ![tab](https://user-images.githubusercontent.com/87363129/152634937-82791c59-9bd4-4bba-8fc9-f797f504563d.gif)
 * Tag
     * 구현 방법
       * input태그에 텍스트를 입력하고, submit 이벤트가 실행되면, onSubmitTagAdd 함수를 실행함
       * tags변수를 선언하고, tagList state를 얕은 복사하여, 입력한 텍스트를 tagList에 추가하여 tags 변수에 할당함
       * x버튼 클릭시 onClickTagRemove 함수가 실행되고, 해당 target과 현재 tagList에 있는 id를 비교하여 tags변수에 할당함
       * 각 함수에서 구한 tags변수를 tagList state 값으로 바꿈
     * 이슈
       * input 태그를 클릭 하엿을때 width을 설정하는데 어려움을 겪음
       * flex-grow을 이용하여 문제를 해결
       * input 태그를 클릭시 border가 전체적으로 생기도록 하는데 어려움을 겪음
       * ':focus-within'을 이용하여 문제 해결
     * 실행 방법
       * input 태그안에 텍스트를 입력하고 'submit' 이벤트시 해당 리스트에 텍스트가 추가되고, x버큰 클릭시 해당 텍스트가 삭제가 됨
       ![tag](https://user-images.githubusercontent.com/87363129/152635297-335a8785-a7a6-4a5b-9d95-c16e1f3d2159.gif)
 * AutoComplete
     * 구현 방법
       * autoDatas라는 더미 데이터를 만듬
       * input태그에서 onChange이벤트가 일어나면, myText state값을 input에 입력한 값으로 바꿈
       * useEffect을 이용하여, myText state가 바뀔때마다, autoDatas의 더미 데이터와, myTest 값과 비교하여 새로운 변수에 값을 할당함
       * list state는 새롭게 할당 받은 변수 값으로 바뀜
       * x버튼을 클릭시 list state값을 빈 배열로 초기화 시킴
       * list state에 배열을 클릭시 myText값은 해당 값으로 state을 변화 함
     * 이슈
       * input 태그를 클릭시 box-shadow 스타일링을 적용되도록 하는데 어려움을 겪음
       * "focus-within"을 이용하여 해결
       * 입력한 값이 대문자, 소문자 상관없이 list값이 보여주도록 하는데 어려움을 겪음
       * autoDatas의 더미 데이터와, myTest 값과 비교할때 toLowerCase메소드를 이용하여 모두 소문자로 바꾸어서 비교 하도록 함
     * 실행 방법
       * input 태그에 텍스트를 입력하면 내가 입력하려는 값을 추천하여 보여준다
       * x버튼 클릭시 추천하는 값이 사라지고, 추천해주는 값을 클릭시 해당 값으로 바뀐다
       ![auto](https://user-images.githubusercontent.com/87363129/152635664-2b939a9f-a689-4763-8cfd-b9c82e9361e6.gif)
 * ClickToEdit
     * 구현 방법
       * input 태그에 onChange 이벤트가 일어나면, input태그 안에 value값을 바꿈
       * 텍스트를 입력하고, blur 이벤트가 일어나면, p 태그의 결과 값이 바뀜
     * 이슈
       * input 태그에 onChange가 일어날때 마다, 해당 state값을 변화 시키면, p 태그의 값도 같이 바껴서 고민을 함
       * p 태그를 나타내는 state값을 하나 더 만들고, blur 이벤트시 input의 value값이 p 태그의 결과값으로 바뀌도록 구현 함
     * 실행 방법
       * 이름, 나이 input 태그에 원하는 텍스트를 입력하고, 다른 곳을 클릭하게 되면, 밑에 결과 값이 바뀐다
       ![edit](https://user-images.githubusercontent.com/87363129/152635994-6fb71f67-6419-46c0-9465-ac2763df5f99.gif)


    
