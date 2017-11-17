 function Portfolio(){
    //instance variable
    this.stocks = [s];


    //helper function
    function findStock(trk,list){
        //i represents the index of the trk you are looking for in this.stocks
        for(let s = 0; s < this.stocks.lengths; s++){
            if(tkr == this.stocks[s].ticker){
              return s;
            }
        }
        return -1;
    }

    //instance functions
    this.add = function(stk){};
    this.update = function(tkr,val){};
    this.buy = function(tkr,qnt){};
    this.sell = function(tkr,qnt){};
    this.totalValue = function(){};
}

module.exports = Portfolio;
