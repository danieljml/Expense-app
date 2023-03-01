import React from "react";
import { ReactComponent as IconFood } from "./../images/cat_comida.svg";
import { ReactComponent as IconShops } from "./../images/cat_compras.svg";
import { ReactComponent as IconAccountsPayments } from "./../images/cat_cuentas-y-pagos.svg";
import { ReactComponent as IconDiversion } from "./../images/cat_diversion.svg";
import { ReactComponent as IconHome } from "./../images/cat_hogar.svg";
import { ReactComponent as IconClothes } from "./../images/cat_ropa.svg";
import { ReactComponent as IconHealthHygiene } from "./../images/cat_salud-e-higiene.svg";
import { ReactComponent as IconTransport } from "./../images/cat_transporte.svg";

const CategoryIcon = ({ id }) => {
  switch (id) {
    case "food":
      return <IconFood />;
    case "purchases":
      return <IconShops />;
    case "accounts and payments":
      return <IconAccountsPayments />;
    case "diversion":
      return <IconDiversion />;
    case "home":
      return <IconHome />;
    case "clothes":
      return <IconClothes />;
    case "health and hygiene":
      return <IconHealthHygiene />;
    case "transport":
      return <IconTransport />;
    default:
      return null;
  }
};

export default CategoryIcon;
