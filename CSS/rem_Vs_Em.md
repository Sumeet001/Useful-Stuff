#Rem Vs Em units

    rem and em units are computed into pixel values by the browser, based on font sizes in your design.
    em units are based on the font size of the element they’re used on.
    rem units are based on the font size of the html element.
    em units can be influenced by font size inheritance from any parent element
    rem units can be influenced by font size inheritance from browser font settings.

    Use em units for sizing that should scale depending on the font size of an element other than the root.
    Use rem units for sizing that doesn’t need em units, and that should scale depending on browser font size settings.
    Use rem units unless you’re sure you need em units, including on font sizes.
    Use rem units on media queries
    Don’t use em or rem in multi column layout widths - use % instead.
    Don’t use em or rem if scaling would unavoidably cause a layout element to break.

@media screen and (max-width: 48rem) {
  .container .col {
    width: 95%;
  }
}