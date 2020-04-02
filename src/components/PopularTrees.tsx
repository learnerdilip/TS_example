import React from "react";
type Props = {};
type State = {
  trees: Array<{
    name: string;
    scientificName: string;
  }>;
};
class PopularTrees extends React.Component<Props, State> {
  state: State = {
    trees: [
      { name: "White birch", scientificName: "Betula pendula" },
      { name: "Weeping willow", scientificName: "Salix sepulcralis" },
      { name: "London planetree", scientificName: "Platanus hybryda" }
    ]
  };
  render() {
    return <div>{/* TODO */}</div>;
  }
}
export default PopularTrees;