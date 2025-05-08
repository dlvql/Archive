function LikeButton() {
  const [liked, setLiked] = React.useState(false); // 초깃값 및 컴포넌트 상탯값 정의, React 변수는 react.development.js 파일에서 전역 변수로 생성
  const text = liked ? "좋아요 취소" : "좋아요"; // 컴포넌트 상태에 따라 동적으로 버튼 문구 결정
  return React.createElement( // 리액트 요소를 반환하는 함수 createElement -> 최종적으로 버튼 돔 요소
    'button', // 버튼 돔 요소임을 설명
    { onClick: () => setLiked(!liked) }, // 버튼 클릭 시 onClick 함수 호출, setLiked가 실행되며 컴포넌트 상탯값 변경
    text,
  );
}

const domContainer = document.querySelector('#react-root'); // 미리 만들어둔 dom 요소를 querySelector로 가져온다
ReactDOM.render(React.createElement(LikeButton), domContainer); // react-dom.development.js 파일에서 전역으로 만든 ReactDOM 변수를 사용해 컴포넌트를 react-dom 요소에 추가