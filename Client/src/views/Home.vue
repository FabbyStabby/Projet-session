<template>
    <div class="container">
      <div class="picture">
        <img src="/stockPhoto.jpg">
      </div>
    
      <div class="aboutUs">
        <p>Blah Blah Blah</p>
      </div>
    </div>
    <div class="Contact">
  
  
    </div>
  </template>
  
  <style scoped>
  
    .container {
      display: flex;
      flex-direction: row;
      
  
    }
  
    .aboutUs {
      color: pink;
  
    }
  
    .picture {
      flex-grow: -1;
      align-items: left;
    }
  
    .aboutUs, .picture {
      background-color: rgb(51, 51, 51);
      border-radius: 15px;
      height: auto;
      padding: 10px;
      margin: 20px;
  
    }
  
  </style>