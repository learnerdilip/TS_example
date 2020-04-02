import React from "react";

type Props = {
  name: string;
  scientificName: String;
};

class Tree extends React.Component<Props> {
  render() {
    return <p>Name: {this.props.name}</p>;
  }
}
export default Tree;
