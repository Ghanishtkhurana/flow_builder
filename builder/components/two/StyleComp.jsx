import React from "react";

const StyleComp = () => {
  return (
    <>
      <style>
        {`.context-menu {
                    background: white;
                    border: 1px solid #c0c0ca;
                    box-shadow: 10px 19px 20px rgba(0, 0, 0, 10%);
                    position: absolute;
                    z-index: 10;
                }
                
                .context-menu button {
                    border: none;
                    display: block;
                    padding: 0.5rem;
                    text-align: left;
                    width: 100%;
                    font-size: 14px;
                }
                
                .context-menu button:hover {
                    background: #dddfde;
                }`}
      </style>
    </>
  );
};

export default StyleComp;
