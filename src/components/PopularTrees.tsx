import React from "react";
import Tree from "./Tree";
type Props = {};
type State = {
  trees: Array<{
    id: number;
    name: string;
    scientificName: string;
    numLikes: number;
  }>;
  scientificName: string;
  commonName: string;
};
class PopularTrees extends React.Component<Props, State> {
  state: State = {
    trees: [
      {
        id: 1,
        name: "White birch",
        scientificName: "Betula pendula",
        numLikes: 1
      },
      {
        id: 2,
        name: "Weeping willow",
        scientificName: "Salix sepulcralis",
        numLikes: 3
      },
      {
        id: 3,
        name: "London planetree",
        scientificName: "Platanus hybryda",
        numLikes: 2
      }
    ],
    scientificName: "",
    commonName: ""
  };

  addTree = () => {
    //
  };

  handleLike = (id: number) => {
    const foundtrees = this.state.trees.map(tree => {
      if (tree.id === id) {
        return { ...tree, numLikes: tree.numLikes + 1 };
      }
      return tree;
    });
    console.log(foundtrees);
    this.setState((prevState: State) => ({ ...prevState, trees: foundtrees }));
  };

  render() {
    return (
      <div>
        <div>
          {this.state.trees.map(tree => (
            <Tree
              name={tree.name}
              scientificName={tree.scientificName}
              onLike={() => this.handleLike(tree.id)}
              numLikes={tree.numLikes}
            />
          ))}
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.addTree();
          }}
          style={{ display: "flex" }}
        >
          <p style={{ margin: ".25rem" }}>
            <label>
              Common name:{" "}
              <input
                type="text"
                value={this.state.commonName}
                onChange={e => this.setState({ commonName: e.target.value })}
              />
            </label>
          </p>
          <p style={{ margin: ".25rem" }}>
            <label>
              Scientific name:{" "}
              <input
                type="text"
                value={this.state.scientificName}
                onChange={e =>
                  this.setState({ scientificName: e.target.value })
                }
              />
            </label>
          </p>
          <p style={{ margin: ".25rem" }}>
            <button type="submit">Add!</button>
          </p>
        </form>
      </div>
    );
  }
}
export default PopularTrees;
