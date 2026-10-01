/* ========================================
Hamburger Menu
======================================== */

const hamburgerButton = document.querySelector(".hamburger-button");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerOverlay = document.querySelector(".hamburger-overlay");
const hamburgerClose = document.querySelector(".hamburger-menu-close");

const hamburgerLinks = document.querySelectorAll(".hamburger-menu-link");

/* ========================================
Open Hamburger Menu
======================================== */

function openHamburgerMenu() {
  hamburgerMenu.classList.add("is-open");
  hamburgerOverlay.classList.add("is-open");
  hamburgerButton.classList.add("is-open");

  hamburgerMenu.setAttribute("aria-hidden", "false");
  hamburgerButton.setAttribute("aria-expanded", "true");

  document.body.style.overflow = "hidden";
}

/* ========================================
Close Hamburger Menu
======================================== */

function closeHamburgerMenu() {
  hamburgerMenu.classList.remove("is-open");
  hamburgerOverlay.classList.remove("is-open");
  hamburgerButton.classList.remove("is-open");

  hamburgerMenu.setAttribute("aria-hidden", "true");
  hamburgerButton.setAttribute("aria-expanded", "false");

  document.body.style.overflow = "";
}

/* ========================================
Hamburger Button
======================================== */

hamburgerButton.addEventListener("click", () => {
  if (hamburgerMenu.classList.contains("is-open")) {
    closeHamburgerMenu();
  } else {
    openHamburgerMenu();
  }
});

/* ========================================
Close Button
======================================== */

hamburgerClose.addEventListener("click", closeHamburgerMenu);

/* ========================================
Click Overlay
======================================== */

hamburgerOverlay.addEventListener("click", closeHamburgerMenu);

/* ========================================
Menu Links
======================================== */

hamburgerLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const menuType = link.dataset.menu;

    closeHamburgerMenu();

    if (menuType) {
      event.preventDefault();
      openMenu(menuType);
    }
  });
});

/* ========================================
Escape Key
======================================== */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && hamburgerMenu.classList.contains("is-open")) {
    closeHamburgerMenu();
  }
});

/* ========================================
   Menu Modal
   ======================================== */

const menuItems = document.querySelectorAll(".menu-item");

// const menuModal = document.getElementById("menu-modal");
// const menuModalOverlay = document.querySelector(".menu-modal-overlay");
// const menuModalClose = document.querySelector(".menu-modal-close");

// const modalTitle = document.getElementById("modal-title");
// const modalMainImage = document.getElementById("modal-main-image");
// const modalMenuList = document.getElementById("modal-menu-list");

/* ========================================
   Scroll Reveal (menu-item)
   ======================================== */

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5, rootMargin: "0px 0px -5% 0px" },
  );

  menuItems.forEach((item) => revealObserver.observe(item));
} else {
  /* 非対応ブラウザ向けフォールバック */
  menuItems.forEach((item) => item.classList.add("is-visible"));
}

const menuModal = document.getElementById("menu-modal");
const menuModalOverlay = document.querySelector(".menu-modal-overlay");
const menuModalClose = document.querySelector(".menu-modal-close");

const modalTitle = document.getElementById("modal-title");
const modalMainImage = document.getElementById("modal-main-image");
const modalMenuList = document.getElementById("modal-menu-list");

/* ========================================
   Menu Data
   ======================================== */

