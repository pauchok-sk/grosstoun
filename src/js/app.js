import "../scss/style.scss";
import burger from "./files/burger.js";
import contentSectMore from "./files/contentSectMore.js";
import fileAttach from "./files/fileAttach.js";
import headerDrodpown from "./files/headerDropdown.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import tabs from "./files/tabs.js";

spoller();
burger();
inputmask();
fileAttach();
tabs();
headerScroll();
headerDrodpown();
sliders();
contentSectMore();

Fancybox.bind("[data-fancybox]", {});

// Fancybox.show([{ src: "#modal-get", type: "inline" }]);
