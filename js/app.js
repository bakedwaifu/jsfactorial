var app = new Vue({
    el: '#app',
    data: {
      factorial : '',
      kpk : '',
      input_1: '',
      input_2: '',
    },
    methods : {
        factorials : function (){
            if(this.input_1 < 0){
                this.factorial = 'Masukan Angka Diatas 0';
            }
            else{
                let i = '';
                let res = 1;
                for(i=1;i <= this.input_1;i++){
                    res *= i;
                }
                this.factorial = res;
            }
        },
        res : function (){
            let i,res_1,res_2;
            let count = this.input_1*this.input_2;

            for(i=1;i<count;i++){

                res_1 = i%this.input_1;
                res_2 = i%this.input_2;

                if(res_1==0 && res_2==0){
                    this.kpk = i;
                    break;
                }

            }
        }
    }
  });


  