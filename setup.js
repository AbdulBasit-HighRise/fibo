const fs = require("fs");
const path = require("path");

const base = process.cwd();

// Helper function
function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log("✅ Created:", dirPath);
  }
}

function createFile(filePath, content = "") {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log("📄 File:", filePath);
  }
}

// APP STRUCTURE
const structure = {
  app: {
    "page.tsx": "// Home Page",
    about: {
      "page.tsx": "// About Page",
    },
    services: {
      "page.tsx": "// Services Page",
      "web-development": {
        "page.tsx": "// Web Dev Service Page",
      },
      "ui-ux": {
        "page.tsx": "// UI UX Page",
      },
    },
    portfolio: {
      "page.tsx": "// Portfolio Page",
      "[slug]": {
        "page.tsx": "// Project Detail Page",
      },
    },
    blog: {
      "page.tsx": "// Blog Page",
      "[slug]": {
        "page.tsx": "// Blog Detail",
      },
    },
    contact: {
      "page.tsx": "// Contact Page",
    },
  },

  components: {
    layout: {
      "Navbar.tsx": "",
      "Footer.tsx": "",
    },
    sections: {
      "Hero.tsx": "",
      "Services.tsx": "",
      "Portfolio.tsx": "",
      "CTA.tsx": "",
      "Testimonials.tsx": "",
    },
    ui: {
      "Button.tsx": "",
      "Card.tsx": "",
    },
  },

  lib: {
    "data.ts": "",
  },

  styles: {
    "globals.css": "",
  },

  public: {
    images: {},
  },
};

// Recursive creator
function createStructure(basePath, obj) {
  for (const key in obj) {
    const fullPath = path.join(basePath, key);

    if (typeof obj[key] === "string") {
      createFile(fullPath, obj[key]);
    } else {
      createDir(fullPath);
      createStructure(fullPath, obj[key]);
    }
  }
}

// RUN
createStructure(base, structure);

console.log("\n🎉 Folder structure created successfully!");