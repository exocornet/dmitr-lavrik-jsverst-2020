class Snake{
    
    constructor(matrix, x, y, course){
        this.matrix = matrix;
        this.x = x;
        this.y = y;
        this.course = course;
    }
    
    show(){
        this.matrix.setCell(this.x, this.y, 'snake');
    }
    
    move(){
        this.matrix.setCell(this.x, this.y, '');
        
        switch(this.course){
            case 'right':
                this.x++;
                break;
        }
        
        this.matrix.setCell(this.x, this.y, 'snake');
    }

}