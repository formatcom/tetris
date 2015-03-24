var styleImg = [
    [['imagenes/0/0/0.png', 
     'imagenes/0/0/1.png', 
     'imagenes/0/0/1.png', 
     'imagenes/0/0/2.png'],
     
     ['imagenes/0/1/0.png', 
     'imagenes/0/1/1.png', 
     'imagenes/0/1/1.png', 
     'imagenes/0/1/2.png'],
     
     ['imagenes/0/0/0.png', 
     'imagenes/0/0/1.png', 
     'imagenes/0/0/1.png', 
     'imagenes/0/0/2.png'],
     
     ['imagenes/0/1/0.png', 
     'imagenes/0/1/1.png', 
     'imagenes/0/1/1.png', 
     'imagenes/0/1/2.png']
    ],
    
    [['imagenes/1/0/0.png', 
     'imagenes/1/0/1.png', 
     'imagenes/1/0/2.png', 
     'imagenes/1/0/3.png'],
     
     ['imagenes/1/1/0.png', 
     'imagenes/1/1/1.png', 
     'imagenes/1/1/2.png', 
     'imagenes/1/1/3.png'],
     
     ['imagenes/1/0/0.png', 
     'imagenes/1/0/1.png', 
     'imagenes/1/0/2.png', 
     'imagenes/1/0/3.png'],
     
     ['imagenes/1/1/0.png', 
     'imagenes/1/1/1.png', 
     'imagenes/1/1/2.png', 
     'imagenes/1/1/3.png']
    ],
    
    [['imagenes/2/0/0.png', 
     'imagenes/2/0/1.png', 
     'imagenes/2/0/2.png', 
     'imagenes/2/0/3.png'],
     
     ['imagenes/2/1/0.png', 
     'imagenes/2/1/1.png', 
     'imagenes/2/1/2.png', 
     'imagenes/2/1/3.png'],
     
     ['imagenes/2/2/0.png', 
     'imagenes/2/2/1.png', 
     'imagenes/2/2/2.png', 
     'imagenes/2/2/3.png'],
     
     ['imagenes/2/3/0.png', 
     'imagenes/2/3/1.png', 
     'imagenes/2/3/2.png', 
     'imagenes/2/3/3.png']
    ],
    
    [['imagenes/3/0/0.png', 
     'imagenes/3/0/1.png', 
     'imagenes/3/0/2.png', 
     'imagenes/3/0/3.png'],
     
     ['imagenes/3/1/0.png', 
     'imagenes/3/1/1.png', 
     'imagenes/3/1/2.png', 
     'imagenes/3/1/3.png'],
     
     ['imagenes/3/2/0.png', 
     'imagenes/3/2/1.png', 
     'imagenes/3/2/2.png', 
     'imagenes/3/2/3.png'],
     
     ['imagenes/3/3/0.png', 
     'imagenes/3/3/1.png', 
     'imagenes/3/3/2.png', 
     'imagenes/3/3/3.png']
    ],
    
    [['imagenes/4/0/0.png', 
     'imagenes/4/0/1.png', 
     'imagenes/4/0/2.png', 
     'imagenes/4/0/3.png'],
     
     ['imagenes/4/1/0.png', 
     'imagenes/4/1/1.png', 
     'imagenes/4/1/2.png', 
     'imagenes/4/1/3.png'],
     
     ['imagenes/4/0/0.png', 
     'imagenes/4/0/1.png', 
     'imagenes/4/0/2.png', 
     'imagenes/4/0/3.png'],
     
     ['imagenes/4/1/0.png', 
     'imagenes/4/1/1.png', 
     'imagenes/4/1/2.png', 
     'imagenes/4/1/3.png']
    ],
    
    [['imagenes/5/0/0.png', 
     'imagenes/5/0/1.png', 
     'imagenes/5/0/2.png', 
     'imagenes/5/0/3.png'],
     
     ['imagenes/5/1/0.png', 
     'imagenes/5/1/1.png', 
     'imagenes/5/1/2.png', 
     'imagenes/5/1/3.png'],
     
     ['imagenes/5/2/0.png', 
     'imagenes/5/2/1.png', 
     'imagenes/5/2/2.png', 
     'imagenes/5/2/3.png'],
     
     ['imagenes/5/3/0.png', 
     'imagenes/5/3/1.png', 
     'imagenes/5/3/2.png', 
     'imagenes/5/3/3.png']
    ],
    
    [['imagenes/6/0.png', 
     'imagenes/6/1.png', 
     'imagenes/6/2.png', 
     'imagenes/6/3.png'],
     
     ['imagenes/6/0.png', 
     'imagenes/6/1.png', 
     'imagenes/6/2.png', 
     'imagenes/6/3.png'],
     
     ['imagenes/6/0.png', 
     'imagenes/6/1.png', 
     'imagenes/6/2.png', 
     'imagenes/6/3.png'],
     
     ['imagenes/6/0.png', 
     'imagenes/6/1.png', 
     'imagenes/6/2.png', 
     'imagenes/6/3.png']
    ]
]

for (var imgi=0; imgi < styleImg.length; imgi++){
    for (var i=0; i < styleImg[imgi].length; i++){
        for (var f=0; f < styleImg[imgi][i].length; f++){
            AlmacenImg(styleImg[imgi][i][f]);
        }
    }
}

AlmacenImg('imagenes/pause.png');
AlmacenImg('imagenes/gameover.png');
AlmacenImg('imagenes/barra.png');
AlmacenImg('imagenes/next.png');
AlmacenImg('imagenes/interfaz.png');

var letras = [[[0,1,1,2],[3,4,4,5],[0,1,1,2],[3,4,4,5]],
              [[6,7,8,9],[10,11,12,13],[6,7,8,9],[10,11,12,13]],
              [[14,15,16,17],[18,19,20,21],[22,23,24,25],[26,27,28,29]],
              [[30,31,32,33],[34,35,36,37],[38,39,40,41],[42,43,44,45]],
              [[46,47,48,49],[50,51,52,53],[46,47,48,49],[50,51,52,53]],
              [[54,55,56,57],[58,59,60,61],[62,63,64,65],[66,67,68,69]],
              [[70,71,72,73],[70,71,72,73],[70,71,72,73],[70,71,72,73]]
             ];





