const baseURL = 'https://restapi1234321.azurewebsites.net/api/ShoppingItems'


const app = Vue.createApp({
    data() {
        return {
            DataList: [],
            PostValue1: "",
            PostValue2: 1,
            PostValue3: 1,   
            DeleteID: 1,     
            name:"" , 
            price:1,

            errormsg:""
      
            
        }
    },
    created() {
        this.GetAll()
    },
    methods:{
        GetAll(){
            console.log("In GetAll Method")
            axios.get(baseURL)
            .then(response => {
                
                this.DataList = response.data;
            }).catch(error = (ex) => {
                
            })
           
        },






        Delete(id){
            uri = baseURL +"/"+id
            axios.delete(uri)
        

        
        },

    
        FilterName(name){
            this.DataList = this.DataList.filter(w => w.name.includes(name));
        },

        /*
        sortByPrice(){
            this.DataList = this.DataList.orderby(w => w.price)
        },
*/
        Add(){
            console.log("In Add Method")
            axios.post(baseURL, 
                {"name":this.PostValue1,"price":this.PostValue2,"quantity":this.PostValue3})
            .then(response => {
                console.log("Status kode: " + response.status)
            })
            
        },


        
    }
});