const menuData = {
  coffee: {
    title: "Coffee",
    image: "assets/coffee.png",
    items: [
      {
        name: "Flat White",
        description: "Espresso with smooth, velvety milk",
        sizes: {
          S: "$5.50",
          M: "$6.00",
          L: "$6.50",
        },
      },
      {
        name: "Latte",
        description: "Espresso with smooth steamed milk",
        sizes: {
          S: "$5.50",
          M: "$6.00",
          L: "$6.50",
        },
      },
      {
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        sizes: {
          S: "$5.50",
          M: "$6.00",
          L: "$6.50",
        },
      },
      {
        name: "Long Black",
        description: "Rich espresso with hot water",
        sizes: {
          S: "$5.00",
          M: "$5.50",
          L: "$6.00",
        },
      },
      {
        name: "Espresso",
        description: "A rich and concentrated coffee shot",
        sizes: {
          S: "$3.00",
        },
      },
      {
        name: "Doppio",
        description: "A double shot of rich espresso",
        sizes: {
          S: "$3.50",
        },
      },
      {
        name: "Piccolo",
        description: "Espresso with warm, silky milk",
        sizes: {
          S: "$4.50",
        },
      },
      {
        name: "Macchiato",
        description: "Espresso with a touch of milk",
        sizes: {
          S: "$4.50",
        },
      },
      {
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk",
        sizes: {
          S: "$5.50",
          M: "$6.00",
          L: "$6.50",
        },
      },
      {
        name: "White Mocha",
        description: "Espresso with white chocolate and milk",
        sizes: {
          S: "$5.70",
          M: "$6.20",
          L: "$6.70",
        },
      },
      {
        name: "Chai",
        description: "Spiced chai with smooth steamed milk",
        sizes: {
          S: "$5.50",
          M: "$5.50",
          L: "$6.00",
        },
      },
      {
        name: "Dirty Chai",
        description: "Spiced chai with a shot of espresso",
        sizes: {
          S: "$5.50",
          M: "$6.00",
          L: "$6.50",
        },
      },
      {
        name: "Matcha Latte",
        description: "Smooth matcha with steamed milk",
        sizes: {
          S: "$5.50",
          M: "$5.50",
          L: "$6.00",
        },
      },
      {
        name: "Spanish Coffee",
        description: "Rich coffee with sweet, creamy milk",
        sizes: {
          S: "$6.00",
          M: "$6.50",
          L: "$7.00",
        },
      },
      {
        name: "Hot Chocolate",
        description: "Rich chocolate with warm steamed milk",
        sizes: {
          S: "$5.50",
          M: "$5.50",
          L: "$6.00",
        },
      },
      {
        name: "Hot White Chocolate",
        description: "Creamy white chocolate with warm milk",
        sizes: {
          S: "$5.70",
          M: "$6.20",
          L: "$6.70",
        },
      },
      {
        name: "Babychino",
        description: "Warm, foamy milk made for little ones",
        sizes: {
          S: "$5.00",
        },
      },
    ],
  },

  "cold-drinks": {
    title: "Cold drinks",
    image: "assets/cold-drinks.png",
    items: [
      {
        name: "Iced Long Black",
        description: "Espresso with cold water and ice",
        sizes: {
          M: "$6.00",
          L: "$6.50",
        },
      },
      {
        name: "Iced Latte",
        description: "Espresso with cold milk and ice",
        sizes: {
          M: "$6.50",
          L: "$7.00",
        },
      },
      {
        name: "Iced Mocha",
        description: "Espresso, chocolate, milk and ice",
        sizes: {
          M: "$6.50",
          L: "$7.00",
        },
      },
      {
        name: "Iced White Mocha",
        description: "Espresso, white chocolate, milk and ice",
        sizes: {
          M: "$6.70",
          L: "$7.20",
        },
      },
      {
        name: "Iced Chai",
        description: "Spiced chai with cold milk and ice",
        sizes: {
          M: "$6.00",
          L: "$6.50",
        },
      },
      {
        name: "Iced Dirty Chai",
        description: "Spiced chai with espresso, milk and ice",
        sizes: {
          M: "$6.00",
          L: "$6.50",
        },
      },
      {
        name: "Iced Matcha Latte",
        description: "Smooth matcha with cold milk and ice",
        sizes: {
          M: "$6.00",
          L: "$6.50",
        },
      },
      {
        name: "Iced Spanish Coffee",
        description: "Sweet, creamy coffee served over ice",
        sizes: {
          M: "$7.00",
          L: "$7.50",
        },
      },
      {
        name: "Iced Chocolate",
        description: "Creamy chocolate served cold over ice",
        sizes: {
          M: "$6.00",
          L: "$6.50",
        },
      },
      {
        name: "Iced White Chocolate",
        description: "Creamy white chocolate served over ice",
        sizes: {
          M: "$6.20",
          L: "$6.70",
        },
      },
      {
        name: "Strawberry Matcha",
        description: "Sweet strawberry with refreshing iced matcha",
        sizes: {
          M: "$7.00",
          L: "$7.50",
        },
      },
    ],
  },

  sweets: {
    title: "Sweets",
    image: "assets/sweets.png",
    items: [
      {
        name: "Danish",
        description: "Flaky and buttery Danish pastry",
        price: "$5.00~",
      },
      {
        name: "Muffins",
        description: "Blueberry / Butterscotch / White Choco Raspberry",
        price: "$6.00~",
      },
      {
        name: "Banana Bread",
        description: "Soft and moist banana bread with butter",
        price: "$6.00",
      },
      {
        name: "Cheesecake",
        description: "Rich and creamy cheesecake",
        price: "$6.50",
      },
      {
        name: "Brownie",
        description: "Rich and fudgy chocolate brownie",
        price: "$6.00",
      },
      {
        name: "Dessert Cake",
        description: "A soft and delicious slice of cake",
        price: "$7.00",
      },
      {
        name: "Acai Bowl",
        description: "Acai and topped with granola and fresh fruit",
        price: "$14.95~",
      },
    ],
  },

  "light-meals": {
    title: "Light meals",
    image: "assets/meals.png",
    items: [
      {
        name: "Toast",
        description: "Raisin / Vegemite",
        price: "$2.50~",
      },
      {
        name: "Avocado Toast",
        description: "Creamy avocado on freshly toasted bread",
        price: "$6.00",
      },
      {
        name: "Toasties",
        description: "Turkey Cheese Tomato / Ham Cheese Tomato / Ham Cheese",
        price: "$5.00~",
      },
      {
        name: "Fresh Sandwich",
        description: "Beef / Salami / Turkey / Ham / Egg Mayo",
        price: "$7.00",
      },
      {
        name: "Breakfast Wrap",
        description: "Spicy Chicken / Chilli Mayo Chicken / Bacon / Vego",
        price: "$9.95",
      },
      {
        name: "Pies",
        description: "Beef Pie / Sausage Roll / Spinach Feta Roll",
        price: "$7.50~",
      },
    ],
  },
};

