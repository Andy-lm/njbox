import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Andy</h1>
        <h2>Hello Andy</h2>
        <h3>Hello Andy</h3>
        <h4>Hello Andy</h4>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr />
        <Button
          onClick={(e) => {
            e.preventDefault();
            console.log(123);
          }}
        >
          {" "}
          Hello Andy
        </Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Primary}>
          Hello Andy
        </Button>
        <Button size={ButtonSize.Large} disabled={true}>
          Hello Andy
        </Button>
        <Button size={ButtonSize.Large} btnType={ButtonType.Danger}>
          Hello Andy
        </Button>
        <Button
          btnType={ButtonType.Link}
          href={"http://www.baidu.com"}
          target="_blank"
        >
          Bai du
        </Button>
        <Button
          btnType={ButtonType.Link}
          href={"http://www.baidu.com"}
          disabled={true}
        >
          Bai du
        </Button>
        <Button> Hello Andy</Button>
        <hr />
      </header>
    </div>
  );
}

export default App;
