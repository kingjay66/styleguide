# Sass Coding Styleguide
This is not a visual styleguide. This coding styleguide's purpose is to:

- standardize code
- promote consistency
- increase productivity

This styleguide applies not only to our new approach of component based styling, but should also be considered for our legacy projects.


## Structure

Sass/\
|\
|– abstracts/ (or utilities/)\ *note: should not contain or output any actual CSS*\
|&nbsp; &nbsp; &nbsp; &nbsp;|– _colors.scss &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;// Sass colors variables\
|&nbsp; &nbsp; &nbsp; &nbsp;|– _fonts.scss &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; // Sass fonts variables\
|&nbsp; &nbsp; &nbsp; &nbsp;|– _breakpoints.scss &nbsp; &nbsp;// Sass breakpoints variables\
|&nbsp; &nbsp; &nbsp; &nbsp;|– _responsive.scss &nbsp; &nbsp; &nbsp;// Sass responsive mixins\
|&nbsp; &nbsp; &nbsp; &nbsp;|– _utilities.scss &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;// Sass utilities functions\
|\
|– modules/ (or partials/)\
|&nbsp; &nbsp; &nbsp; &nbsp;|– _reset.scss &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // reset/normalize\
|&nbsp; &nbsp; &nbsp; &nbsp;|– _base.scss &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // base rules\
|&nbsp; &nbsp; &nbsp; &nbsp;|– _grid.scss &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;// grid system\
|&nbsp; &nbsp; &nbsp; &nbsp;|– _layout.scss &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;// layout system\
|&nbsp; &nbsp; &nbsp; &nbsp;|– _typography.scss &nbsp; &nbsp;// typography rules\
|\
|– vendors/ *(when needed)*\
|&nbsp; &nbsp; &nbsp; &nbsp;|– _jquery-ui.scss &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;// jQuery UI\
|&nbsp; &nbsp; &nbsp; &nbsp;|– _owl-carousel.scss &nbsp; &nbsp;// owl carousel\
|\
– main.scss &nbsp; &nbsp; &nbsp; &nbsp;// Main Sass file

## Naming

### Extension
Use the `.scss` extension for Sass files.

### Pathname
Use kebab-case. e.g., `\site-styles`\

### Filename
Use kebab-case. e.g., `site-styles.scss`\
Use the leading underscore for partial Sass file. e.g., `_site-header.scss`\
The underscore signals to Sass to NOT compile a partial as a CSS file.

### Selector naming
A team agreed upon naming convention is incredibly critical in creating a more strict, transparent, and informative codebase.

Good naming will inform:

- what a class is doing or its intentions.
- where a class can be used.
- what a class's relation to another.

We use the BEM naming convention.

- **B**lock: root of the component.
- **E**lement: child component of the Block.
- **M**odifier: variant or extension of the Block.

```scss
/* block */
.post { }

/* element */*
.post__body { }

/* modifier */*
.post--short { }

```

## Import, Use, Forward

### Import
Order of imports:
1. Vendors.
2. Abstracts.
3. Modules/Partials.

```scss

/* Vendor */
@import "owl-carousel";

/* Abstracts */
@import "abstracts/colors";

/* Modules/Partials */
@import "modules/grid";

```

Do not import duplicate stylesheets.

```scss

/* Bad */*
@import "style-one.css";
@import "style-one.css";

/* Good */*
@import "style-one.css";
@import "style-two.css";

```

