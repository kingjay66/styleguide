# Riot Component Styleguide

## Naming

### Extensions

Use the `.riot` extension for Riot components.

### Filename

Use kebab-case for filenames. E.g., `site-header.riot`. 

### References

Use PascalCase when referencing Riot components:

    import SiteHeader from './site-header.riot'

### Component Names

```html
<!-- Good -->
<user-list />
<range-slider />
<text-input />

<!-- "app" is an acceptable abbreviation for "application" because
 vernacular uses "app" -->
<app-header />

<!-- "btn" is not acceptable.
     Use `button-group` instead -->
<btn-group />

<!-- All components are ui elements, so the prefix is does not provide value. -->
<ui-slider />

<!-- All of these components are Riot components, and more importantly,
     this namespaces the components as if it were part of Riot,
     which it is not. -->
<riot-slider />

<!-- Not W3 spec compliant -->
<slider />
```

### Component Properties

Avoid using DOM component attribute names for your properties. E.g., `style` or `onclick`.

## Alignment

Follow these alignment styles for Riot template syntax (and all HTML).

```html
<!-- Good -->
<user-list users={ state.userList }
           class="big-list"
           on-user-select={ onUserSelect } />

<!-- Bad -->
<user-list
  users={ state.userList }
  class="big-list"
  on-user-select={ onUserSelect } />

<!-- Bad -->
<user-list users={ state.userList }
  class="big-list"
  on-user-select={ onUserSelect } />
  
<!-- Bad -->
<user-list users={ state.userList } class="big-list" on-user-select={ onUserSelect } />
```

## Quotes

