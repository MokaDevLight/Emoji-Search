import React, { PureComponent } from "react";
import Header from "./component/Header";
import SearchInput from "./component/SearchInput";
import EmojiResults from "./component/EmojiResults";
import filterEmoji from "./component/filterEmoji";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20),
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
