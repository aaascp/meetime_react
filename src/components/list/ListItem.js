import React from "react";

class ListItem extends React.Component {
  onItemClick = event => {
    event.preventDefault();
    const id = event.target.dataset.id;
    const index = event.target.dataset.index;
    this.props.itemClickHandler({ id, index });
  };

  onDeleteClick = event => {
    event.stopPropagation();
    const id = event.target.dataset.id;
    const index = event.target.dataset.index;
    this.props.deleteClickHandler({ id, index });
  };

  render() {
    return (
      <li
        className="cars-list__item"
        onClick={this.onItemClick}
        data-id={this.props.item.id}
        data-index={this.props.index}
      >
        {this.props.item.model}
        <button
          className="button button--inline"
          data-id={this.props.item.id}
          data-index={this.props.index}
          onClick={this.onDeleteClick}
        >
          X
        </button>
      </li>
    );
  }
}

export default ListItem;