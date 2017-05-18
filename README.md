# csvtojson
A small library that converts CSV to JSON faster

## Installation

  `npm install csvtojson`

## Usage

    var convert = require('csvtojson');

    var result=convert.csvstring(" john,jack,joe \n 1,2,3 \n 4,5,6");
  
  
  Output should be `''[{" john":" 1","jack":"2","joe ":"3 "},{" john":" 4","jack":"5","joe ":"6"}]''`


## Tests

  `npm test`

