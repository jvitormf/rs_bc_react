import React from "react";
import PorpTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button 
        onClick={onDelete} 
        type="button">
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
    tech: 'Oculto',
}

TechItem.propTypes = {
    tech: PorpTypes.string,
    onDelete: PorpTypes.func.isRequired,
};

export default TechItem;