### Use
Use the [@use](https://Sass-lang.com/documentation/at-rules/use) rule for loading mixins, functions, and variables from other stylesheets.

- \<namespace>.\<variable>
- \<namespace>.\<function>()
- @include \<namespace>.\<mixin>()

```scss

@use "color.scss";

.section {
  color: color.$primary;
}

```

### Forward
Use the [@forward](https://Sass-lang.com/documentation/at-rules/forward) rule for loading Sass stylesheets to access its mixins, functions, and variables.

```scss
// _colors.scss
$primary: #FF0000;

```

```scss
// _base.scss
@forward "color.scss";

```

```scss
// _hero_.scss
@use "base.scss";

.section {
  color: base.$primary;
}

```

## Partials
These are smaller stylesheets for components or modules, e.g. `_side-bar.scss`\
Make as many partial files as possible for easy managing, maintenance, scanning, and reading.

## Syntax & Formatting
Stylelinting is used to maintain a standard in writing uniform css.\
Proper syntax and formatting in most cases do not affect browser performance, but are in place for the benefit of clarity and consistency in reading source code.\
Here's a reference to the working [stylelintrc](https://github.com/epandco/unthink-cli/blob/master/unthink-stack/src/client/.stylelintrc) configuration should it need to be used outside the stack.

### General rules
- two (2) space indents, no tabs
- 80 character wide columns
- multi-line CSS
- meaningful and purposeful use of whitespace

### Indentation
Indent by 2 spaces.

```scss

/* Bad */*
.hero {
background-color: aqua;
}

/* Bad */*
.hero {
    background-color: aqua;
}

/* Good */*
.hero {
  background-color: aqua;
}

```

### Spacing
Use a single space before the opening brace ({).\
Use a single space after the opening brace ({).\
Use a single space before the closing brace (}).

```scss

/* Bad */*
.hero {background-color: aqua;}

/* Good */*
.hero { background-color: aqua; }
}

```

Use a single space after the opening parentheses (().\
Use a single space before the closing parentheses ()).
```scss

/* Bad */*
.hero {
  width: calc(100%);
  background-image: url('../path/image.jpg');
}

/* Good  */*
.hero {
  width: calc( 100% );
  background-image: url( '../path/image.jpg' );
}

```

Use a single space after the colon (:).\
Do not use a space before the colon (:).

```scss

/* Bad */*
.hero {
  width :calc( 100% );
}

/* Good */*
.hero {
  width: calc( 100% );
}

```

### New lines
Place related selectors on the same line.\
Place unrelated selectors on new lines.

```scss

/* Bad */*
.hero, .hero-super, cta {
  background-color: red;
}

/* Good */*
.hero, .hero-super,
.cta {
  background-color: red;
}

```

Place new lines for each new declaration (property: value).

```scss
/* Bad */*
.hero {
  background-color: red; color: white;
}

/* Good */*
.hero {
  background-color: red;
  color: white;
}

```

Place the first declaration on a new line after the opening brace ({).\
Place the closing brace (}) on a new line.

```scss
/* Bad */*
.hero { background-color: red; color: white; }

/* Good */*
.hero {
  background-color: red;
  color: white;
}

```

**single rule exception.*

```scss
/* Good */*
.hero { background-color: red; }

```

### No empty blocks
Blocks should not remain empty.

```scss

/* Bad */*
.hero {}

/* Good */*
.hero { 
  height: 50px;
}

/* Good */*
.hero { 
  /* comment */
  // comment
}

```

### Comments
Comments should not remain empty.\
The double slash `//` should not be used in the final compiled css file.\
**please comment and document as much as possible to make clear the purpose of the code for yourself and the next developer.*

```scss

/* Bad */*
.hero {
  /**/

  /* */

  /*

  */

}

/* Good */*
.hero { 
  /* block comment */

  /*
   * multi-line block comment
  */

  // double slash comment

  /*
    double slash comment should not be used in the final css files.
    Use the css block comment format instead.
  */
}

```

### Quotes

Use single quotes for string values.

```scss
/* Bad */*
.section:after {
  content: "foo-x";
}

/* Good */*
.section:after {
  content: 'foo-x';
}

```

Use quotes for urls.

```scss

/* Bad */*
.section {
  background-image: url(../path/image.jpg);
}

/* Good */*
.section {
  background-image: url( '../path/image.jpg' );
}

```

### Generic font family
Use a generic font in the font stack.

```scss

/* Bad */*
p {
  font-family: Helvetica, Arial;
}

/* Good */*
p {
  font-family: Helvetica, Arial, sans-serif;
}

```

### Units
Use units defined in the CSS Specifications.\
Use units in the lowercase format.

```scss

/* Bad */*
.box { width: 100pixels; }
.box { width: 100PX; }

/* Good */*
.box { width: 100px; }

```

### Hexidecimal values ( e.g. `colors: ` )
Use the uppercase, longhand, non-named format for hexadecimal values.

```scss

/* Bad */*
.title { color: #fff13x; }
.title { color: #12345as; }
.title { color: #000; }
.title { color: black; }

/* Good */*
.title { color: #FFF138; }
.title { color: #123450AA; }
.title { color: #000000; }

```

### Property
Use valid properties defined in the CSS Specifications.

```scss

/* Bad */*
.hero { 
  colr: green;
}

/* Good */*
.hero {
  color: green;
}

```
Do not duplicate properties in a declaration block.

```scss

/* Bad */*
.hero { 
  width: 25%;
  width: 800px;
}

/* Good */*
.hero {
  width: 100px;
}

```
Use shorthand form when properties can be combined.

```scss

/* Bad */*
.hero { 
  padding-top: 5%;
  padding-right: 12px;
  padding-bottom: 15%;
  padding-left: 20px;
}

/* Good */*
.hero {
  padding: 5% 12px 15% 20px
}

```

### Calc
When using the calc() functions, calc must:
- be wrapped in parentheses
- have a single space after the opening parentheses (()
- have a single space before the closing parentheses ())
- have an expression
- must not be divisible by zero
- have an operator between the arguments
- have a single space around this operator

```scss

/* Bad */*
.sidebar { width: calc(); }
.sidebar { width: calc(100% 8px); }
.sidebar { width: calc(100% - - 8px); }
.sidebar { width: calc(100%+8px); }
.sidebar { width: calc(100%/0); }

/* Good */*
.sidebar { width: calc( 100% - 8px ); }
.sidebar { width: calc( 100% / 2 ); }

```

### Pseudo
Use valid pseudo elements and classes defined in the CSS Specifications.

```scss

/* Bad */*
.radio:unknown-class {
  content: '';
}

/* Bad */*
.radio::PSEUDO-Element {
  content: '';
}

/* Good */*
.radio:before {
  content: '';
}

/* Good */*
.radio::selection {
  content: '';
}

```

### Semicolons
Use a single semicolons.

```scss

/* Bad */*
.radio {
  background-color: #FFFFFF;;
}

/* Good */*
.radio {
  background-color: #FFFFFF;
}

```

### Shorthand property
Use the shorthand format for redundant values.

```scss

/* Bad */*
.section {
  padding: 2px 2px 2px 2px;
}

/* Good */*
.section {
  padding: 2px;
}

```

### Nesting
Use a max nesting depth of 3.

```scss

/* Bad */*
.section {
  & .body { /* 1 */
    & .cta { /* 2 */
      & .link { /* 3 */
        & .link-text { /* 4 */
          font-weight: bold;
        }
      }
    }
  }
}

/* Good */*
.section {
  & .body { /* 1 */
    & .link-text { /* 2 */
      font-weight: bold;
    }
  }
}

```

Root-level at-rules are not included in the nesting depth.

```scss

/* Good */*
@media print { /* ignored */
  .section {
    & .body { /* 1 */
      & .link-text { /* 2 */
        font-weight: bold;
      }
    }
  }
}

```

### Zeros
Use a leading zero for number values.

```scss

/* Bad */*
.section {
  width: .45rem;
}

/* Good */*
.section {
  width: 0.45rem;
}

```

Do not use a trailing zero for number values.

```scss

/* Bad */*
.section {
  height: 1.0rem;
  line-height: 1.0100;
}

/* Good */*
.section {
  height: 1rem;
  line-height: 1.01;
}

```

Exclude a unit for zero number values.\
**exception when animating with 0s.*

```scss

/* Bad */*
.section {
  top: 0px;
}

/* Good */*
.section {
  top: 0;
}

```

### Case
Use lowercase for keyword properties.

```scss
/* Bad */*
.section {
  WIDTH: 1px;
}

/* Bad */*
.section {
  Width: 1px;
}

/* Good */*
.section {
  width: 1px;
}

```

Use lowercase for keyword values.

```scss

/* Bad */*
.section {
  display: BLOCK;
}

/* Bad */*
.section {
  display: Block;
}

/* Good */*
.section {
  display: block;
}

```

### Specificity
Use rules of higher specificity after selectors of lower specificity.

```scss

/* Bad */*
.b .a {}
.a {}

/* Good */*
.a {}
.b .a {}

```

## Specificity in detail
[More detailed information](https://slicejack.com/quick-guide-to-css-specificity/)\
CSS specificity calculations take the form of four comma-separated values a,b,c,d.\
“a” are the most important while “d” are the least important.\
(a, b, c, d)\
- a (**0**,0,0,0) ***style="", inline***
- b (0,**0**,0,0) ***#, ids***
- c (0,0,**0**,0) ***., classes, [attribute-selector], :pseudo-classes***
- d (0,0,0,**0**) ***\</>, element***

You can think of it as a point score.\
1000 (inline style) > 0100 (ids)

**exception of using `!important` which is an automatic winner*
```scss

.section {
  // extends first
  @extend %base; 
  
  // includes second
  @include %base; 
   
  // regular styles
  width: 1px;

  
  // pseudos classes and elements
  &:hover {
    background-color: $hotyelow;
  }

  &::after {
    content: '';
    position: absolute;
  }
  
  // nested selectors
  & > title {
    font-size: 34px;
  }
}

```

For more portable component use try to limit, reduce, or eliminate the use of qualified selectors, e.g. `div.form-input`\
Using `.form-input` sans-qualifier (`div`) opens the component for easy reuse.

```scss
/* Bad */*
div.form-input {
  width: 1px;
  border-radius: 16px;
  border: #000000 2px solid;
}

/* Good */*
.form-input {
  width: 1px;
  border-radius: 16px;
  border: #000000 2px solid;
}

```

## Listing
General styling order:
1. extends
2. includes
3. regular styles
4. pseudos classes and elements
5. nested selectors

```scss

.section {
  // extends first
  @extend %base; 
  
  // includes second
  @include %base; 
   
  // regular styles
  width: 1px;

  
  // pseudos classes and elements
  &:hover {
    background-color: $hotyelow;
  }

  &::after {
    content: '';
    position: absolute;
  }
  
  // nested selectors
  & > title {
    font-size: 34px;
  }
}

```

## Recommended order of properties

- by type
- randomly
- alphabetical

```scss

.section {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

  /* Display & Box Model */
  display: inline-block;
  padding: 10px;
  margin: 10px;
  width: 100px;
  height: 100px;
  border: 10px solid #333;
  overflow: hidden;

  /* Color */
  background: #000;
  color: #fff
  
  /* Text */
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: right;

  /* Other */
  cursor: pointer;
}

```