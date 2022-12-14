import React from "react";

import { useState } from "react";
import { ThemeInput } from "../../styles/input";
import { ThemeButton } from "../../styles/button";
import { StyledHeader } from "./style";

import Logo from "../../assets/MaskGroup.svg";

const Header = ({ showProducts }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <StyledHeader>
      <div className="header">
        <img src={Logo} alt="Logo" />
        <div className="search">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              showProducts(searchInput);
            }}
          >
            <ThemeInput
              type="text"
              InputSize="lg"
              InputStyle="solid"
              placeholder="Digite sua pesquisa"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            ></ThemeInput>
            <ThemeButton type="submit" buttonSize="md" buttonStyle="solid">
              Pesquisar
            </ThemeButton>
          </form>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
