export const recapContent = {
  1: [
    {
      id: "sc_day_1",
      title: "HTML",
      topics: [

        {
          id: "html_t1",
          title: "Introduction to HTML",
          explanation: "HTML stands for HyperText Markup Language.\nIt is the foundation of every website on the internet.\nHTML defines the structure and layout of web pages.\nIt is not a programming language because it does not perform logical operations.\nInstead, it is a markup language that structures content using tags.\nHTML works together with CSS (for styling) and JavaScript (for interactivity).\nEvery browser like Chrome, Edge, or Firefox reads HTML and renders a visual page.\nHTML5 is the latest version and introduced semantic tags and modern APIs.\nUnderstanding HTML deeply is mandatory before learning frontend frameworks like React, Angular, or Vue."
        },

        {
          id: "html_t2",
          title: "HTML Document Structure (Practical)",
          explanation: "Every HTML document follows a standard skeleton structure.\nThis ensures proper browser rendering and compatibility.\nThe document starts with DOCTYPE declaration.\nThe root element is html.\nHead contains metadata.\nBody contains visible content.\nA well-structured document improves SEO and maintainability.",
          examples: [
            {
              language: "html",
              code: "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>My Page</title>\n</head>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>",
              explanation: "DOCTYPE defines HTML5 version.\nhtml is root element.\nhead contains metadata.\nmeta charset defines encoding.\nviewport helps responsive design.\ntitle sets browser tab name.\nbody contains visible content."
            }
          ]
        },

        {
          id: "html_t3",
          title: "HTML Elements & Tags (Theory)",
          explanation: "An HTML element consists of an opening tag, content, and closing tag.\nExample: p Hello p.\nSome tags are self-closing like img and br.\nTags must be properly nested.\nImproper nesting causes unpredictable rendering.\nElements can contain attributes.\nBlock elements take full width.\nInline elements take only required space.\nUnderstanding tag behavior is crucial for layout design."
        },

        {
          id: "html_t4",
          title: "Headings and Paragraphs (Practical)",
          explanation: "Headings define content hierarchy.\nh1 is highest importance.\nh6 is lowest importance.\nParagraph tag groups textual content.\nProper heading structure improves SEO ranking.\nSearch engines analyze headings to understand page structure.",
          examples: [
            {
              language: "html",
              code: "<h1>Main Title</h1>\n<h2>Sub Title</h2>\n<p>This is a paragraph explaining content.</p>",
              explanation: "h1 defines primary heading.\nh2 defines subsection.\np defines paragraph.\nProper hierarchy improves accessibility."
            }
          ]
        },

        {
          id: "html_t5",
          title: "Text Formatting Tags (Theory)",
          explanation: "Text formatting tags enhance readability.\nstrong gives semantic importance.\nem gives emphasis.\nb and i provide visual styling but no semantic meaning.\nmark highlights text.\ndel represents deleted content.\nsub and sup are used for scientific formulas.\nUsing semantic formatting improves accessibility."
        },

        {
          id: "html_t6",
          title: "Lists (Practical)",
          explanation: "Lists organize grouped data.\nUnordered lists use bullets.\nOrdered lists use numbers.\nDescription lists define terms and definitions.\nLists are used in navigation menus and feature sections.",
          examples: [
            {
              language: "html",
              code: "<ul>\n<li>HTML</li>\n<li>CSS</li>\n</ul>\n\n<ol>\n<li>Step 1</li>\n<li>Step 2</li>\n</ol>",
              explanation: "ul creates bullet list.\nol creates numbered list.\nli defines list item."
            }
          ]
        },

        {
          id: "html_t7",
          title: "Links and Navigation (Practical)",
          explanation: "Anchor tag creates hyperlinks.\nLinks connect web pages.\nAbsolute URLs link external sites.\nRelative URLs link internal pages.\ntarget blank opens new tab.\nNavigation improves usability.",
          examples: [
            {
              language: "html",
              code: "<a href=\"https://google.com\" target=\"_blank\">Visit Google</a>",
              explanation: "href defines link destination.\ntarget blank opens in new tab."
            }
          ]
        },

        {
          id: "html_t8",
          title: "Images (Practical)",
          explanation: "Images enhance visual presentation.\nimg is self-closing tag.\nsrc defines image path.\nalt improves accessibility and SEO.\nWidth and height control size.\nOptimized images improve performance.",
          examples: [
            {
              language: "html",
              code: "<img src=\"image.jpg\" alt=\"Sample\" width=\"200\">",
              explanation: "src sets image path.\nalt provides alternative text.\nwidth controls size."
            }
          ]
        },

        {
          id: "html_t9",
          title: "Tables (Practical)",
          explanation: "Tables display structured tabular data.\nThey should not be used for layout.\ntr defines row.\nth defines header.\ntd defines data cell.\ncolspan and rowspan merge cells.",
          examples: [
            {
              language: "html",
              code: "<table border=\"1\">\n<tr>\n<th>Name</th>\n<th>Age</th>\n</tr>\n<tr>\n<td>John</td>\n<td>25</td>\n</tr>\n</table>",
              explanation: "table defines table.\ntr defines row.\nth defines header cell.\ntd defines data cell."
            }
          ]
        },

        {
          id: "html_t10",
          title: "Forms and Input Elements (Practical)",
          explanation: "Forms collect user data.\nUsed in login and registration systems.\nForm uses GET or POST method.\nDifferent input types collect different data.\nValidation ensures correct submission.",
          examples: [
            {
              language: "html",
              code: "<form method=\"POST\">\n<label>Email:</label>\n<input type=\"email\" required>\n<input type=\"submit\">\n</form>",
              explanation: "form wraps input fields.\nmethod defines HTTP method.\nrequired ensures validation."
            }
          ]
        },

        {
          id: "html_t11",
          title: "HTML Attributes (Theory)",
          explanation: "Attributes provide additional information about elements.\nCommon attributes include id, class, style, title.\nGlobal attributes apply to all elements.\nAttributes help in styling and scripting.\nCorrect usage improves maintainability."
        },

        {
          id: "html_t12",
          title: "Semantic HTML5 (Theory)",
          explanation: "Semantic elements describe content meaning.\nExamples include header, footer, article, section, nav, main.\nThey improve SEO and accessibility.\nSearch engines understand semantic structure better.\nModern web development strongly recommends semantic usage."
        },

        {
          id: "html_t13",
          title: "Multimedia (Practical)",
          explanation: "HTML supports audio and video embedding.\nControls attribute provides play and pause options.\nMultiple source tags ensure compatibility.\nIframe embeds external content like YouTube.",
          examples: [
            {
              language: "html",
              code: "<video controls width=\"300\">\n<source src=\"video.mp4\" type=\"video/mp4\">\n</video>",
              explanation: "video embeds media.\ncontrols shows playback buttons.\nsource defines media file."
            }
          ]
        },

        {
          id: "html_t14",
          title: "Meta Tags (Theory)",
          explanation: "Meta tags provide metadata about webpage.\nCharset defines encoding.\nViewport ensures responsive behavior.\nDescription improves SEO ranking.\nKeywords describe page content.\nMeta tags are placed inside head section."
        },

        {
          id: "html_t15",
          title: "HTML Entities (Theory)",
          explanation: "Entities display reserved characters.\nFor example less than symbol uses entity code.\nNon-breaking space prevents line break.\nCopyright symbol uses entity.\nEntities ensure correct rendering."
        },

        {
          id: "html_t16",
          title: "Global Attributes (Theory)",
          explanation: "Global attributes apply to all elements.\nExamples include hidden, draggable, contenteditable, spellcheck.\nTabindex controls keyboard navigation.\nThey improve interactivity and accessibility."
        },

        {
          id: "html_t17",
          title: "HTML APIs (Theory)",
          explanation: "HTML5 introduced browser APIs.\nGeolocation API fetches user location.\nWeb Storage API stores data locally.\nDrag and Drop API allows draggable elements.\nWeb Workers run scripts in background.\nThese APIs improve performance and interactivity."
        }

      ]
    }
  ],

  2: [
    {
      id: "sc_day_2",
      title: "CSS – Complete Core Concepts",
      topics: [

        {
          id: "css_1",
          title: "Introduction to CSS",
          explanation: "CSS stands for Cascading Style Sheets.\nIt is used to style HTML elements and control visual presentation of web pages.\nWhile HTML defines structure, CSS defines design and layout.\nCSS controls colors, spacing, alignment, fonts, responsiveness, and animations.\nThe term Cascading means styles are applied based on priority rules.\nCSS allows separation of content and design, improving maintainability.\nModern web applications rely heavily on CSS for user experience.\nWithout CSS, websites appear plain and unstructured.\nLearning CSS is essential before advanced frontend development."
        },

        {
          id: "css_2",
          title: "CSS Syntax",
          explanation: "CSS follows a rule-based syntax.\nEach rule consists of a selector and a declaration block.\nThe declaration block contains properties and values.\nProperties define what to style.\nValues define how it should appear.\nEach declaration ends with a semicolon.\nProper syntax ensures browser correctly applies styles.",
          examples: [
            {
              language: "css",
              code: "p {\n  color: blue;\n  font-size: 16px;\n}",
              explanation: "p is selector.\ncolor and font-size are properties.\nblue and 16px are values.\nCurly braces wrap declaration block."
            }
          ]
        },

        {
          id: "css_3",
          title: "Types of CSS (Inline, Internal, External)",
          explanation: "CSS can be applied in three different ways.\nInline CSS is written directly inside HTML element using style attribute.\nInternal CSS is written inside style tag in head section.\nExternal CSS is written in separate .css file and linked using link tag.\nExternal CSS is recommended for large projects.\nIt improves reusability and maintainability.",
          examples: [
            {
              language: "html",
              code: "<!-- Inline -->\n<p style=\"color:red;\">Hello</p>\n\n<!-- Internal -->\n<style>\np { color: blue; }\n</style>\n\n<!-- External -->\n<link rel=\"stylesheet\" href=\"style.css\">",
              explanation: "Inline affects single element.\nInternal affects entire page.\nExternal affects multiple pages."
            }
          ]
        },

        {
          id: "css_4",
          title: "CSS Comments",
          explanation: "Comments are used to explain code.\nThey are ignored by browser.\nComments improve readability.\nUseful for large projects.\nThey help teams understand styling logic.",
          examples: [
            {
              language: "css",
              code: "/* This is a comment */\np {\n  color: green;\n}",
              explanation: "Text inside slash star and star slash is ignored by browser."
            }
          ]
        },

        {
          id: "css_5",
          title: "CSS Selectors",
          explanation: "Selectors target HTML elements.\nThey define which element receives style.\nUnderstanding selectors is critical for styling control.\nDifferent types provide flexibility in targeting elements."
        },

        {
          id: "css_6",
          title: "Simple Selectors",
          explanation: "Simple selectors target elements directly.\nElement selector targets by tag name.\nClass selector uses dot notation.\nID selector uses hash notation.\nUniversal selector selects all elements.",
          examples: [
            {
              language: "css",
              code: "p { \ncolor: red;\n}\n.myClass{\ncolor: blue; \n}\n#myId { \ncolor: green;\n }\n* { \nmargin: 0; \n}",
              explanation: "p selects all paragraph tags.\n'.myClass' selects elements with class.\n#myId selects element with ID.\n* selects all elements."
            }
          ]
        },

        {
          id: "css_7",
          title: "Combinator Selectors",
          explanation: "Combinators define relationship between elements.\nDescendant selector targets nested elements.\nChild selector targets direct children.\nAdjacent sibling targets next sibling.\nGeneral sibling targets all siblings.",
          examples: [
            {
              language: "css",
              code: "div p { color: red; }\ndiv > p { color: blue; }\nh1 + p { color: green; }\nh1 ~ p { color: orange; }",
              explanation: "div p selects all p inside div.\ndiv > p selects direct child.\nh1 + p selects immediate sibling.\nh1 ~ p selects all siblings."
            }
          ]
        },

        {
          id: "css_8",
          title: "Attribute Selectors",
          explanation: "Attribute selectors target elements based on attribute values.\nUseful for forms and dynamic styling.\nCan match exact value or partial value.",
          examples: [
            {
              language: "css",
              code: "input[type=\"text\"] { border: 2px solid blue; }",
              explanation: "Targets input elements where type equals text."
            }
          ]
        },

        {
          id: "css_9",
          title: "Pseudo-classes",
          explanation: "Pseudo-classes define special state of elements.\nThey apply style when condition is met.\nCommon examples include hover, active, focus, nth-child.\nUsed heavily in interactive design.",
          examples: [
            {
              language: "css",
              code: "a:hover { color: red; }\nli:nth-child(2) { color: blue; }",
              explanation: "hover applies when mouse is over element.\nnth-child selects specific child."
            }
          ]
        },

        {
          id: "css_10",
          title: "Pseudo-elements",
          explanation: "Pseudo-elements style specific part of element.\nCommon examples include before, after, first-line, first-letter.\nUsed to add decorative content.",
          examples: [
            {
              language: "css",
              code: "p::first-letter { font-size: 30px; }\np::before { content: \"Note: \"; }",
              explanation: "first-letter styles first character.\nbefore inserts content before element."
            }
          ]
        },

        {
          id: "css_11",
          title: "CSS Colors",
          explanation: "Colors define visual identity.\nCan be defined using names, HEX, RGB, RGBA, HSL.\nRGBA allows transparency.\nColor contrast affects accessibility."
        },

        {
          id: "css_12",
          title: "CSS Backgrounds",
          explanation: "Background properties style element background.\nIncludes background-color, background-image, background-repeat, background-size.\nUsed for design and branding."
        },

        {
          id: "css_13",
          title: "CSS Gradients",
          explanation: "Gradients create smooth color transitions.\nLinear gradients move in straight line.\nRadial gradients move in circular pattern.\nGradients improve modern UI aesthetics.",
          examples: [
            {
              language: "css",
              code: "div {\n  background: linear-gradient(to right, red, blue);\n}",
              explanation: "Creates smooth transition from red to blue."
            }
          ]
        },

        {
          id: "css_14",
          title: "CSS Units",
          explanation: "CSS supports absolute and relative units.\nAbsolute units include px.\nRelative units include %, em, rem, vh, vw.\nRelative units improve responsiveness.\nUnderstanding units ensures scalable UI."
        },

        {
          id: "css_15",
          title: "CSS Box Model",
          explanation: "Every element follows box model structure.\nIt includes content, padding, border, and margin.\nUnderstanding box model prevents layout issues."
        },

        {
          id: "css_16",
          title: "Margin",
          explanation: "Margin creates outer spacing around element.\nIt separates elements from each other.\nCan be set individually or using shorthand.",
          examples: [
            {
              language: "css",
              code: "div { margin: 20px; }",
              explanation: "Adds 20px outer spacing."
            }
          ]
        },

        {
          id: "css_17",
          title: "Padding",
          explanation: "Padding creates inner spacing between content and border.\nImproves readability.\nCan be controlled individually.",
          examples: [
            {
              language: "css",
              code: "div { padding: 15px; }",
              explanation: "Adds 15px space inside border."
            }
          ]
        },

        {
          id: "css_18",
          title: "Borders and Outline",
          explanation: "Border creates visible boundary around element.\nOutline is similar but does not affect layout.\nUseful for highlighting elements.",
          examples: [
            {
              language: "css",
              code: "div {\n  border: 2px solid black;\n  outline: 3px dashed red;\n}",
              explanation: "Border affects layout.\nOutline appears outside border."
            }
          ]
        },

        {
          id: "css_19",
          title: "Width and Height",
          explanation: "Width and height define element size.\nCan use px, %, vh, vw.\nImportant for responsive layouts.",
          examples: [
            {
              language: "css",
              code: "div {\n  width: 200px;\n  height: 100px;\n}",
              explanation: "Sets fixed dimensions."
            }
          ]
        },

        {
          id: "css_20",
          title: "CSS Text and Fonts",
          explanation: "Text properties control alignment, spacing, decoration.\nFont properties control style and appearance.\nTypography directly affects user experience.",
          examples: [
            {
              language: "css",
              code: "p {\n  text-align: center;\n  font-family: Arial;\n  font-size: 18px;\n}",
              explanation: "Centers text.\nSets font and size."
            }
          ]
        },

        {
          id: "css_21",
          title: "Google Fonts",
          explanation: "Google Fonts provides free web fonts.\nThey improve design aesthetics.\nLinked using link tag.\nEnsures cross-browser compatibility.",
          examples: [
            {
              language: "html",
              code: "<link href=\"https://fonts.googleapis.com/css2?family=Roboto\" rel=\"stylesheet\">",
              explanation: "Imports Roboto font from Google."
            }
          ]
        },

        {
          id: "css_22",
          title: "CSS Icons",
          explanation: "Icons improve UI clarity.\nCan use icon libraries like Font Awesome.\nUsed in navigation and buttons."
        },

        {
          id: "css_23",
          title: "CSS Links and Lists",
          explanation: "Links can be styled using pseudo-classes.\nLists can be customized using list-style property.",
          examples: [
            {
              language: "css",
              code: "a { text-decoration: none; }\nul { list-style: square; }",
              explanation: "Removes underline.\nChanges bullet style."
            }
          ]
        },

        {
          id: "css_24",
          title: "CSS Tables",
          explanation: "Tables can be styled using border-collapse, padding, and text alignment.\nImproves readability.",
          examples: [
            {
              language: "css",
              code: "table {\n  border-collapse: collapse;\n}",
              explanation: "Removes double borders."
            }
          ]
        },

        {
          id: "css_25",
          title: "Display, Visibility and Position",
          explanation: "Display controls layout behavior.\nVisibility controls element visibility.\nPosition controls element placement.\nStatic is default.\nRelative moves relative to normal position.\nAbsolute positions relative to parent.\nFixed stays relative to viewport.\nUnderstanding positioning is critical for UI design.",
          examples: [
            {
              language: "css",
              code: "div {\n  position: relative;\n  top: 20px;\n}",
              explanation: "Moves element 20px down from normal position."
            }
          ]
        }

      ]
    }
  ],

 3: [
  {
    id: "sc_day_4",
    title: "JavaScript – Core + Deep Core Concepts",
    topics: [

      {
        id: "js_1",
        title: "Variables (var, let, const)",
        explanation: "Variables are used to store data so that it can be reused later in a program.\nIn JavaScript, variables can be declared using var, let, and const.\nThe difference between them is not just syntax but behavior in memory and scope.\n\nvar is function-scoped, meaning it is accessible throughout the function in which it is declared.\nIt can be redeclared and reassigned.\nBecause of this flexibility, it can cause accidental overwrites and bugs in large applications.\n\nlet was introduced in ES6.\nIt is block-scoped, meaning it only exists inside the curly braces where it is declared.\nIt can be reassigned but cannot be redeclared in the same scope.\nThis prevents accidental duplication of variables.\n\nconst is also block-scoped.\nIt must be initialized at the time of declaration.\nIt cannot be reassigned.\nHowever, if const holds an object or array, the contents can still be modified.\n\nIn modern JavaScript development, const is preferred by default.\nUse let only when you know the value will change.\nAvoid var in modern applications due to unpredictable behavior caused by hoisting and scope leakage.",
        examples: [
          {
            language: "javascript",
            code: "var a = 10;\nlet b = 20;\nconst c = 30;\n\nb = 25; // allowed\n// c = 35; // Error",
            explanation: "var allows redeclaration.\nlet allows reassignment but not redeclaration.\nconst cannot be reassigned.\nBlock scope applies to let and const."
          }
        ]
      },

      {
        id: "js_2",
        title: "Data Types (Primitive & Non-Primitive)",
        explanation: "JavaScript data types define what kind of value a variable holds.\nUnderstanding data types is critical because JavaScript is dynamically typed.\nThis means a variable can change type during execution.\n\nPrimitive data types include string, number, boolean, null, undefined, symbol, and bigint.\nPrimitive values are immutable.\nWhen assigned to another variable, a copy is created.\n\nNon-primitive data types include objects, arrays, and functions.\nThese are reference types.\nWhen assigned to another variable, the reference (memory address) is copied, not the actual value.\n\nThis difference between value copy and reference copy is extremely important.\nIt affects how changes propagate across variables.\nMisunderstanding this concept leads to common bugs in real-world applications."
      },

      {
        id: "js_3",
        title: "Type Coercion",
        explanation: "Type coercion is the automatic or manual conversion of one data type into another.\nJavaScript performs implicit coercion in many operations.\nThis is one of the most confusing aspects for beginners.\n\nFor example, when using the plus operator with a string, JavaScript converts numbers to strings.\nWhen using minus operator, JavaScript converts strings to numbers.\n\nImplicit coercion can lead to unexpected results.\nTherefore, developers prefer strict equality (===) instead of loose equality (==).\n\nExplicit coercion is safer and clearer.\nIt is done using Number(), String(), Boolean().\nUnderstanding coercion is necessary to avoid logical errors in production systems.",
        examples: [
          {
            language: "javascript",
            code: "console.log('5' + 2); // '52'\nconsole.log('5' - 2); // 3\nconsole.log(Number('5')); // 5",
            explanation: "Plus converts number to string.\nMinus converts string to number.\nNumber() explicitly converts string to number."
          }
        ]
      },

      {
        id: "js_4",
        title: "Scope (Global, Function, Block)",
        explanation: "Scope defines where a variable is accessible.\nGlobal scope variables are accessible everywhere in the program.\nFunction scope variables are accessible only inside the function.\nBlock scope applies to variables declared with let and const.\n\nBlock scope means a variable declared inside an if statement or loop cannot be accessed outside that block.\n\nUnderstanding scope prevents variable pollution.\nIn large applications, improper scope handling causes naming conflicts and unpredictable behavior.\nScope also directly relates to closures and lexical environment."
      },

      {
        id: "js_5",
        title: "Hoisting",
        explanation: "Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the memory creation phase.\nBefore code execution begins, JavaScript engine scans the code.\nIt allocates memory for variables and functions.\n\nvar variables are hoisted and initialized with undefined.\nlet and const are hoisted but not initialized.\nThey remain in Temporal Dead Zone.\n\nFunction declarations are completely hoisted with their definition.\nFunction expressions are not.\nUnderstanding hoisting explains why some variables appear undefined instead of throwing errors."
      },

      {
        id: "js_6",
        title: "Closures",
        explanation: "A closure is formed when an inner function remembers variables from its outer function even after the outer function has finished executing.\nThis happens because functions in JavaScript carry their lexical environment.\n\nClosures allow data privacy and encapsulation.\nThey are heavily used in modules, callbacks, and event handlers.\n\nUnderstanding closures requires understanding scope chain and execution context.\nClosures are powerful but must be used carefully to avoid memory leaks."
      },

      {
        id: "js_7",
        title: "Execution Context",
        explanation: "Execution context is the environment in which JavaScript code runs.\nThere are two phases: memory creation phase and execution phase.\nIn memory phase, variables are stored.\nIn execution phase, code runs line by line.\n\nThere is one global execution context.\nEach function call creates a new execution context.\nUnderstanding execution context helps in understanding hoisting, scope, and call stack behavior."
      },

      {
        id: "js_8",
        title: "Call Stack",
        explanation: "Call stack is a data structure that keeps track of function calls.\nWhen a function is invoked, it is pushed onto the stack.\nWhen it completes, it is removed.\nJavaScript follows Last In First Out principle.\n\nIf too many functions are added without completing, stack overflow error occurs.\nUnderstanding call stack is important for debugging recursive functions."
      },

      {
        id: "js_9",
        title: "Event Loop",
        explanation: "JavaScript is single-threaded.\nIt can execute only one task at a time.\nHowever, it handles asynchronous operations using event loop.\n\nWhen asynchronous operations like setTimeout or fetch are executed, they move to Web APIs.\nAfter completion, callbacks go to callback queue.\nEvent loop checks if call stack is empty.\nIf empty, it pushes callback into stack.\n\nThis mechanism allows JavaScript to handle non-blocking operations efficiently."
      },

      {
        id: "js_10",
        title: "this Keyword",
        explanation: "The this keyword refers to the object that is currently executing the function.\nIts value depends on how the function is called.\n\nIn global scope, this refers to window object in browsers.\nIn object methods, this refers to that object.\nIn arrow functions, this does not have its own binding.\nIt inherits from parent scope.\n\nUnderstanding this is critical for object-oriented programming and event handling."
      },

      {
        id: "js_11",
        title: "Strict Mode",
        explanation: "Strict mode enables stricter error checking.\nIt is activated using 'use strict'.\n\nIt prevents accidental creation of global variables.\nDisallows duplicate parameters.\nPrevents usage of reserved keywords.\nThrows errors for unsafe actions.\n\nStrict mode improves code reliability and security.\nIt is recommended in production applications."
      }

    ]
  }
],

  4: [
    {
  id: "sc_day_4_complete",
  title: "JavaScript Concepts",
  topics: [

    {
      id: "js4_1",
      title: "Objects",
      explanation: "Objects are complex data structures used to store data in key-value format.\nObjects are reference types, meaning they are stored in heap memory and accessed via reference.\nWhen you assign an object to another variable, both variables point to the same memory location.\nThis is why modifying one affects the other.\n\nObjects allow grouping of related properties and behavior.\nThey form the foundation of JavaScript applications, especially in frameworks like React.\n\nInternally, JavaScript objects use hash maps for property storage.\nKeys are automatically converted to strings (except Symbols).",
      examples: [
        {
          language: "javascript",
          code: "const user = { name: 'Lokesh', age: 22 };\nconst copy = user;\ncopy.age = 25;\nconsole.log(user.age); // 25",
          explanation: "Both variables reference the same object in memory."
        }
      ]
    },

    {
      id: "js4_2",
      title: "Object Methods",
      explanation: "Object methods are functions stored as object properties.\nInside methods, 'this' refers to the object calling the method.\nThe value of 'this' depends on how the function is called.\nArrow functions do not bind their own 'this'.",
      examples: [
        {
          language: "javascript",
          code: "const user = {\n  name: 'Lokesh',\n  greet() {\n    return `Hello ${this.name}`;\n  }\n};\nconsole.log(user.greet());",
          explanation: "'this' refers to user object."
        }
      ]
    },

    {
      id: "js4_3",
      title: "Object Destructuring",
      explanation: "Destructuring extracts properties from objects into variables.\nIt reduces repetitive object.property usage.\nWidely used in React props and API responses.",
      examples: [
        {
          language: "javascript",
          code: "const user = { name: 'Lokesh', age: 22 };\nconst { name, age } = user;\nconsole.log(name);",
          explanation: "Extracts name and age into variables."
        }
      ]
    },

    {
      id: "js4_4",
      title: "Array Methods (map, filter, reduce)",
      explanation: "map transforms elements.\nfilter selects elements.\nreduce accumulates values.\nThese are immutable methods and return new arrays.\nThey enable functional programming style.",
      examples: [
        {
          language: "javascript",
          code: "const nums = [1,2,3,4];\nconst doubled = nums.map(n => n*2);\nconst even = nums.filter(n => n%2===0);\nconst sum = nums.reduce((acc,n)=>acc+n,0);",
          explanation: "map modifies.\nfilter selects.\nreduce combines."
        }
      ]
    },

    {
      id: "js4_5",
      title: "Spread vs Rest Operator",
      explanation: "Spread expands elements.\nRest collects elements.\nBoth use same syntax but different behavior depending on context.",
      examples: [
        {
          language: "javascript",
          code: "const arr = [1,2,3];\nconst copy = [...arr];\n\nfunction sum(...nums){\n  return nums.reduce((a,b)=>a+b);\n}",
          explanation: "Spread copies array.\nRest collects parameters."
        }
      ]
    },

    {
      id: "js4_6",
      title: "Shallow Copy vs Deep Copy",
      explanation: "Shallow copy copies first-level properties only.\nNested objects remain shared.\nDeep copy duplicates entire structure.\nJSON methods create deep copy but fail for functions and undefined.",
      examples: [
        {
          language: "javascript",
          code: "const obj = { a:1, b:{c:2} };\nconst shallow = {...obj};\nshallow.b.c = 5;\nconsole.log(obj.b.c); // 5",
          explanation: "Nested object still shared."
        }
      ]
    },

    {
      id: "js4_7",
      title: "Promises & Promise Chaining",
      explanation: "Promise represents future result.\nStates: pending, fulfilled, rejected.\n.then() handles success.\n.catch() handles errors.\nChaining avoids callback nesting.\nEach .then returns new promise.",
      examples: [
        {
          language: "javascript",
          code: "fetch('https://api.example.com')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));",
          explanation: "Each then passes result forward."
        }
      ]
    },

    {
      id: "js4_8",
      title: "async/await",
      explanation: "async makes function return promise.\nawait pauses execution until promise resolves.\nMakes async code readable like synchronous code.",
      examples: [
        {
          language: "javascript",
          code: "async function getData(){\n  const res = await fetch('https://api.example.com');\n  const data = await res.json();\n  console.log(data);\n}",
          explanation: "Cleaner version of promise chaining."
        }
      ]
    },

    {
      id: "js4_9",
      title: "setTimeout & Event Loop",
      explanation: "setTimeout schedules function in macrotask queue.\nEvent loop pushes callback to stack when stack is empty.\nMicrotasks (Promises) run before macrotasks.",
      examples: [
        {
          language: "javascript",
          code: "console.log('Start');\nsetTimeout(()=>console.log('Timeout'),0);\nPromise.resolve().then(()=>console.log('Promise'));\nconsole.log('End');",
          explanation: "Output: Start, End, Promise, Timeout"
        }
      ]
    },

    {
      id: "js4_10",
      title: "DOM Manipulation",
      explanation: "DOM is tree representation of HTML.\nJavaScript selects elements using querySelector.\nCan change content, style, attributes dynamically.",
      examples: [
        {
          language: "javascript",
          code: "const btn = document.querySelector('#btn');\nbtn.textContent = 'Clicked';",
          explanation: "Modifies DOM element."
        }
      ]
    },

    {
      id: "js4_11",
      title: "Event Bubbling & Delegation",
      explanation: "Bubbling means event moves from child to parent.\nCapturing is reverse order.\nDelegation attaches single listener to parent to handle child events.\nImproves performance.",
      examples: [
        {
          language: "javascript",
          code: "document.querySelector('#parent').addEventListener('click', (e)=>{\n  if(e.target.tagName === 'BUTTON'){\n    console.log('Button clicked');\n  }\n});",
          explanation: "Event delegation example."
        }
      ]
    },

    {
      id: "js4_12",
      title: "Local Storage",
      explanation: "Stores key-value pairs in browser.\nData persists even after closing browser.\nValues stored as strings.",
      examples: [
        {
          language: "javascript",
          code: "localStorage.setItem('name','Lokesh');\nconsole.log(localStorage.getItem('name'));",
          explanation: "Stores and retrieves data."
        }
      ]
    },

    {
      id: "js4_13",
      title: "Modules (import/export)",
      explanation: "Modules split code into reusable files.\nexport makes variables/functions available.\nimport consumes them.\nImproves maintainability.",
      examples: [
        {
          language: "javascript",
          code: "// file1.js\nexport const name = 'Lokesh';\n\n// file2.js\nimport { name } from './file1.js';",
          explanation: "Basic module usage."
        }
      ]
    }

  ]
}
  ],

  5: [
    {
      id: "sc_day_5",
      title: "Intro to GenAI",
      topics: [
        {
          id: "sc_day_5_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Intro to GenAI\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_5_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Intro to GenAI\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_5_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Intro to GenAI\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  6: [
    {
      id: "sc_day_6",
      title: "Introduction to GenAI in Web Development",
      topics: [
        {
          id: "sc_day_6_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to GenAI in Web Development\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_6_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to GenAI in Web Development\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_6_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to GenAI in Web Development\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  7: [
    {
      id: "sc_day_7",
      title: "Getting started with Frontend",
      topics: [
        {
          id: "sc_day_7_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Getting started with Frontend\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_7_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Getting started with Frontend\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_7_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Getting started with Frontend\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  8: [
    {
      id: "sc_day_8",
      title: "Introduction to HTML",
      topics: [
        {
          id: "sc_day_8_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to HTML\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_8_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to HTML\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_8_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to HTML\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  9: [
    {
      id: "sc_day_9",
      title: "Introduction to JavaScript",
      topics: [
        {
          id: "sc_day_9_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to JavaScript\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_9_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to JavaScript\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_9_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to JavaScript\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  10: [
    {
      id: "sc_day_10",
      title: "Leveraging GenAI for Accelerated Learning",
      topics: [
        {
          id: "sc_day_10_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Leveraging GenAI for Accelerated Learning\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_10_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Leveraging GenAI for Accelerated Learning\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_10_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Leveraging GenAI for Accelerated Learning\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  11: [
    {
      id: "sc_day_11",
      title: "Variables & Datatypes in JavaScript",
      topics: [
        {
          id: "sc_day_11_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Variables & Datatypes in JavaScript\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_11_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Variables & Datatypes in JavaScript\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_11_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Variables & Datatypes in JavaScript\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  12: [
    {
      id: "sc_day_12",
      title: "Introduction to CSS | Part 1",
      topics: [
        {
          id: "sc_day_12_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to CSS | Part 1\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_12_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to CSS | Part 1\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_12_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to CSS | Part 1\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  13: [
    {
      id: "sc_day_13",
      title: "Introduction to CSS | Part 2",
      topics: [
        {
          id: "sc_day_13_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to CSS | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_13_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to CSS | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_13_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to CSS | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  14: [
    {
      id: "sc_day_14",
      title: "Type Conversion",
      topics: [
        {
          id: "sc_day_14_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Type Conversion\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_14_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Type Conversion\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_14_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Type Conversion\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  15: [
    {
      id: "sc_day_15",
      title: "Introduction to CSS | Part 3",
      topics: [
        {
          id: "sc_day_15_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to CSS | Part 3\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_15_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to CSS | Part 3\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_15_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to CSS | Part 3\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  16: [
    {
      id: "sc_day_16",
      title: "Sequence of Instructions",
      topics: [
        {
          id: "sc_day_16_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Sequence of Instructions\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_16_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Sequence of Instructions\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_16_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Sequence of Instructions\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  17: [
    {
      id: "sc_day_17",
      title: "Relational Operators",
      topics: [
        {
          id: "sc_day_17_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Relational Operators\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_17_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Relational Operators\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_17_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Relational Operators\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  18: [
    {
      id: "sc_day_18",
      title: "Introduction to CSS Box Model | Part 1",
      topics: [
        {
          id: "sc_day_18_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to CSS Box Model | Part 1\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_18_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to CSS Box Model | Part 1\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_18_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to CSS Box Model | Part 1\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  19: [
    {
      id: "sc_day_19",
      title: "Introduction to CSS Box Model | Part 2",
      topics: [
        {
          id: "sc_day_19_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to CSS Box Model | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_19_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to CSS Box Model | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_19_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to CSS Box Model | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  20: [
    {
      id: "sc_day_20",
      title: "Logical Operators",
      topics: [
        {
          id: "sc_day_20_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Logical Operators\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_20_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Logical Operators\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_20_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Logical Operators\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  21: [
    {
      id: "sc_day_21",
      title: "Conditional Statements",
      topics: [
        {
          id: "sc_day_21_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Conditional Statements\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_21_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Conditional Statements\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_21_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Conditional Statements\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  22: [
    {
      id: "sc_day_22",
      title: "HTML Void Elements & Lists",
      topics: [
        {
          id: "sc_day_22_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"HTML Void Elements & Lists\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_22_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"HTML Void Elements & Lists\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_22_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"HTML Void Elements & Lists\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  23: [
    {
      id: "sc_day_23",
      title: "Website: Behind the Scenes",
      topics: [
        {
          id: "sc_day_23_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Website: Behind the Scenes\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_23_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Website: Behind the Scenes\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_23_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Website: Behind the Scenes\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  24: [
    {
      id: "sc_day_24",
      title: "Nested Conditions and Switch Statement",
      topics: [
        {
          id: "sc_day_24_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Nested Conditions and Switch Statement\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_24_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Nested Conditions and Switch Statement\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_24_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Nested Conditions and Switch Statement\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  25: [
    {
      id: "sc_day_25",
      title: "HTML Hyperlinks",
      topics: [
        {
          id: "sc_day_25_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"HTML Hyperlinks\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_25_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"HTML Hyperlinks\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_25_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"HTML Hyperlinks\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  26: [
    {
      id: "sc_day_26",
      title: "String Basics",
      topics: [
        {
          id: "sc_day_26_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"String Basics\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_26_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"String Basics\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_26_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"String Basics\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  27: [
    {
      id: "sc_day_27",
      title: "String Methods",
      topics: [
        {
          id: "sc_day_27_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"String Methods\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_27_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"String Methods\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_27_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"String Methods\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  28: [
    {
      id: "sc_day_28",
      title: "Introduction to HTML5",
      topics: [
        {
          id: "sc_day_28_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to HTML5\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_28_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to HTML5\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_28_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to HTML5\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  29: [
    {
      id: "sc_day_29",
      title: "HTML Semantic Elements",
      topics: [
        {
          id: "sc_day_29_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"HTML Semantic Elements\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_29_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"HTML Semantic Elements\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_29_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"HTML Semantic Elements\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  30: [
    {
      id: "sc_day_30",
      title: "Introduction to Loops",
      topics: [
        {
          id: "sc_day_30_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to Loops\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_30_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to Loops\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_30_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to Loops\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  31: [
    {
      id: "sc_day_31",
      title: "Leveraging GenAI for Debugging & Building",
      topics: [
        {
          id: "sc_day_31_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Leveraging GenAI for Debugging & Building\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_31_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Leveraging GenAI for Debugging & Building\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_31_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Leveraging GenAI for Debugging & Building\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  32: [
    {
      id: "sc_day_32",
      title: "For Loop",
      topics: [
        {
          id: "sc_day_32_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"For Loop\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_32_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"For Loop\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_32_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"For Loop\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  33: [
    {
      id: "sc_day_33",
      title: "Nested Loops",
      topics: [
        {
          id: "sc_day_33_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Nested Loops\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_33_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Nested Loops\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_33_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Nested Loops\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  34: [
    {
      id: "sc_day_34",
      title: "More CSS Concepts",
      topics: [
        {
          id: "sc_day_34_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"More CSS Concepts\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_34_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"More CSS Concepts\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_34_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"More CSS Concepts\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  35: [
    {
      id: "sc_day_35",
      title: "CSS Selectors & Inheritance",
      topics: [
        {
          id: "sc_day_35_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"CSS Selectors & Inheritance\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_35_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"CSS Selectors & Inheritance\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_35_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"CSS Selectors & Inheritance\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  36: [
    {
      id: "sc_day_36",
      title: "Loop Control Statements",
      topics: [
        {
          id: "sc_day_36_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Loop Control Statements\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_36_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Loop Control Statements\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_36_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Loop Control Statements\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  37: [
    {
      id: "sc_day_37",
      title: "More CSS Selectors",
      topics: [
        {
          id: "sc_day_37_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"More CSS Selectors\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_37_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"More CSS Selectors\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_37_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"More CSS Selectors\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  38: [
    {
      id: "sc_day_38",
      title: "Introduction to Functions",
      topics: [
        {
          id: "sc_day_38_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to Functions\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_38_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to Functions\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_38_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to Functions\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  39: [
    {
      id: "sc_day_39",
      title: "Weekly Exam",
      topics: [
        {
          id: "sc_day_39_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Weekly Exam\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_39_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Weekly Exam\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_39_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Weekly Exam\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  40: [
    {
      id: "sc_day_40",
      title: "Functions | Part - 2",
      topics: [
        {
          id: "sc_day_40_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Functions | Part - 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_40_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Functions | Part - 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_40_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Functions | Part - 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  41: [
    {
      id: "sc_day_41",
      title: "CSS Specificity & Cascade",
      topics: [
        {
          id: "sc_day_41_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"CSS Specificity & Cascade\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_41_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"CSS Specificity & Cascade\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_41_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"CSS Specificity & Cascade\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  42: [
    {
      id: "sc_day_42",
      title: "Sizing Elements and Handling Overflow",
      topics: [
        {
          id: "sc_day_42_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Sizing Elements and Handling Overflow\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_42_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Sizing Elements and Handling Overflow\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_42_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Sizing Elements and Handling Overflow\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  43: [
    {
      id: "sc_day_43",
      title: "Arrow Functions, Scope & Hoisting",
      topics: [
        {
          id: "sc_day_43_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Arrow Functions, Scope & Hoisting\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_43_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Arrow Functions, Scope & Hoisting\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_43_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Arrow Functions, Scope & Hoisting\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  44: [
    {
      id: "sc_day_44",
      title: "Box Sizing",
      topics: [
        {
          id: "sc_day_44_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Box Sizing\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_44_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Box Sizing\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_44_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Box Sizing\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  45: [
    {
      id: "sc_day_45",
      title: "Introduction to Recursion",
      topics: [
        {
          id: "sc_day_45_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to Recursion\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_45_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to Recursion\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_45_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to Recursion\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  46: [
    {
      id: "sc_day_46",
      title: "Introduction to Arrays",
      topics: [
        {
          id: "sc_day_46_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to Arrays\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_46_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to Arrays\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_46_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to Arrays\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  47: [
    {
      id: "sc_day_47",
      title: "Introduction to CSS Flexbox",
      topics: [
        {
          id: "sc_day_47_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to CSS Flexbox\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_47_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to CSS Flexbox\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_47_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to CSS Flexbox\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  48: [
    {
      id: "sc_day_48",
      title: "Introduction to CSS Flexbox | Part 2",
      topics: [
        {
          id: "sc_day_48_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to CSS Flexbox | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_48_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to CSS Flexbox | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_48_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to CSS Flexbox | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  49: [
    {
      id: "sc_day_49",
      title: "Array Methods and Array Iteration",
      topics: [
        {
          id: "sc_day_49_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Array Methods and Array Iteration\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_49_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Array Methods and Array Iteration\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_49_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Array Methods and Array Iteration\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  50: [
    {
      id: "sc_day_50",
      title: "Introduction to CSS Flexbox | Part 3",
      topics: [
        {
          id: "sc_day_50_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to CSS Flexbox | Part 3\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_50_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to CSS Flexbox | Part 3\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_50_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to CSS Flexbox | Part 3\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  51: [
    {
      id: "sc_day_51",
      title: "More Array Methods",
      topics: [
        {
          id: "sc_day_51_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"More Array Methods\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_51_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"More Array Methods\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_51_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"More Array Methods\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  52: [
    {
      id: "sc_day_52",
      title: "Introduction to Objects",
      topics: [
        {
          id: "sc_day_52_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to Objects\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_52_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to Objects\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_52_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to Objects\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  53: [
    {
      id: "sc_day_53",
      title: "CSS Media Queries",
      topics: [
        {
          id: "sc_day_53_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"CSS Media Queries\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_53_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"CSS Media Queries\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_53_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"CSS Media Queries\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  54: [
    {
      id: "sc_day_54",
      title: "Flexbox Sizing",
      topics: [
        {
          id: "sc_day_54_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Flexbox Sizing\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_54_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Flexbox Sizing\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_54_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Flexbox Sizing\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  55: [
    {
      id: "sc_day_55",
      title: "Object Methods & Iteration",
      topics: [
        {
          id: "sc_day_55_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Object Methods & Iteration\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_55_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Object Methods & Iteration\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_55_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Object Methods & Iteration\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  56: [
    {
      id: "sc_day_56",
      title: "Building Responsive Web Page | Part - 1",
      topics: [
        {
          id: "sc_day_56_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Building Responsive Web Page | Part - 1\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_56_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Building Responsive Web Page | Part - 1\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_56_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Building Responsive Web Page | Part - 1\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  57: [
    {
      id: "sc_day_57",
      title: "Arrays of Objects",
      topics: [
        {
          id: "sc_day_57_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Arrays of Objects\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_57_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Arrays of Objects\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_57_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Arrays of Objects\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  58: [
    {
      id: "sc_day_58",
      title: "Spread & Rest Operators",
      topics: [
        {
          id: "sc_day_58_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Spread & Rest Operators\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_58_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Spread & Rest Operators\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_58_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Spread & Rest Operators\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  59: [
    {
      id: "sc_day_59",
      title: "Building Responsive Web Page | Part - 2",
      topics: [
        {
          id: "sc_day_59_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Building Responsive Web Page | Part - 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_59_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Building Responsive Web Page | Part - 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_59_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Building Responsive Web Page | Part - 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  60: [
    {
      id: "sc_day_60",
      title: "Building Responsive Web Page | Part - 3",
      topics: [
        {
          id: "sc_day_60_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Building Responsive Web Page | Part - 3\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_60_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Building Responsive Web Page | Part - 3\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_60_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Building Responsive Web Page | Part - 3\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  61: [
    {
      id: "sc_day_61",
      title: "Building a Website Using VS Code",
      topics: [
        {
          id: "sc_day_61_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Building a Website Using VS Code\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_61_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Building a Website Using VS Code\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_61_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Building a Website Using VS Code\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  62: [
    {
      id: "sc_day_62",
      title: "Getting Started with Git",
      topics: [
        {
          id: "sc_day_62_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Getting Started with Git\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_62_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Getting Started with Git\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_62_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Getting Started with Git\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  63: [
    {
      id: "sc_day_63",
      title: "Staging Area and Commits",
      topics: [
        {
          id: "sc_day_63_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Staging Area and Commits\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_63_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Staging Area and Commits\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_63_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Staging Area and Commits\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  64: [
    {
      id: "sc_day_64",
      title: "CSS Grid - 1",
      topics: [
        {
          id: "sc_day_64_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"CSS Grid - 1\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_64_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"CSS Grid - 1\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_64_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"CSS Grid - 1\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  65: [
    {
      id: "sc_day_65",
      title: "CSS Grid - 2",
      topics: [
        {
          id: "sc_day_65_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"CSS Grid - 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_65_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"CSS Grid - 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_65_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"CSS Grid - 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  66: [
    {
      id: "sc_day_66",
      title: "Factory and Constructor Functions",
      topics: [
        {
          id: "sc_day_66_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Factory and Constructor Functions\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_66_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Factory and Constructor Functions\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_66_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Factory and Constructor Functions\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  67: [
    {
      id: "sc_day_67",
      title: "CSS Grid - 3",
      topics: [
        {
          id: "sc_day_67_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"CSS Grid - 3\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_67_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"CSS Grid - 3\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_67_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"CSS Grid - 3\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  68: [
    {
      id: "sc_day_68",
      title: "CSS Grid - 4",
      topics: [
        {
          id: "sc_day_68_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"CSS Grid - 4\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_68_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"CSS Grid - 4\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_68_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"CSS Grid - 4\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  69: [
    {
      id: "sc_day_69",
      title: "Behavior of 'this' in Functions",
      topics: [
        {
          id: "sc_day_69_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Behavior of 'this' in Functions\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_69_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Behavior of 'this' in Functions\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_69_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Behavior of 'this' in Functions\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  70: [
    {
      id: "sc_day_70",
      title: "CSS Positioning - 1",
      topics: [
        {
          id: "sc_day_70_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"CSS Positioning - 1\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_70_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"CSS Positioning - 1\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_70_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"CSS Positioning - 1\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  71: [
    {
      id: "sc_day_71",
      title: "CSS Positioning - 2",
      topics: [
        {
          id: "sc_day_71_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"CSS Positioning - 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_71_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"CSS Positioning - 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_71_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"CSS Positioning - 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  72: [
    {
      id: "sc_day_72",
      title: "JS Classes",
      topics: [
        {
          id: "sc_day_72_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"JS Classes\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_72_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"JS Classes\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_72_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"JS Classes\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  73: [
    {
      id: "sc_day_73",
      title: "Introduction to Tailwind CSS",
      topics: [
        {
          id: "sc_day_73_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to Tailwind CSS\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_73_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to Tailwind CSS\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_73_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to Tailwind CSS\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  74: [
    {
      id: "sc_day_74",
      title: "Introduction to Tailwind CSS | Part 2",
      topics: [
        {
          id: "sc_day_74_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to Tailwind CSS | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_74_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to Tailwind CSS | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_74_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to Tailwind CSS | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  75: [
    {
      id: "sc_day_75",
      title: "Introduction to Dynamic Web Applications",
      topics: [
        {
          id: "sc_day_75_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to Dynamic Web Applications\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_75_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to Dynamic Web Applications\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_75_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to Dynamic Web Applications\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  76: [
    {
      id: "sc_day_76",
      title: "Building Responsive Website using Tailwind CSS",
      topics: [
        {
          id: "sc_day_76_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Building Responsive Website using Tailwind CSS\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_76_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Building Responsive Website using Tailwind CSS\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_76_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Building Responsive Website using Tailwind CSS\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  77: [
    {
      id: "sc_day_77",
      title: "Building a Responsive Website using GenAI",
      topics: [
        {
          id: "sc_day_77_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Building a Responsive Website using GenAI\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_77_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Building a Responsive Website using GenAI\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_77_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Building a Responsive Website using GenAI\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  78: [
    {
      id: "sc_day_78",
      title: "DOM and Event Fundamentals",
      topics: [
        {
          id: "sc_day_78_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"DOM and Event Fundamentals\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_78_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"DOM and Event Fundamentals\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_78_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"DOM and Event Fundamentals\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  79: [
    {
      id: "sc_day_79",
      title: "Fortnight Assessment - 3",
      topics: [
        {
          id: "sc_day_79_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Fortnight Assessment - 3\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_79_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Fortnight Assessment - 3\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_79_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Fortnight Assessment - 3\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  80: [
    {
      id: "sc_day_80",
      title: "More DOM Manipulations",
      topics: [
        {
          id: "sc_day_80_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"More DOM Manipulations\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_80_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"More DOM Manipulations\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_80_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"More DOM Manipulations\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  81: [
    {
      id: "sc_day_81",
      title: "JS Schedulers",
      topics: [
        {
          id: "sc_day_81_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"JS Schedulers\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_81_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"JS Schedulers\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_81_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"JS Schedulers\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  82: [
    {
      id: "sc_day_82",
      title: "Event Listeners and More Events",
      topics: [
        {
          id: "sc_day_82_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Event Listeners and More Events\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_82_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Event Listeners and More Events\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_82_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Event Listeners and More Events\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  83: [
    {
      id: "sc_day_83",
      title: "JS Promises",
      topics: [
        {
          id: "sc_day_83_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"JS Promises\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_83_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"JS Promises\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_83_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"JS Promises\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  84: [
    {
      id: "sc_day_84",
      title: "JS Promises and Error Handling",
      topics: [
        {
          id: "sc_day_84_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"JS Promises and Error Handling\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_84_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"JS Promises and Error Handling\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_84_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"JS Promises and Error Handling\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  85: [
    {
      id: "sc_day_85",
      title: "Hypertext Transfer Protocol (HTTP)",
      topics: [
        {
          id: "sc_day_85_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Hypertext Transfer Protocol (HTTP)\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_85_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Hypertext Transfer Protocol (HTTP)\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_85_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Hypertext Transfer Protocol (HTTP)\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  86: [
    {
      id: "sc_day_86",
      title: "HTTP Requests using JS | Part 1",
      topics: [
        {
          id: "sc_day_86_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"HTTP Requests using JS | Part 1\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_86_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"HTTP Requests using JS | Part 1\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_86_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"HTTP Requests using JS | Part 1\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  87: [
    {
      id: "sc_day_87",
      title: "HTTP Requests using JS | Part 2",
      topics: [
        {
          id: "sc_day_87_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"HTTP Requests using JS | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_87_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"HTTP Requests using JS | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_87_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"HTTP Requests using JS | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  88: [
    {
      id: "sc_day_88",
      title: "Forms",
      topics: [
        {
          id: "sc_day_88_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Forms\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_88_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Forms\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_88_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Forms\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  89: [
    {
      id: "sc_day_89",
      title: "Forms | Part 2",
      topics: [
        {
          id: "sc_day_89_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Forms | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_89_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Forms | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_89_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Forms | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  90: [
    {
      id: "sc_day_90",
      title: "JS Closures",
      topics: [
        {
          id: "sc_day_90_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"JS Closures\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_90_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"JS Closures\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_90_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"JS Closures\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  91: [
    {
      id: "sc_day_91",
      title: "Debouncing & Throttling",
      topics: [
        {
          id: "sc_day_91_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Debouncing & Throttling\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_91_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Debouncing & Throttling\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_91_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Debouncing & Throttling\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  92: [
    {
      id: "sc_day_92",
      title: "Building a Dynamic Website using GenAI",
      topics: [
        {
          id: "sc_day_92_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Building a Dynamic Website using GenAI\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_92_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Building a Dynamic Website using GenAI\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_92_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Building a Dynamic Website using GenAI\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  93: [
    {
      id: "sc_day_93",
      title: "JS Modules",
      topics: [
        {
          id: "sc_day_93_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"JS Modules\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_93_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"JS Modules\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_93_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"JS Modules\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  94: [
    {
      id: "sc_day_94",
      title: "Node Packages",
      topics: [
        {
          id: "sc_day_94_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Node Packages\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_94_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Node Packages\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_94_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Node Packages\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  95: [
    {
      id: "sc_day_95",
      title: "Introduction to ReactJS",
      topics: [
        {
          id: "sc_day_95_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to ReactJS\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_95_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to ReactJS\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_95_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to ReactJS\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  96: [
    {
      id: "sc_day_96",
      title: "Introduction to ReactJS | Part 2",
      topics: [
        {
          id: "sc_day_96_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Introduction to ReactJS | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_96_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Introduction to ReactJS | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_96_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Introduction to ReactJS | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  97: [
    {
      id: "sc_day_97",
      title: "Components and Props",
      topics: [
        {
          id: "sc_day_97_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Components and Props\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_97_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Components and Props\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_97_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Components and Props\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  98: [
    {
      id: "sc_day_98",
      title: "Components and Props | Part 2",
      topics: [
        {
          id: "sc_day_98_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Components and Props | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_98_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Components and Props | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_98_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Components and Props | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  99: [
    {
      id: "sc_day_99",
      title: "Lists & Keys",
      topics: [
        {
          id: "sc_day_99_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Lists & Keys\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_99_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Lists & Keys\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_99_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Lists & Keys\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  100: [
    {
      id: "sc_day_100",
      title: "State & Events",
      topics: [
        {
          id: "sc_day_100_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"State & Events\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_100_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"State & Events\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_100_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"State & Events\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  101: [
    {
      id: "sc_day_101",
      title: "Conditional Rendering",
      topics: [
        {
          id: "sc_day_101_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Conditional Rendering\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_101_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Conditional Rendering\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_101_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Conditional Rendering\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  102: [
    {
      id: "sc_day_102",
      title: "State Hook | Part 2",
      topics: [
        {
          id: "sc_day_102_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"State Hook | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_102_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"State Hook | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_102_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"State Hook | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  103: [
    {
      id: "sc_day_103",
      title: "State Hook | Part 2 | Delete Functionality",
      topics: [
        {
          id: "sc_day_103_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"State Hook | Part 2 | Delete Functionality\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_103_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"State Hook | Part 2 | Delete Functionality\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_103_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"State Hook | Part 2 | Delete Functionality\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  104: [
    {
      id: "sc_day_104",
      title: "Effect Hook and Rules of Hooks",
      topics: [
        {
          id: "sc_day_104_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Effect Hook and Rules of Hooks\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_104_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Effect Hook and Rules of Hooks\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_104_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Effect Hook and Rules of Hooks\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  105: [
    {
      id: "sc_day_105",
      title: "Effect Hook - 2",
      topics: [
        {
          id: "sc_day_105_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Effect Hook - 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_105_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Effect Hook - 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_105_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Effect Hook - 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  106: [
    {
      id: "sc_day_106",
      title: "Effect Hooks | Optimizing Performance",
      topics: [
        {
          id: "sc_day_106_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Effect Hooks | Optimizing Performance\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_106_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Effect Hooks | Optimizing Performance\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_106_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Effect Hooks | Optimizing Performance\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  107: [
    {
      id: "sc_day_107",
      title: "Making API Call with Hooks",
      topics: [
        {
          id: "sc_day_107_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Making API Call with Hooks\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_107_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Making API Call with Hooks\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_107_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Making API Call with Hooks\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  108: [
    {
      id: "sc_day_108",
      title: "Making API Call with Hooks | Part 2",
      topics: [
        {
          id: "sc_day_108_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Making API Call with Hooks | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_108_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Making API Call with Hooks | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_108_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Making API Call with Hooks | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  109: [
    {
      id: "sc_day_109",
      title: "Schedulers with Hooks",
      topics: [
        {
          id: "sc_day_109_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Schedulers with Hooks\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_109_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Schedulers with Hooks\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_109_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Schedulers with Hooks\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  110: [
    {
      id: "sc_day_110",
      title: "Schedulers with Hooks | Part 2",
      topics: [
        {
          id: "sc_day_110_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Schedulers with Hooks | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_110_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Schedulers with Hooks | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_110_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Schedulers with Hooks | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  111: [
    {
      id: "sc_day_111",
      title: "React Under the Hood",
      topics: [
        {
          id: "sc_day_111_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"React Under the Hood\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_111_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"React Under the Hood\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_111_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"React Under the Hood\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  112: [
    {
      id: "sc_day_112",
      title: "Routing using React Router",
      topics: [
        {
          id: "sc_day_112_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Routing using React Router\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_112_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Routing using React Router\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_112_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Routing using React Router\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  113: [
    {
      id: "sc_day_113",
      title: "Routing using React Router | Routing Components",
      topics: [
        {
          id: "sc_day_113_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Routing using React Router | Routing Components\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_113_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Routing using React Router | Routing Components\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_113_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Routing using React Router | Routing Components\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  114: [
    {
      id: "sc_day_114",
      title: "Routing Using React Router | Part 2",
      topics: [
        {
          id: "sc_day_114_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Routing Using React Router | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_114_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Routing Using React Router | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_114_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Routing Using React Router | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  115: [
    {
      id: "sc_day_115",
      title: "Authentication & Authorization",
      topics: [
        {
          id: "sc_day_115_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Authentication & Authorization\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_115_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Authentication & Authorization\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_115_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Authentication & Authorization\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  116: [
    {
      id: "sc_day_116",
      title: "Authentication & Authorization | Route Parameters",
      topics: [
        {
          id: "sc_day_116_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Authentication & Authorization | Route Parameters\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_116_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Authentication & Authorization | Route Parameters\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_116_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Authentication & Authorization | Route Parameters\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  117: [
    {
      id: "sc_day_117",
      title: "Authentication & Authorization | Part 2",
      topics: [
        {
          id: "sc_day_117_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Authentication & Authorization | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_117_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Authentication & Authorization | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_117_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Authentication & Authorization | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  118: [
    {
      id: "sc_day_118",
      title: "Authentication & Authorization | Handling Redirections",
      topics: [
        {
          id: "sc_day_118_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Authentication & Authorization | Handling Redirections\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_118_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Authentication & Authorization | Handling Redirections\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_118_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Authentication & Authorization | Handling Redirections\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  119: [
    {
      id: "sc_day_119",
      title: "Authentication & Authorization | Part 3",
      topics: [
        {
          id: "sc_day_119_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Authentication & Authorization | Part 3\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_119_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Authentication & Authorization | Part 3\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_119_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Authentication & Authorization | Part 3\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  120: [
    {
      id: "sc_day_120",
      title: "Sorting Products",
      topics: [
        {
          id: "sc_day_120_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"Sorting Products\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_120_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"Sorting Products\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_120_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"Sorting Products\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  121: [
    {
      id: "sc_day_121",
      title: "React Context",
      topics: [
        {
          id: "sc_day_121_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"React Context\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_121_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"React Context\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_121_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"React Context\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  122: [
    {
      id: "sc_day_122",
      title: "React Context | Part 2",
      topics: [
        {
          id: "sc_day_122_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"React Context | Part 2\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_122_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"React Context | Part 2\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_122_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"React Context | Part 2\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ],

  123: [
    {
      id: "sc_day_123",
      title: "React Context | Part 3",
      topics: [
        {
          id: "sc_day_123_t1",
          title: "Concept Overview",
          explanation: "This section gives you a clear conceptual foundation for \"React Context | Part 3\". You will learn the main ideas, definitions, and principles that underpin this area. Understanding these concepts first makes the hands-on work and assignments much easier. Pay attention to how the pieces fit together and how they relate to the rest of the curriculum. Take notes and revisit any part that feels unclear before moving to practice. The concept overview sets the stage for everything you will do in this day's learning."
        },
        {
          id: "sc_day_123_t2",
          title: "Hands-on Practice",
          explanation: "Here you apply the concepts of \"React Context | Part 3\" through guided exercises and examples. You will follow step-by-step instructions, write code or perform tasks, and see results in real time. Hands-on practice is where theoretical knowledge turns into practical skill. Use the editor, run your code, and experiment with small changes to deepen your understanding. If something does not work as expected, use the concepts from the overview to debug. Repeating and varying the exercises will help you retain what you learn and prepare you for the mini assignment."
        },
        {
          id: "sc_day_123_t3",
          title: "Mini Assignment / Implementation",
          explanation: "This mini assignment or implementation task lets you use what you have learned in \"React Context | Part 3\". You will build, implement, or solve something that ties together the concepts and practice from this day. Completing it reinforces your learning and shows how well you have understood the material. Use the concept overview and hands-on practice as reference while you work. Do your best to finish the assignment; it is a key part of tracking your progress. Submitting your work helps you and your mentors see how you are doing and where to focus next."
        }
      ]
    }
  ]
};
