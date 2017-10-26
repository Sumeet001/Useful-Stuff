Flexbox consists of flex containers and flex items.

A flex container is declared by setting the display property of an element to either flex (rendered as a block) or inline-flex (rendered as inline).

Inside a flex container there is one or more flex items.


Flex items are positioned inside a flex container along a flex line. By default there is only one flex line per flex container.

The following example shows three flex items. They are positioned by default: along the horizontal flex line, from left to right:

<!DOCTYPE html>
<html>
<head>
<style> 
.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}

.flex-item {
    background-color: cornflowerblue;
    width: 100px;
    height: 100px;
    margin: 10px;
}
</style>
</head>
<body>

<div class="flex-container">
  <div class="flex-item">flex item 1</div>
  <div class="flex-item">flex item 2</div>
  <div class="flex-item">flex item 3</div> 
</div>

</body>
</html>

Flex Direction
The flex-direction property specifies the direction of the flexible items inside the flex container. The default value of flex-direction is row (left-to-right, top-to-bottom).

The other values are as follows:

row-reverse - If the writing-mode (direction) is left to right, the flex items will be laid out right to left
column - If the writing system is horizontal, the flex items will be laid out vertically
column-reverse - Same as column, but reversed
The following example shows the result of using the row-reverse value:

.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}

The justify-content Property
The justify-content property horizontally aligns the flexible container's items when the items do not use all available space on the main-axis.

The possible values are as follows:

flex-start - Default value. Items are positioned at the beginning of the container
flex-end - Items are positioned at the end of the container
center - Items are positioned at the center of the container
space-between - Items are positioned with space between the lines
space-around - Items are positioned with space before, between, and after the lines
The following example shows the result of using the flex-end value:


.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}

The align-items Property
The align-items property vertically aligns the flexible container's items when the items do not use all available space on the cross-axis.

The possible values are as follows:

stretch - Default value. Items are stretched to fit the container
flex-start - Items are positioned at the top of the container
flex-end - Items are positioned at the bottom of the container
center - Items are positioned at the center of the container (vertically)
baseline - Items are positioned at the baseline of the container
The following example shows the result of using the stretch value (this is the default value):

.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: stretch;
    align-items: stretch;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}

The flex-wrap Property
The flex-wrap property specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line.

The possible values are as follows:

nowrap - Default value. The flexible items will not wrap
wrap - The flexible items will wrap if necessary
wrap-reverse - The flexible items will wrap, if necessary, in reverse order


#The align-content Property
    The align-content property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines.

    The possible values are as follows:

    stretch - Default value. Lines stretch to take up the remaining space
    flex-start - Lines are packed toward the start of the flex container
    flex-end - Lines are packed toward the end of the flex container
    center - Lines are packed toward the center of the flex container
    space-between - Lines are evenly distributed in the flex container
    space-around - Lines are evenly distributed in the flex container, with half-size spaces on either end
    The following example shows the result of using the center value:

    .flex-container {
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-align-content: center;
        align-content: center;
        width: 300px;
        height: 300px;
        background-color: lightgrey;
    }

#Perfect Centering
    In the following example we will solve an almost daily problem: perfect centering.

    It is very easy with flexbox. Setting margin: auto; will make the item perfectly centered in both axis:
    .flex-item {
        background-color: cornflowerblue;
        width: 75px;
        height: 75px;
        margin: auto;
    }

#CSS3 Flexbox Properties
    The following table lists the CSS properties used with flexbox:

    <table class="w3-table-all notranslate">

    <tbody>

    <tr>

    <th style="width:25%">Property</th>

    <th>Description</th>

    </tr>

    <tr>

    <td>[display](/cssref/pr_class_display.asp)</td>

    <td>Specifies the type of box used for an HTML element</td>

    </tr>

    <tr>

    <td>[flex-direction](/cssref/css3_pr_flex-direction.asp)</td>

    <td>Specifies the direction of the flexible items inside a flex container</td>

    </tr>

    <tr>

    <td>[justify-content](/cssref/css3_pr_justify-content.asp)</td>

    <td>Horizontally aligns the flex items when the items do not use all available space on the main-axis</td>

    </tr>

    <tr>

    <td>[align-items](/cssref/css3_pr_align-items.asp)</td>

    <td>Vertically aligns the flex items when the items do not use all available space on the cross-axis</td>

    </tr>

    <tr>

    <td>[flex-wrap](/cssref/css3_pr_flex-wrap.asp)</td>

    <td>Specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line</td>

    </tr>

    <tr>

    <td>[align-content](/cssref/css3_pr_align-content.asp)</td>

    <td>Modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines</td>

    </tr>

    <tr>

    <td>[flex-flow](/cssref/css3_pr_flex-flow.asp)</td>

    <td>A shorthand property for flex-direction and flex-wrap</td>

    </tr>

    <tr>

    <td>[order](/cssref/css3_pr_order.asp)</td>

    <td>Specifies the order of a flexible item relative to the rest of the flex items inside the same container</td>

    </tr>

    <tr>

    <td>[align-self](/cssref/css3_pr_align-self.asp)</td>

    <td>Used on flex items. Overrides the container's align-items property</td>

    </tr>

    <tr>

    <td>[flex](/cssref/css3_pr_flex.asp)</td>

    <td>Specifies the length of a flex item, relative to the rest of the flex items inside the same container</td>

    </tr>

    </tbody>

    </table>