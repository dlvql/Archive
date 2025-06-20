function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) },
    text,
  );
}
function Container() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <LikeButton />
      <div style={{ marginTop: 20 }}> 
        <span>현재 카운트: </span>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </div>
    </div>
  );
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);

// npm i @babel/core @babel/cli @babel/preset-react
// npx babel --watch src --out-dir . --presets @babel/preset-react -> js 파일 내의 jsx 문법을 변환시키는 명령어