/* ========================================
   Open Modal
   ======================================== */

function openMenu(menuType) {
  const menu = menuData[menuType];

  if (!menu) {
    return;
  }

  /* Title */

  modalTitle.textContent = menu.title;

  /* Main image */

  modalMainImage.src = menu.image;
  modalMainImage.alt = menu.title;

  /* Clear previous menu */

  modalMenuList.innerHTML = "";

  /* Create menu items */

  menu.items.forEach((item) => {
    const menuItem = document.createElement("div");

    menuItem.className = "modal-menu-item";

    let priceHTML = "";

    // サイズ展開がある場合
    if (item.sizes) {
      const sizePrices = Object.entries(item.sizes)
        .map(([size, price]) => {
          return `
          <span class="modal-size-price">
            <span class="modal-size">${size}</span>
            <span>${price}</span>
          </span>
        `;
        })
        .join("");

      priceHTML = `
      <div class="modal-menu-prices">
        ${sizePrices}
      </div>
    `;
    }

    // サイズ展開がない場合
    else if (item.price) {
      priceHTML = `
      <span class="modal-menu-price">
        ${item.price}
      </span>
    `;
    }

    menuItem.innerHTML = `
    <div>
      <p class="modal-menu-name">${item.name}</p>

      <p class="modal-menu-description">
        ${item.description}
      </p>
    </div>

    ${priceHTML}
  `;

    modalMenuList.appendChild(menuItem);
  });

  /* Open */

  menuModal.classList.add("is-open");

  menuModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  /* Move focus to close button */

  menuModalClose.focus();
}

/* ========================================
   Close Modal
   ======================================== */

function closeMenu() {
  menuModal.classList.remove("is-open");

  menuModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

/* ========================================
   Click Menu
   ======================================== */

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const menuType = item.dataset.menu;

    openMenu(menuType);
  });

  /* Keyboard */

  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      const menuType = item.dataset.menu;

      openMenu(menuType);
    }
  });
});

/* ========================================
   Close Button
   ======================================== */

menuModalClose.addEventListener("click", closeMenu);

/* ========================================
   Click Outside
   ======================================== */

menuModalOverlay.addEventListener("click", closeMenu);

/* ========================================
   Escape Key
   ======================================== */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuModal.classList.contains("is-open")) {
    closeMenu();
  }
});
