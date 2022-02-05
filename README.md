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

    
