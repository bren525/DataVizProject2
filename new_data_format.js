var data = {
  "facebook":{
      "total": 72,
      "male": 66,
      "female": 77,
      "white": 70,
      "black": 67,
      "hispanic": 75,
      "young": 82,
      "middle": 79,
      "old": 64,
      "senior": 48,
      "highschool": 71,
      "some": 72,
      "college": 72,
      "poor": 73,
      "fine": 72,
      "average": 66,
      "rich": 78,
      "urban": 74,
      "suburban": 72,
      "rural": 67
  },
  "pinterest":{
      "total": 31,
      "male": 16,
      "female": 44,
      "white": 32,
      "black": 23,
      "hispanic": 32,
      "young": 37,
      "middle": 36,
      "old": 24,
      "senior": 16,
      "highschool": 25,
      "some": 37,
      "college": 31,
      "poor": 24,
      "fine": 37,
      "average": 41,
      "rich": 30,
      "urban": 26,
      "suburban": 34,
      "rural": 31,
  },
  "instagram":{
      "total": 28,
      "male": 24,
      "female": 31,
      "white": 21,
      "black": 47,
      "hispanic": 38,
      "young": 55,
      "middle": 28,
      "old": 11,
      "senior": 4,
      "highschool": 25,
      "some": 32,
      "college": 26,
      "poor": 26,
      "fine": 27,
      "average": 30,
      "rich": 26,
      "urban": 32,
      "suburban": 28,
      "rural": 12,
  },
  "linkedin":{
      "total": 25,
      "male": 26,
      "female": 25,
      "white": 26,
      "black": 22,
      "hispanic": 22,
      "young": 22,
      "middle": 32,
      "old": 36,
      "senior": 12,
      "highschool": 9,
      "some": 25,
      "college": 46,
      "poor": 17,
      "fine": 21,
      "average": 32,
      "rich": 41,
      "urban": 30,
      "suburban": 26,
      "rural": 12
  },
  "twitter":{
      "total": 23,
      "male": 25,
      "female": 21,
      "white": 20,
      "black": 28,
      "hispanic": 28,
      "young": 32,
      "middle": 29,
      "old": 13,
      "senior": 6,
      "highschool": 19,
      "some": 23,
      "college": 27,
      "poor": 21,
      "fine": 19,
      "average": 25,
      "rich": 26,
      "urban": 30,
      "suburban": 21,
      "rural": 15
  }
}
formatted = {}
Object.keys(data["facebook"]).forEach(function(demo){
    formatted[demo] = [];
});
Object.keys(data).forEach(function(site){
    Object.keys(data[site]).forEach(function(demo){
        formatted[demo].push(data[site][demo])
    });
});
console.log(formatted);
var new_data ={
  "total": [
    72,
    31,
    28,
    25,
    23
  ],
  "male": [
    66,
    16,
    24,
    26,
    25
  ],
  "female": [
    77,
    44,
    31,
    25,
    21
  ],
  "white": [
    70,
    32,
    21,
    26,
    20
  ],
  "black": [
    67,
    23,
    47,
    22,
    28
  ],
  "hispanic": [
    75,
    32,
    38,
    22,
    28
  ],
  "young": [
    82,
    37,
    55,
    22,
    32
  ],
  "middle": [
    79,
    36,
    28,
    32,
    29
  ],
  "old": [
    64,
    24,
    11,
    36,
    13
  ],
  "senior": [
    48,
    16,
    4,
    12,
    6
  ],
  "highschool": [
    71,
    25,
    25,
    9,
    19
  ],
  "some": [
    72,
    37,
    32,
    25,
    23
  ],
  "college": [
    72,
    31,
    26,
    46,
    27
  ],
  "poor": [
    73,
    24,
    26,
    17,
    21
  ],
  "fine": [
    72,
    37,
    27,
    21,
    19
  ],
  "average": [
    66,
    41,
    30,
    32,
    25
  ],
  "rich": [
    78,
    30,
    26,
    41,
    26
  ],
  "urban": [
    74,
    26,
    32,
    30,
    30
  ],
  "suburban": [
    72,
    34,
    28,
    26,
    21
  ],
  "rural": [
    67,
    31,
    12,
    12,
    15
  ]
}