Always use double quotes (”) for template attributes, but single quotes (') for
all other JavaScript/TypeScript. Regular HTML attributes use double quotes, so
this mirrors that convention.

```html
<!-- Bad -->
<user-card name='Dan' />

<!-- Good -->
<user-card name="Dan" />

<!-- Good.
     Since the value of the attribute is only an expression, the
     quotes are not required. -->
<user-card name={ state.user.name } />

<!-- Good.
     The inner single quotes are part of a JavaScript expression. -->
<user-card name="{ 'Dan ' + state.lastName }" />
<user-card name={ 'Dan ' + state.lastName } />
```

## Spacing

### Template Expressions

Pad Riot template expression curly braces with spaces.

```html
<!-- Bad -->
<user-card name={state.user.name} />

<!-- Good -->
<user-card name={ state.user.name } />
```

### Self-closing Tags

Leave a space before your self-closing tag.

```html
<!-- Bad -->
<foo-bar/>

<!-- Good -->
<foo-bar />
```

### Whitespace

Extra whitespace between HTML elements is not bad. Use blank lines between 
elements to help make it more readable, and make it easier to notice separation
within parts of the layout.

**Example:**

```html
<div>
  ... a whole of of stuff ...
</div>

<!-- Notice the space between the previous section and this section -->
<div>
  ... a new section of stuff ...
</div>
```

## Props

### Prop Case in HTML

Always use kebab-case for prop names in HTML. This is to match HTML attributes.
Note that Riot provides the props in the JavaScript by transforming the
kebab-case attributes as camelCase. So `first-name` becomes `props.firstName`.

```html
<!-- Bad -->
<user-card firstName="Dan"
           LastName="Alexander"
           phone_number="123-4567"
           emailaddress={ state.user.emailAddress }/>

<!-- Good -->
<user-card first-name="Dan"
           last-name="Alexander"
           phone-number="123-4567"
           email-address={ state.user.emailAddress }/>
```

### Required and Optional Props

Required props should throw an error in the `onBeforeMount` lifecycle hook if
not provided.

```typescript
interface Props {
  firstName: string;
  lastName: string;
}

onBeforeMount(currentProps: Props): void {
  if (!currentProps.hasOwnProperty('firstName')) {
    throw new Error('UserCard is missing required property "firstName"');
  }
  if (!currentProps.hasOwnProperty('lastName')) {
    throw new Error('UserCard is missing required property "lastName"');
  }
}
```

Optional props should be marked as such.

```typescript
// In this example, firstName and lastName are required, and phoneNumber
// is optional; note that phoneNumber is marked as such via the "?".
interface Props {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
}
```

In short, a developer should be able to look at the `Props` declaration in the
component file and be able to determine what the component's attributes are and
whether they are optional or required.

## Tags

Always self-close tags that have no children.

```html
<!-- Bad -->
<user-card name="Dan"></user-card>

<!-- Good -->
<user-card name="Dan" />
```

## Methods

### No Underscore Prefix

Do not use underscore prefix for internal methods of a Riot component.

    Why? Underscore prefixes are sometimes used as a convention in other
    languages to denote privacy. But, unlike those languages, there is no
    native support for privacy in JavaScript, everything is public.
    Regardless of your intentions, adding underscore prefixes to your
    properties does not actually make them private, and any property
    (underscore-prefixed or not) should be treated as being public.

### Case

Methods should be camelCase.

```typescript
// bad
computetotal(): number { ... }

// bad
ComputeTotal(): number { ... }

// good
computeTotal(): number { ... }

// good
// It is correct to capitalize acronyms
retrieveZIPCode(): string { ... }
createUniqueURL(): string { ... }
```

### Naming

Methods should be named properly. The name should be representative of the
purpose of the function, be human-readable and have the correct grammatical
tense and spelling.It is extremely important to keep your method names
up-to-date. As code evolves, the name should be reevaluated to ensure that it
is still correct.

```typescript
// Bad.
// A Product object isn't what is being returned. So what IS being returned?
// It is probably the product's id.
getProduct(): number { ... }

// Good
getProductId(): number { ... }
```

### Event Handlers

Event handlers are JavaScript and should be camelCase.

Event handlers should be prefixed with “on”.

```html
<!-- Bad -->
<button onclick={ buttonClick }>Click Me</button>

<!-- Good -->
<button onclick={ onButtonClick }>Click Me</button>
```

## Ordering

1. Template code
1. Script
    1. `import` statements
    1. `Props` interface definition
    1. `State` interface definition
    1. Component interface definition
    1. `build()` function
        1. `state` implementation
        1. [Riot component lifecycle hooks](https://riot.js.org/documentation/#lifecycle-callbacks)
        1. Event handlers like `onSubmitClick()`
        1. Business logic functions
    1. `build.components`
    1. `export default build;`
1. Style
    1. `@use` or `@import` statements
    1. `:host` style blocks
    1. Other styles

## Templates

### No Top-Level Class Selectors

In a component’s template code, do not put class selectors on the top-level
component tag. This can cause conflicts when someone uses the component and
puts classes on it. It also is contrary to the design pattern for web
components.

```html
<!-- Bad -->
<user-card class="some-style">
  ...
  <style>
    .some-style {
      display: block;
    }
  </style>
</user-card>

<!-- Good -->
<user-card>
  ...
  <style>
    :host {
      display: block;
    }
  </style>
</user-card>
```

### Template Expression Priority

Template expressions should be prioritized over other HTML markup.

Template conditional expressions should have 1st priority on an element.

```html
<!-- Good: Put the "if" first -->
<div if={ state.showDiv }
     class="fancy-styles">...</div>
```

Template loop expressions should have 2nd priority on an element.

```html
<!-- Good.
     The "each" is 1st. -->
<li each={ item in state.list }
    class="list-item">{ item.title }</li>
    
<!-- Good.
     The "each" is after the "if" but before everything else. -->
<div if={ state.ready }
     each={ block in state.contentBlocks }
     class="content-block">...</div>
```

Put event handlers together at the end of the element attributes.

```html
<!-- Bad -->
<input type="text"
       onchange={ onInputChange }
       value={ props.inputValue }/>

<!-- Good -->
<input type="text"
       value={ props.inputValue }
       onchange={ onInputChange }/>
```

## Documentation

This is good practice for all HTML, not just Riot components.

### Comments

Use comments! Part of our stack is removing comments from the HTML in the final
version, so comment away! Comment things like structural pieces, form pieces,
SVGs, and template loops and conditionals (what is being looped through?).

```html
<!-- Main contact form -->
<div class="form primary">
  ...
  <!-- Age field is only shown in specific situations -->
  <input if="{ collectAge }" type="number"/>
</div>

<!-- Form "footer" with more information -->
<div class="after-form">
  <!-- TODO: Need to get actual legal copy for this -->
  ...
</div>
```

### TODO and FIXME Comments

Use TODO and FIXME in your HTML and JavaScript comments! `TODO` means something
still needs to be done, while `FIXME` means something has been implemented, but
should be re-implemented in a better way. Both should be accompanied by a
summary of what still needs to be done.
