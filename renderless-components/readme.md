### Slots  
[See Guide](https://vuejs.org/v2/guide/components-slots.html)    
__Basic structure of named Slots__  
The child component  named `Layout`:
```
<div class="card">
  <div class="header">
    <slot name="header">Default Content to be overriden if provided</slot>
  </div>
  <div class="content">
    <!-- This represents the default slot-->
    <slot>Default content to be overriden if provided</slot>
  </div>
  <div class="footer">
     <slot name="footer">Default content to be overriden if provided</slot>
  </div>
</div>
```
The Parent component:
```
<Layout>
  <template v-slot:header> 
    Home | About | Contact
  </template>
  <div>
    This is my main content. It goes straight to the default slot.
    If you wish to be exlicit, you may also wrap this default slot content in template tags and use the v-slot attribute: v-slot:default  
    Note that v-slot can only be used by template tag or the component tag.
  </div>
 <template v-slot:footer>
    @copy chucks 2020
 </template>
</Layout>
```  

__Scoped Slots__
Attributes bound to a `<slot>` element are called _slot props_.  
Slot props can be used to make data available to parent components as shown below  
The child component named `User`  
```
<div>
  <strong>User's Name</strong> 
  <slot v-bind:user="userDetails">
    {{ userDetails.firstname}}
 </slot>
</div>
```
The parent component:  

```
<User>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstname}} {{ slotProps.user.lastname}}
  </template>
</User>
```
In the above example the Child component's slot display the user's firstname as default text content.   
THe child component binds the `userDetails` object to its `user` attribute thus providing a `user` property accessable to the parent.   
The parent component named all slot props variable `slotProps` which gives it access to all the exposed slot props.  
The parent component then override the slot content using the `firstname` and `lastname` properties of the exposed `user` prop from the child component.   


__Abbreviated Syntax for Lone Default Slots__  
For lone default Slot like in the example for scoped slots above we can use the more consise syntax for the parent comonent. 
```
<User v-slot="slotProps">
   {{ slotProps.user.firstname}} {{ slotProps.user.lastname}}
</User>
```
Here we have discaded the `template` element and placed the `v-slot` attribute directly on the component element.  
Secondly we discarded the `default` arguement since `v-slot` without and arument implies the default slot. 
Do not mix this abbrevaited syntax with the named slots because it would lead to scope ambiguity.  

__Destructuring Slot Props__   
You may also access `slot props` by destructuring:  
```
<User v-slot="{ user }">  
  {{ user.firstname}} {{ user.lastname}}
</User>
```  

You can also rename the destructured slot property  
```
<User v-slot="{ user: person }">  
  {{ person.firstname}} {{ person.lastname}}
</User>
```  
Or you can define a fallback for cases where destructured property is undefined  
```
<User v-slot="{ user = { firstName: 'Guest'} }">  
  {{ user.firstname}} {{ user.lastname}}
</User>
```  

__Dynamic Slot Names__   
Use the `[]` operator to use a variable as `v-slot` argument for names slots:  
```
<Layout>
  <template v-slot:[slotNameVariable]> 
    Contnet
  </template>
</Layout>
```

__Named Slots Shorthand__  
The `v-slot:` attribute can be replaced by the sepecial symbol  `#`.
So that `v-slot:header` can also be written as `#header`  
```
<Layout>
  <template #header> 
    Contnet
  </template>
</Layout>
```  
The shorthand syntax can only be used with arguments.   
Slots what does not provide an argument can not use the shorthand, fr example an implicit default slot, `v-slot` which does not use an explicit argument can not use the shorthand syntax.
So this will not work
```
<User #="{ user }">  
  {{ user.firstname}} {{ user.lastname}}
</User>
```
But this will work
```
<User #default="{ user }">  
  {{ user.firstname}} {{ user.lastname}}
</User>
```
