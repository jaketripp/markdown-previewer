import React, { Component } from "react";
import "./App.css";
import marked from "marked";

class App extends Component {
  constructor(props) {
    super(props);
    let text =
      "Heading\n=======\n\nSub-heading\n-----------\n \n### Sub-sub-heading\n \n#### Sub-sub-sub-heading\n \n##### Sub-sub-sub-sub-heading\n\n```javascript\nvar s = 'JavaScript code';\nalert(s);\n```\n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in Spain.\n\n --- \n\n*[Jake Tripp](https://jaketripp.com)*";

    this.state = {
      markdown: marked(text),
      text
    };
  }

  createMarkup(htmlString) {
    return { __html: htmlString };
  }

  onTextChange(e) {
    this.setState({ text: e.target.value, markdown: marked(e.target.value) });
  }

  render() {
    return (
      <div id="main">
        <h1>Markdown Previewer</h1>
        <div id="container">
          <textarea
            id="raw"
            onChange={e => this.onTextChange(e)}
            value={this.state.text}
            cols="50"
            rows="50"
          />
          <div
            id="result"
            dangerouslySetInnerHTML={this.createMarkup(this.state.markdown)}
          />
        </div>
      </div>
    );
  }
}

export default App;
