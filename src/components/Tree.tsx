import React from "react";

type Props = {
  name: string;
  scientificName: String;
  numLikes: number;
  onLike: () => void;
};

class Tree extends React.Component<Props> {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <button onClick={() => this.props.onLike()}>
          {this.props.numLikes}
        </button>
      </div>
    );
  }
}
export default Tree;
