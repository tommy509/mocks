
let simLastSessionDetails = [
  { 
    imsi:"250010000004479", 
    iccid:'1234567890',
    startTime : '2019-08-30T11:06:38.333', 
    endTime : '2019-08-31T11:07:07.123', 
    updateTime : '2019-08-31T11:07:07.123',  
    location:{mnc:5,mcc:2,lac:20,cell:3},
    caption:'prueba 1',
    upLink:5, downLink:7, 
    status:'Live',
    labels: ["label1", "label2", "label3", "label4"],
    imei:10141280412804717770
    
  },
  {
  imsi:"228020500000016", 
  iccid:'123452267890',
  startTime : '2019-08-30T11:06:38.333', 
  endTime : '2019-08-31T11:07:07.123', 
  updateTime : '2019-08-31T11:07:07.123',  
  location:{mnc:5,mcc:2,lac:20,cell:3},
  caption:'prueba 1',
  upLink:5, downLink:7, 
  status:'Live',
  labels: ["label1",   "label3", "label4"],
  imei:10141280412804717770 ,
  
},
  { 
    imsi:"228020500000031", 
    iccid:'098765444321',
    startTime : '2019-09-30T11:06:38.333', 
    endTime : '2019-10-31T11:07:07.123', 
    pdateTime : '2019-08-31T11:07:07.123',  
    location:{mnc:5,mcc:2,lac:20,cell:3},
    caption: 'prueba 2',
    labels: ["label1",  "label4"],
    upLink:8, downLink:5, 
    status:'test',

    imei:10151870412504716770 
  }
];

module.exports = simLastSessionDetails;