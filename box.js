class Box
  {
    constructor(x,y,w,h)
    {
      this.x =x;
      this.y =y;
      this.w =w;
      this.h = h;
      this.vx=vx
    }

    show()
  {
    rect(this.x,this.y,this.w,this.h)
  }
    move(){
      this.x=this.x+this.vx;
  }
    bounce(){
      if(this.x>=width || this.x<=0){
        this.vx=-this.vx
      }
    }

  }
  
 
