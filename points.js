// https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/

/*
Connections:
0 - 1, 8, 15
1 - 0, 2
2 - 1, 7, 3
3 - 2, 4, 25H
4 - 3, 5
5 - 4, Bothin, 6, 9
6 - 5, 7, SH
7 - 2, 6, 8
8 - 0, 7, SAV
9 - 5, 14, 10, SH, HH/L
10 - 9, Pars, HH/L, 11 
11 - 10, LH, 12
12 - 11, CHE, 13
13 - 14, CHEW, 15
14 - 9, 13
15 - 13, 0
25H - 3
Bothin - 5
Pars - 10
SH - 6, 9, SAV
SAV - 8, SH
HH/Lido - 9, 10
LH - 11
CHE- 12
CHEW - 13
*/

let points = [
  { "id": 0, "x": 390, "y": 217, type: "point" },
  { "id": 1, "x": 397, "y": 151, type: "point" },
  { "id": 2, "x": 196, "y": 134, type: "point" },
  { "id": 3, "x": 146, "y": 130, type: "point" },
  { "id": 4, "x": 90, "y": 123, type: "point" },
  { "id": 5, "x": 93, "y": 183, type: "point" },
  { "id": 6, "x": 139, "y": 188, type: "point" },
  { "id": 7, "x": 199, "y": 195, type: "point" },
  { "id": 8, "x": 286, "y": 207, type: "point" },
  { "id": 9, "x": 100, "y": 254, type: "point" },
  { "id": 10, "x": 49, "y": 243, type: "point" },
  { "id": 11, "x": 50, "y": 280, type: "point" },
  { "id": 12, "x": 55, "y": 367, type: "point" },
  { "id": 13, "x": 126, "y": 339, type: "point" },
  { "id": 14, "x": 105, "y": 324, type: "point" },
  { "id": 15, "x": 370, "y": 258, type: "point" }
];

let dorms = [
  { "id": 0, "name": "25H", "x": 146, "y": 102, "type": "dorm" },
  { "id": 1, "name": "Bothin", "x": 72, "y": 162, "type": "dorm" },
  { "id": 2, "name": "Pars", "x": 54, "y": 223, "type": "dorm" },
  { "id": 3, "name": "HH/L", "x": 62, "y": 254, "type": "dorm" },
  { "id": 4, "name": "SH", "x": 139, "y": 248, "type": "dorm" },
  { "id": 5, "name": "SAV", "x": 283, "y": 238, "type": "dorm" },
  { "id": 6, "name": "LH", "x": 32, "y": 285, "type": "dorm" },
  { "id": 7, "name": "CHW", "x": 52, "y": 404, "type": "dorm" },
  { "id": 8, "name": "CHE", "x": 144, "y": 364, "type": "dorm" }
];





function getDistanceMeters(p0, p1) {
  let dis = dist(p0.x, p0.y, p1.x, p1.y);
  let metersPerPixel = 260.78 / 327.48;
  // 273 meters from Cate coord to Bothin
  // 167 pixels from Cate coord to Bothin
  // at factor = 1
  return dis * metersPerPixel / factor;
}
