expression-explorer is a JQuery plugin for drilling down into an expression evaluation tree.

Take the following expression consisting of digits, basic mathematical operators and functions:

       (2+3) × (4+5) + Max(20+2, 31, 16, 62, 40)
This would evaluate as follows:

       (((2+3)×(4+5))+Max(22, 31, 16, 62, 40))  
     ⇒ ((5×9)+62)  
     ⇒ (45+62)  
     ⇒ 107
The expression-explorer control will begin by showing the answer then allow the user to drill-down to discover how a particular value was produced.

For example, the user will initially be presented with the final value presented as a button:

![107](/readme-img/107.png)

User clicks the `[107]` button which changes the control to this:

![45+62](/readme-img/45+62.png)

`[62]` button is clicked which changes the control to this:

![45 + Max(22, 31, 16, 62, 40)](/readme-img/45+Max(22, 31, 16, 62, 40).png)

User now clicks `[22]`

![45 + Max((20+2), 31, 16, 62, 40)](/readme-img/45+Max((20+2), 31, 16, 62, 40).png)
