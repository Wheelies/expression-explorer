**expression-explorer** is a JQuery plugin for drilling down into an expression evaluation tree.
Take the following expression consisting of digits, basic mathematical operators and functions:
```
  (2+3) × (4+5) + Max(20+2, 31, 16, 62, 40)
```
This would evaluate as follows:
```
   (((2+3)×(4+5))+Max(22, 31, 16, 62, 40))  
 ⇒ ((5×9)+62)  
 ⇒ (45+62)  
 ⇒ 107
```

The **expression-explorer** control will begin by showing the answer then allow the user to drill-down to discover how a particular value was produced.

For example, the user will initially be presented with the final value presented as a button:

<img src='https://lh3.googleusercontent.com/-0cDW8R1vtKA/Tfmv_xw-3gI/AAAAAAAAAFA/v0-4LvRs7GA/107.png' alt='107' />

User clicks the `[107]` button which changes the control to this:

<img src='https://lh5.googleusercontent.com/-sbEQbxbEFtc/Tfmv_4EAD7I/AAAAAAAAAFI/xrzl6YKMvbA/45%25252B62.png' alt='45+62' />

`[62]` button is clicked which changes the control to this:

<img src='https://lh3.googleusercontent.com/-MPcInxAmUSg/Tfmv__16wwI/AAAAAAAAAFE/lWmNNSz-3es/45%25252BMax%25252822%25252C%25252031%25252C%25252016%25252C%25252062%25252C%25252040%252529.png' alt='45 + Max(22, 31, 16, 62, 40)'>

User now clicks <code>[22]</code>

<img src='https://lh3.googleusercontent.com/-VEXaatO4ksU/TfmwALYdKPI/AAAAAAAAAFM/U3RWuHp6RNQ/45%25252BMax%252528%25252820%25252B2%252529%25252C%25252031%25252C%25252016%25252C%25252062%25252C%25252040%252529.png' alt='45 + Max((20+2), 31, 16, 62, 40)' />
