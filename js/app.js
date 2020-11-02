var app = new Vue({
    el: '#app',
    data: {
      factorial : '',
      kpk : '',
      input_1: '',
      input_2: '',
      wait: '',
    },
    methods : {
        res : function (){

            let i;
            let a = this.input_1;
            let b = this.input_2;

            if (a > b) {
                i = a;
                a = b;
                b = i;
               }
           
               for (i = b; i % a != 0 || i % b != 0; i++);
               this.kpk = i;
           
        },
        
    },
    watch: {
        input_1 : function(){
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
        }
    }
  });


  