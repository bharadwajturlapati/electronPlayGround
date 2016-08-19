const {clipboard} = require('electron')
clipboard.writeText('Example String')
// clip board is a temporary space when you say copy and then paste it
// or cut and paste.
// it stores the format in a temporaary space
// bind this functionality to ctrl+c and ctrl+v 