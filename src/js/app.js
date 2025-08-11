import "../scss/style.scss";
import burger from "./files/burger.js";
import fileAttach from "./files/fileAttach.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import spoller from "./files/spoller.js";
import tabs from "./files/tabs.js";

spoller();
burger();
inputmask();
fileAttach();
tabs();
headerScroll();

Fancybox.bind("[data-fancybox]", {});

// Fancybox.show([{ src: "#modal-get", type: "inline" }]);
