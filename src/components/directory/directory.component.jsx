import React from "react";
import MenuItems from "../menu-items/menu-items.component";
import "./directory.styles.scss";

import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...menuItemsDetails }) => (
      <MenuItems key={id} {...menuItemsDetails} />
    ))}
  </div>
);

const mapStatetoProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStatetoProps)(Directory);
