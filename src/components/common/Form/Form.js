import React from "react";

export const Form = ({ children, ...rest }) => {
  return <form {...rest}>{children}</form>;
};
