export const calculator = {
    operand1:0,
    operand2:0, 
  
    setValues:function(operand1:number,operand2:number){
        this.operand1=operand1;//+prompt('a?',0)
        this.operand2=operand2;
    },

    sum:function():number{
        return this.operand1+this.operand2;
    },

    mul:function():number{
        return this.operand1*this.operand2;
    }

} ;





