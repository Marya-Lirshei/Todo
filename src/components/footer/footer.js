import React from "react";
import PropTypes from "prop-types";

import TaskFilter from "../task-filter/task-filter";

import "./footer.css";

function Footer({
  filtered,
  onFilterChange,
  count = 0,
  clearCompleted = () => {},
}) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <div className="filters">
        <TaskFilter filtered={filtered} onFilterChange={onFilterChange} />
      </div>
      <button type="button" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  clearCompleted: PropTypes.func,
  count: PropTypes.number,
};

Footer.defaultProps = {
  clearCompleted: () => {},
  count: 0,
};

export default Footer;
